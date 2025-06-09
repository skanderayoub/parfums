// Products Data
const productsData = [
    { name: "Bougie Simple", image: "assets/bougie_simple.jpg", price: "65,70 TND", description: "Une bougie élégante pour une ambiance chaleureuse." },
    { name: "Bougie 390g", image: "assets/bougie_390g.jpg", price: "131,70 TND", description: "✨ L'élégance intemporelle, notre bougie parfumée 390g en céramique noir mat, une création exquise de Candle Bar. 🖤🕯️" },
    { name: "Diffuseur Noir Mat 125ml", image: "assets/DiffuseurNoirMat125ml.jpg", price: "131,70 TND", description: "Transformez votre espace avec notre diffuseur élégant. Les tiges en rotin dispersent délicatement le parfum." },
    { name: "Diffuseur Voiture", image: "assets/DiffuseurVoiture.jpg", price: "49,20 TND", description: "Choisissez parmi nos senteurs enchanteresses pour vos trajets." }
];

// Quiz Data (abbreviated for brevity, full version as before)
const questions = [
    {
        question: "Quel est votre sexe ?",
        type: "single",
        options: [
            { text: "Féminin", value: "female", score: {}, icon: "" },
            { text: "Masculin", value: "male", score: {}, icon: "" },
            { text: "Unisexe/Non-binaire", value: "unisex", score: {}, icon: "" }
        ]
    },
    {
        question: "Quelle est votre tranche d'âge ?",
        type: "single",
        options: [
            { text: "18-23 ans", value: "18-23", score: {}, icon: "" },
            { text: "23-40 ans", value: "23-40", score: {}, icon: "" },
            { text: "40 ans et plus", value: "40+", score: {}, icon: "" }
        ]
    },
    {
        question: "Quelles familles olfactives allument votre flamme ? (Plusieurs choix possibles)",
        type: "multiple",
        multiple: true,
        options: [
            { text: "Florale (rose, jasmin, tubéreuse)", value: "floral", score: { floral: 3 }, icon: "🌹" },
            { text: "Boisée (cèdre, santal, oud)", value: "woody", score: { woody: 3 }, icon: "🌳" },
            { text: "Orientale (vanille, ambre, musc)", value: "oriental", score: { oriental: 3 }, icon: "🪔" },
            { text: "Fraîche (bergamote, citron, notes marines)", value: "fresh", score: { fresh: 3 }, icon: "🍋" },
            { text: "Épicée (poivre, safran, cardamome)", value: "spicy", score: { spicy: 3 }, icon: "🌶️" }
        ]
    },
    {
        question: "Dans quels moments votre parfum brille-t-il ? (Plusieurs choix possibles)",
        type: "multiple",
        multiple: true,
        options: [
            { text: "Au quotidien (travail, casual)", value: "daily", score: { fresh: 2, floral: 1 }, icon: "☀️" },
            { text: "Soirées ou occasions spéciales", value: "evening", score: { oriental: 2, woody: 1 }, icon: "🌙" },
            { text: "En fonction des saisons", value: "seasonal", score: { fresh: 1, floral: 1 }, icon: "🍂" },
            { text: "Pour exprimer ma personnalité", value: "personality", score: { oriental: 1, floral: 1, woody: 1 }, icon: "✨" }
        ]
    },
    {
        question: "Quel est votre type de peau ?",
        type: "single",
        options: [
            { text: "Grasse (parfums plus intenses)", value: "oily", score: { oriental: 2, spicy: 1 }, icon: "💧" },
            { text: "Sèche (parfums moins persistants)", value: "dry", score: { floral: 2, fresh: 1 }, icon: "🌵" },
            { text: "Sensible (éviter certains ingrédients)", value: "sensitive", score: { fresh: 2, floral: 1 }, icon: "🍃" },
            { text: "Normale", value: "normal", score: { floral: 1, woody: 1, oriental: 1, fresh: 1 }, icon: "⚖️" }
        ]
    },
    {
        question: "Quelle intensité de parfum fait vibrer votre âme ?",
        type: "single",
        options: [
            { text: "Légère et discrète", value: "light", score: { fresh: 2, floral: 1 }, icon: "💨" },
            { text: "Modérée, équilibrée", value: "moderate", score: { floral: 1, woody: 1 }, icon: "🌬️" },
            { text: "Intense et audacieuse", value: "bold", score: { oriental: 2, woody: 1 }, icon: "🔥" }
        ]
    },
    {
        question: "Quelles notes olfactives enflamment vos sens ? (Plusieurs choix possibles)",
        type: "multiple",
        multiple: true,
        options: [
            { text: "Rose", value: "rose", score: { floral: 3 }, icon: "🌹" },
            { text: "Oud", value: "oud", score: { woody: 3 }, icon: "🌲" },
            { text: "Vanille", value: "vanilla", score: { oriental: 3 }, icon: "🍦" },
            { text: "Bergamote", value: "bergamot", score: { fresh: 3 }, icon: "🍋" },
            { text: "Safran", value: "saffron", score: { spicy: 3 }, icon: "🌶️" },
            { text: "Fruits rouges", value: "red_berries", score: { floral: 2, fresh: 1 }, icon: "🍓" }
        ]
    },
    {
        question: "Comment décririez-vous votre personnalité ?",
        type: "single",
        options: [
            { text: "Sophistiquée et élégante", value: "sophisticated", score: { floral: 2, oriental: 1 }, icon: "💎" },
            { text: "Aventureuse et audacieuse", value: "adventurous", score: { woody: 2, spicy: 1 }, icon: "🏞️" },
            { text: "Énergique et lumineuse", value: "energetic", score: { fresh: 2, floral: 1 }, icon: "⚡" },
            { text: "Romantique et douce", value: "romantic", score: { floral: 2, oriental: 1 }, icon: "💖" }
        ]
    },
    {
        question: "Quelles saisons inspirent vos parfums ? (Plusieurs choix possibles)",
        type: "multiple",
        multiple: true,
        options: [
            { text: "Printemps (frais, floral)", value: "spring", score: { floral: 2, fresh: 1 }, icon: "🌸" },
            { text: "Été (léger, citronné)", value: "summer", score: { fresh: 3 }, icon: "☀️" },
            { text: "Automne (boisé, chaleureux)", value: "fall", score: { woody: 2, oriental: 1 }, icon: "🍂" },
            { text: "Hiver (riche, épicé)", value: "winter", score: { oriental: 2, spicy: 1 }, icon: "❄️" }
        ]
    },
    {
        question: "Quelle importance accordez-vous à la longévité de votre parfum ? (1 à 5)",
        type: "scale",
        options: [
            { text: "1 (Peu important)", value: 1, score: { fresh: 1 }, icon: "⏳" },
            { text: "2", value: 2, score: { fresh: 1, floral: 1 }, icon: "⏳" },
            { text: "3", value: 3, score: { floral: 1, woody: 1 }, icon: "⏳" },
            { text: "4", value: 4, score: { woody: 1, oriental: 1 }, icon: "⏳" },
            { text: "5 (Très important)", value: 5, score: { oriental: 2, woody: 1 }, icon: "⏳" }
        ]
    }
];

const perfumeDatabase = [
    { name: "Chanel Chance Eau Fraîche", brand: "Chanel", family: "fresh", notes: ["citron", "jasmin", "teck"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily", "seasonal"], gender: ["female", "unisex"], ageRange: ["18-23", "23-40"] },
    { name: "Dior Miss Dior Eau de Parfum", brand: "Dior", family: "floral", notes: ["rose", "pivoine", "muguet"], skinType: ["normal", "dry"], intensity: "moderate", context: ["daily", "evening"], gender: ["female"], ageRange: ["18-23", "23-40"] },
    { name: "Lancôme La Vie Est Belle", brand: "Lancôme", family: "floral", notes: ["iris", "vanille", "praline"], skinType: ["dry", "normal"], intensity: "moderate", context: ["evening", "personality"], gender: ["female"], ageRange: ["23-40", "40+"] }
];

// Theme and Navigation
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const mobileThemeToggle = document.getElementById("mobileThemeToggle");
    const body = document.body;
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const mobileMenu = document.getElementById("mobileMenu");

    // Check saved theme or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        themeToggle.innerHTML = '<i class="fas fa-sun mr-1"></i> Thème';
        mobileThemeToggle.innerHTML = '<i class="fas fa-sun mr-2"></i> Thème';
    }

    [themeToggle, mobileThemeToggle].forEach(toggle => {
        toggle.addEventListener("click", () => {
            body.classList.toggle("dark-theme");
            const isDark = body.classList.contains("dark-theme");
            toggle.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'} mr-${isDark ? 1 : 2}"></i> Thème`;
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    });

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // Products Logic
    const productGrid = document.getElementById("productGrid");
    productsData.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card animate-fade-in";
        card.innerHTML = `
      <div class="aspect-w-3 aspect-h-2">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain cursor-pointer">
      </div>
      <h3 class="text-lg font-semibold mt-1 text-center">${product.name}</h3>
      <div class="product-info text-sm">
        <p class="font-bold">${product.price}</p>
        <p>${product.description}</p>
      </div>
    `;
        //card.querySelector("img").addEventListener("click", () => card.classList.toggle("active"));
        productGrid.appendChild(card);
    });
});

// Quiz Logic (only for quiz.html)
if (document.getElementById("quiz")) {
    let currentQuestion = 0;
    let answers = {};
    let profileScores = { floral: 0, woody: 0, oriental: 0, fresh: 0, spicy: 0 };

    const quizSection = document.getElementById("quiz");
    const resultsSection = document.getElementById("results");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
    const profileResult = document.getElementById("profileResult");
    const perfumeList = document.getElementById("perfumeList");
    const restartQuizBtn = document.getElementById("restartQuiz");
    const profileChart = document.getElementById("profileChart").getContext("2d");

    function showQuestion() {
        const q = questions[currentQuestion];
        questionElement.textContent = q.question;
        optionsElement.innerHTML = "";
        if (q.multiple) {
            q.options.forEach((option, index) => {
                const btn = document.createElement("button");
                btn.className = `toggle-btn w-full text-left flex items-center justify-between p-2 rounded ${answers[currentQuestion] && answers[currentQuestion].includes(option.value) ? "selected" : ""}`;
                btn.innerHTML = `<span>${option.text}</span><span class="text-lg">${option.icon}</span>`;
                btn.onclick = () => toggleOption(option.value, option.score);
                optionsElement.appendChild(btn);
            });
        } else {
            q.options.forEach((option, index) => {
                const btn = document.createElement("button");
                btn.className = `option-btn w-full text-left flex items-center justify-between p-2 rounded hover:bg-amber-100 ${q.type === "scale" ? "justify-between" : ""}`;
                btn.innerHTML = `<span>${option.text}</span><span class="text-lg">${option.icon}</span>`;
                btn.onclick = () => selectOption(option.value, option.score);
                optionsElement.appendChild(btn);
            });
        }
        prevBtn.classList.toggle("hidden", currentQuestion === 0);
        const progress = ((currentQuestion + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
    }

    function selectOption(value, score) {
        answers[currentQuestion] = value;
        Object.keys(score).forEach(key => {
            profileScores[key] += score[key];
        });
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            showResults();
        }
    }

    function toggleOption(value, score) {
        if (!answers[currentQuestion]) answers[currentQuestion] = [];
        const index = answers[currentQuestion].indexOf(value);
        if (index === -1) {
            answers[currentQuestion].push(value);
            Object.keys(score).forEach(key => {
                profileScores[key] += score[key] / (answers[currentQuestion].length || 1);
            });
        } else {
            answers[currentQuestion].splice(index, 1);
            Object.keys(score).forEach(key => {
                profileScores[key] -= score[key] / (answers[currentQuestion].length + 1 || 1);
            });
        }
        showQuestion();
    }

    function calculateProfile() {
        const maxScore = Math.max(...Object.values(profileScores));
        const dominantProfile = Object.keys(profileScores).find(key => profileScores[key] === maxScore);
        const gender = answers[0];
        const ageRange = answers[1];
        const skinType = answers[4];
        const intensity = answers[5];
        const contexts = answers[3] || [];
        return { dominantProfile, gender, ageRange, skinType, intensity, contexts };
    }

    function getPerfumeRecommendations(profile, gender, ageRange, skinType, intensity, contexts) {
        return perfumeDatabase
            .filter(perfume =>
                perfume.family === profile &&
                perfume.gender.includes(gender) &&
                perfume.ageRange.includes(ageRange) &&
                perfume.skinType.includes(skinType) &&
                perfume.intensity === intensity &&
                contexts.some(ctx => perfume.context.includes(ctx))
            )
            .slice(0, 3)
            .map(perfume => ({
                name: `${perfume.brand} - ${perfume.name}`,
                details: `Notes: ${perfume.notes.join(", ")}<br>Idéal pour: ${perfume.gender.join(", ")}, ${perfume.ageRange.join(", ")}<br>Créez une bougie Candle Bar inspirée !`
            }));
    }

    function showResults() {
        quizSection.classList.add("hidden");
        resultsSection.classList.remove("hidden");

        const { dominantProfile, gender, ageRange, skinType, intensity, contexts } = calculateProfile();
        const profileDescriptions = {
            floral: "Votre profil floral évoque une douceur romantique, parfait pour une bougie chaleureuse.",
            woody: "Votre profil boisé allie robustesse et mystère, idéal pour une bougie profonde.",
            oriental: "Votre profil oriental offre des notes riches et sensuelles, parfait pour une bougie audacieuse.",
            fresh: "Votre profil frais est vif et lumineux, idéal pour une bougie légère.",
            spicy: "Votre profil épicé est vibrant et audacieux, parfait pour une bougie captivante."
        };

        profileResult.textContent = `Votre signature : ${dominantProfile.charAt(0).toUpperCase() + dominantProfile.slice(1)}. ${profileDescriptions[dominantProfile]}`;

        new Chart(profileChart, {
            type: "radar",
            data: {
                labels: ["Floral", "Boisé", "Oriental", "Frais", "Épicé"],
                datasets: [{
                    label: "Votre Profil",
                    data: Object.values(profileScores),
                    backgroundColor: "rgba(139, 155, 168, 0.8)", // Fond plus opaque
                    borderColor: "#8A9BA8", // Bordure contrastée
                    borderWidth: 3, // Épaisseur accrue
                    pointBackgroundColor: "#E5EAF2", // Points plus visibles
                    pointBorderColor: "#8A9BA8",
                    pointBorderWidth: 2,
                    pointRadius: 5
                }]
            },
            options: {
                animation: { duration: 1000, easing: "easeOutQuart" },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: Math.max(...Object.values(profileScores)) + 5,
                        ticks: { stepSize: 5, color: "#E5EAF2" }, // Étiquettes plus visibles
                        grid: { color: "rgba(107, 114, 128, 0.3)" } // Grille en gris olive léger
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: "top",
                        labels: { color: "#E5EAF2", font: { size: 14 } } // Légende plus visible
                    }
                }
            }
        });

        const recommendations = getPerfumeRecommendations(dominantProfile, gender, ageRange, skinType, intensity, contexts);
        perfumeList.innerHTML = "";
        recommendations.forEach((perfume, index) => {
            const li = document.createElement("li");
            li.className = "perfume-item p-2 rounded";
            li.innerHTML = `<div class="font-semibold">${perfume.name}</div><div class="perfume-details text-xs">${perfume.details}</div>`;
            li.onclick = () => li.classList.toggle("active");
            perfumeList.appendChild(li);
        });
    }

    function prevQuestion() {
        if (currentQuestion > 0) {
            const prevAnswers = answers[currentQuestion] || [];
            if (Array.isArray(prevAnswers)) {
                prevAnswers.forEach(value => {
                    const option = questions[currentQuestion].options.find(opt => opt.value === value);
                    Object.keys(option.score).forEach(key => {
                        profileScores[key] -= option.score[key] / (prevAnswers.length || 1);
                    });
                });
            } else {
                const prevOption = questions[currentQuestion].options.find(opt => opt.value === prevAnswers);
                if (prevOption && prevOption.score) {
                    Object.keys(prevOption.score).forEach(key => {
                        profileScores[key] -= prevOption.score[key];
                    });
                }
            }
            currentQuestion--;
            showQuestion();
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        showQuestion();
    });

    nextBtn.onclick = () => {
        if (questions[currentQuestion].multiple) {
            if (answers[currentQuestion] && answers[currentQuestion].length > 0) {
                if (currentQuestion < questions.length - 1) {
                    currentQuestion++;
                    showQuestion();
                } else {
                    showResults();
                }
            }
        } else if (answers[currentQuestion]) {
            const selectedOption = questions[currentQuestion].options.find(opt => opt.value === answers[currentQuestion]);
            selectOption(selectedOption.value, selectedOption.score);
        }
    };
    prevBtn.onclick = prevQuestion;
    restartQuizBtn.onclick = () => {
        currentQuestion = 0;
        answers = {};
        profileScores = { floral: 0, woody: 0, oriental: 0, fresh: 0, spicy: 0 };
        resultsSection.classList.add("hidden");
        quizSection.classList.remove("hidden");
        showQuestion();
    };
}