// Products Data with Scents
const productsData = [
    { name: "Bougie Simple", image: "assets/bougie_simple.jpg", price: "65,70 TND", description: "Une bougie élégante pour une ambiance chaleureuse.", scents: ["rose", "jasmin", "vanille", "lavande"] },
    { name: "Bougie 390g", image: "assets/bougie_390g.jpg", price: "131,70 TND", description: "✨ L'élégance intemporelle, notre bougie parfumée 390g en céramique noir mat.", scents: ["cèdre", "santal", "ambre", "pin"] },
    { name: "Diffuseur Noir Mat 125ml", image: "assets/DiffuseurNoirMat125ml.jpg", price: "131,70 TND", description: "Transformez votre espace avec notre diffuseur élégant.", scents: ["bergamote", "notes marines", "citron", "eucalyptus"] },
    { name: "Diffuseur Voiture", image: "assets/DiffuseurVoiture.jpg", price: "49,20 TND", description: "Choisissez parmi nos senteurs enchanteresses pour vos trajets.", scents: ["safran", "cardamome", "poivre noir", "cannelle"] }
];

// Scents Data
const scentsData = [
    {
        category: "Floral",
        scents: [
            { name: "Rose", description: "Un parfum floral velouté et romantique, empreint d'une élégance intemporelle.", icon: "🌹" },
            { name: "Jasmin", description: "Une note florale douce et envoûtante, évoquant chaleur et luxe.", icon: "🌸" },
            { name: "Lavande", description: "Un parfum floral apaisant, évoquant les champs provençaux.", icon: "💜" },
            { name: "Fleur d'Oranger", description: "Une note florale lumineuse et douce, aux accents méditerranéens.", icon: "🌼" }
        ]
    },
    {
        category: "Boisé",
        scents: [
            { name: "Cèdre", description: "Un parfum boisé riche et terreux, aux propriétés apaisantes.", icon: "🌲" },
            { name: "Santal", description: "Une note boisée crémeuse et chaude, d'une douceur méditative.", icon: "🌳" },
            { name: "Pin", description: "Un parfum boisé frais, rappelant les forêts de conifères.", icon: "🌲" },
            { name: "Patchouli", description: "Une note boisée profonde et musquée, aux accents terreux.", icon: "🍃" }
        ]
    },
    {
        category: "Oriental",
        scents: [
            { name: "Vanille", description: "Un parfum doux et réconfortant, aux nuances riches et crémeuses.", icon: "🍦" },
            { name: "Ambre", description: "Une note résineuse chaude, à l'attrait sensuel et profond.", icon: "🪔" },
            { name: "Musc", description: "Un parfum riche et enveloppant, aux nuances animales et chaleureuses.", icon: "🦌" },
            { name: "Encens", description: "Une note mystique et résineuse, évoquant la spiritualité.", icon: "🕉️" }
        ]
    },
    {
        category: "Frais",
        scents: [
            { name: "Bergamote", description: "Un parfum citronné vif et frais, à l'énergie stimulante.", icon: "🍋" },
            { name: "Notes Marines", description: "Un parfum frais et pur, rappelant les brises océaniques.", icon: "🌊" },
            { name: "Citron", description: "Une note zestée et pétillante, pleine de fraîcheur.", icon: "🍋" },
            { name: "Eucalyptus", description: "Un parfum frais et vivifiant, aux accents herbacés.", icon: "🌿" }
        ]
    },
    {
        category: "Épicé",
        scents: [
            { name: "Safran", description: "Une épice vibrante et exotique, au caractère audacieux et ardent.", icon: "🌶️" },
            { name: "Cardamome", description: "Une épice chaude et aromatique, à la fraîcheur vivifiante.", icon: "🌿" },
            { name: "Poivre Noir", description: "Une note épicée intense et piquante, pleine de caractère.", icon: "🌶️" },
            { name: "Cannelle", description: "Une épice chaude et sucrée, aux accents réconfortants.", icon: "🌰" }
        ]
    }
];

// Theme and Navigation
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const mobileThemeToggle = document.getElementById("mobileThemeToggle");
    const body = document.body;
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    // Theme Persistence
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun mr-2"></i> Thème';
        if (mobileThemeToggle) mobileThemeToggle.innerHTML = '<i class="fas fa-sun mr-2"></i> Thème';
    }

    [themeToggle, mobileThemeToggle].forEach(toggle => {
        if (toggle) {
            toggle.addEventListener("click", () => {
                body.classList.toggle("dark-theme");
                const isDark = body.classList.contains("dark-theme");
                toggle.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'} mr-2"></i> Thème`;
                localStorage.setItem("theme", isDark ? "dark" : "light");
            });
        }
    });

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Product Grid
    const productGrid = document.getElementById("productGrid");
    if (productGrid) {
        productsData.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card animate-fade-in-up";
            card.innerHTML = `
        <div class="aspect-w-3 aspect-h-2">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover cursor-pointer" loading="lazy">
        </div>
        <h3 class="text-lg font-semibold mt-4 text-center">${product.name}</h3>
        <div class="product-info text-sm">
          <p class="font-bold">${product.price}</p>
          <p>${product.description}</p>
          <p class="products-scents">Senteurs: ${product.scents.join(", ")}</p>
        </div>
      `;
            card.querySelector("img").addEventListener("click", () => card.classList.toggle("active"));
            productGrid.appendChild(card);
            observer.observe(card);
        });
    }

    // Scents Grid
    const scentGrid = document.getElementById("scentGrid");
    if (scentGrid) {
        scentsData.forEach(category => {
            const categoryDiv = document.createElement("div");
            categoryDiv.className = "scent-card animate-fade-in-up";
            categoryDiv.innerHTML = `
        <h4 class="font-playfair text-center">${category.category}</h4>
        ${category.scents.map(scent => {
                const associatedProducts = productsData
                    .filter(product => product.scents.includes(scent.name.toLowerCase()))
                    .map(product => product.name)
                    .join(", ") || "Aucun produit associé";
                return `
            <div class="mt-4">
              <p class="font-semibold">${scent.name} ${scent.icon}</p>
              <p>${scent.description}</p>
              <p class="products-list">Produits: ${associatedProducts}</p>
            </div>
          `;
            }).join("")}
      `;
            scentGrid.appendChild(categoryDiv);
            observer.observe(categoryDiv);
        });
    }

    // Contact Page Animations
    const contactSection = document.querySelector(".py-16.bg-white");
    if (contactSection) {
        const animatedElements = contactSection.querySelectorAll(".animate-fade-in-up");
        animatedElements.forEach(element => observer.observe(element));
    }

    // About Page Content
    const aboutContent = document.getElementById("aboutContent");
    if (aboutContent) {
        const sections = aboutContent.querySelectorAll(".animate-fade-in-up");
        sections.forEach(section => observer.observe(section));
    }

    // Quiz Page Animations
    const quizContainer = document.querySelector(".quiz-container");
    if (quizContainer) {
        const animatedElements = quizContainer.querySelectorAll(".animate-fade-in-up");
        animatedElements.forEach(element => observer.observe(element));
    }

    // Contact Form
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Merci pour votre message ! Nous vous répondrons bientôt.");
            contactForm.reset();
        });
    }
});