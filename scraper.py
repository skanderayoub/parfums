from flask import Flask, jsonify
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import time
import json

app = Flask(__name__)

def scrape_fragrantica():
    # Configuration de Selenium
    options = Options()
    options.add_argument("start-maximized")
    options.add_argument("headless")  # Exécution sans interface graphique
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    
    perfumes = []
    url = "https://www.fragrantica.com/search/"
    driver.get(url)
    time.sleep(5)  # Attendre le chargement initial
    
    # Cliquer sur "Show more results" pour charger plus de parfums
    for _ in range(3):  # Limité à 3 clics pour éviter le blocage
        try:
            driver.find_element(By.XPATH, '//button[normalize-space()="Show more results"]').click()
            time.sleep(5)
        except Exception as e:
            print(f"Erreur lors du chargement des résultats: {e}")
            break
    
    # Extraire le HTML
    html = driver.page_source
    soup = BeautifulSoup(html, "html.parser")
    perfume_grid = soup.find("span", class_="grid-x grid-margin-x grid-margin-y small-up-3 medium-up-2 large-up-4 perfumes-row text-center")
    
    if not perfume_grid:
        driver.quit()
        return perfumes
    
    # Extraire les liens des parfums
    perfume_links = perfume_grid.find_all("a", href=True)
    for link in perfume_links[:20]:  # Limité à 20 parfums pour cet exemple
        try:
            perfume_url = link['href']
            driver.get(perfume_url)
            time.sleep(3)
            perfume_html = driver.page_source
            perfume_soup = BeautifulSoup(perfume_html, "html.parser")
            
            # Extraire les informations
            name = perfume_soup.find_all("div", class_="cell small-12")[3].find_all("b")[0].get_text().strip()
            brand = perfume_soup.find_all("div", class_="cell small-12")[3].find_all("b")[1].get_text().strip()
            gender = perfume_soup.find("small").get_text().strip().lower()
            try:
                rating = float(perfume_soup.find("p", class_="info-note").find_all("span")[0].get_text())
            except:
                rating = None
            try:
                votes = int(perfume_soup.find("p", class_="info-note").find_all("span")[2].get_text().replace(',', ''))
            except:
                votes = None
            accords = []
            accord_boxes = perfume_soup.find_all("div", class_="cell accord-box")
            for box in accord_boxes:
                accord_name = box.get_text().strip()
                accords.append(accord_name.lower())
            notes_sections = perfume_soup.find_all("div", class_="cell small-12")[3].find_all("div", class_="note-box")
            notes = []
            for section in notes_sections:
                note_elements = section.find_all("span", class_="link-span")
                for note in note_elements:
                    notes.append(note.get_text().strip().lower())
            
            # Estimer la tranche d'âge basée sur les notes et le genre (approximation)
            age_range = ["23-40"]  # Par défaut
            if any(note in ["citrus", "bergamot", "lemon", "yuzu"] for note in notes):
                age_range.append("18-23")  # Notes fraîches populaires chez les jeunes
            if any(note in ["oud", "amber", "musk", "vanilla"] for note in notes):
                age_range.append("40+")  # Notes riches pour les tranches d'âge plus élevées
            
            # Mapper les accords aux familles olfactives
            family = "floral" if any(accord in ["floral", "white floral", "rose"] for accord in accords) else \
                    "woody" if any(accord in ["woody", "sandalwood", "cedar", "oud"] for accord in accords) else \
                    "oriental" if any(accord in ["oriental", "vanilla", "amber"] for accord in accords) else \
                    "fresh" if any(accord in ["citrus", "aquatic", "green"] for accord in accords) else \
                    "spicy" if any(accord in ["spicy", "warm spicy"] for accord in accords) else "other"
            
            perfume_data = {
                "name": name,
                "brand": brand,
                "family": family,
                "notes": notes,
                "gender": [gender] if gender in ["men", "women", "unisex"] else ["unisex"],
                "age_range": age_range,
                "rating": rating,
                "votes": votes
            }
            perfumes.append(perfume_data)
        except Exception as e:
            print(f"Erreur lors du scraping du parfum {link.get_text()}: {e}")
    
    driver.quit()
    
    # Sauvegarder les données dans un fichier JSON
    with open("perfumes.json", "w", encoding="utf-8") as f:
        json.dump(perfumes, f, ensure_ascii=False, indent=2)
    
    return perfumes

# API pour récupérer les parfums
@app.route("/api/perfumes", methods=["GET"])
def get_perfumes():
    try:
        with open("perfumes.json", "r", encoding="utf-8") as f:
            perfumes = json.load(f)
        return jsonify(perfumes)
    except FileNotFoundError:
        perfumes = scrape_fragrantica()
        return jsonify(perfumes)

# API pour filtrer les parfums selon les critères
@app.route("/api/perfumes/filter", methods=["GET"])
def filter_perfumes():
    from flask import request
    profile = request.args.get("profile")
    gender = request.args.get("gender")
    age_range = request.args.get("age")
    
    try:
        with open("perfumes.json", "r", encoding="utf-8") as f:
            perfumes = json.load(f)
    except FileNotFoundError:
        perfumes = scrape_fragrantica()
    
    filtered_perfumes = [
        p for p in perfumes
        if p["family"] == profile and
           gender.lower() in [g.lower() for g in p["gender"]] and
           age_range in p["age_range"]
    ]
    
    # Trier par rating (si disponible) et limiter à 3 résultats
    filtered_perfumes = sorted(
        filtered_perfumes,
        key=lambda x: x["rating"] if x["rating"] is not None else 0,
        reverse=True
    )[:3]
    
    return jsonify(filtered_perfumes)

if __name__ == "__main__":
    app.run(debug=True, port=5000)