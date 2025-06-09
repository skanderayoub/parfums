// Quiz Data
const quizQuestions = [
    {
        question: "Quel est votre sexe ?",
        type: "single",
        options: [
            { text: "Féminin", value: "female", score: { Floral: 1, Oriental: 1 }, icon: "♀️" },
            { text: "Masculin", value: "male", score: { Boisé: 1, Épicé: 1 }, icon: "♂️" },
            { text: "Unisexe/Non-binaire", value: "unisex", score: { Frais: 1 }, icon: "⚧️" }
        ]
    },
    {
        question: "Quelle est votre tranche d'âge ?",
        type: "single",
        options: [
            { text: "18-25 ans", value: "18-25", score: { Frais: 1, Floral: 1 }, icon: "🎒" },
            { text: "25-40 ans", value: "25-40", score: { Boisé: 1, Oriental: 1 }, icon: "💼" },
            { text: "40 ans et plus", value: "40+", score: { Oriental: 1, Épicé: 1 }, icon: "🧳" }
        ]
    },
    {
        question: "Quelle ambiance souhaitez-vous créer avec une bougie ?",
        type: "single",
        options: [
            { text: "Romantique et douce", value: "romantic", score: { Floral: 3 }, icon: "💖" },
            { text: "Chaleureuse et méditative", value: "cozy", score: { Boisé: 3 }, icon: "🌳" },
            { text: "Exotique et sensuelle", value: "exotic", score: { Oriental: 3 }, icon: "🪔" },
            { text: "Fraîche et dynamisante", value: "fresh", score: { Frais: 3 }, icon: "🍋" }
        ]
    },
    {
        question: "Quand utilisez-vous des bougies ou diffuseurs ?",
        type: "multiple",
        multiple: true,
        options: [
            { text: "Au quotidien", value: "daily", score: { Frais: 2, Floral: 1 }, icon: "☀️" },
            { text: "Soirées spéciales", value: "evening", score: { Oriental: 2, Boisé: 1 }, icon: "🌙" },
            { text: "Moments de détente", value: "relax", score: { Floral: 2, Frais: 1 }, icon: "🛁" },
            { text: "Saisons spécifiques", value: "seasonal", score: { Boisé: 1, Épicé: 1 }, icon: "🍂" }
        ]
    },
    {
        question: "Quelles notes olfactives vous attirent ?",
        type: "multiple",
        multiple: true,
        options: [
            { text: "Rose", value: "rose", score: { Floral: 3 }, icon: "🌹" },
            { text: "Santal", value: "sandalwood", score: { Boisé: 3 }, icon: "🌲" },
            { text: "Vanille", value: "vanilla", score: { Oriental: 3 }, icon: "🍦" },
            { text: "Bergamote", value: "bergamot", score: { Frais: 3 }, icon: "🍋" },
            { text: "Safran", value: "saffron", score: { Épicé: 3 }, icon: "🌶️" }
        ]
    },
    {
        question: "Quelle intensité de parfum préférez-vous ?",
        type: "single",
        options: [
            { text: "Légère", value: "light", score: { Frais: 2, Floral: 1 }, icon: "💨" },
            { text: "Modérée", value: "moderate", score: { Floral: 1, Boisé: 1 }, icon: "🌬️" },
            { text: "Intense", value: "bold", score: { Oriental: 2, Épicé: 1 }, icon: "🔥" }
        ]
    },
    {
        question: "Quelle saison inspire votre choix de parfum ?",
        type: "single",
        options: [
            { text: "Printemps", value: "spring", score: { Floral: 2, Frais: 1 }, icon: "🌸" },
            { text: "Été", value: "summer", score: { Frais: 3 }, icon: "☀️" },
            { text: "Automne", value: "fall", score: { Boisé: 2, Oriental: 1 }, icon: "🍂" },
            { text: "Hiver", value: "winter", score: { Oriental: 2, Épicé: 1 }, icon: "❄️" }
        ]
    },
    {
        question: "Comment décririez-vous votre personnalité ?",
        type: "single",
        options: [
            { text: "Romantique", value: "romantic", score: { Floral: 2, Oriental: 1 }, icon: "💖" },
            { text: "Aventureuse", value: "adventurous", score: { Boisé: 2, Épicé: 1 }, icon: "🏞️" },
            { text: "Énergique", value: "energetic", score: { Frais: 2, Floral: 1 }, icon: "⚡" },
            { text: "Sophistiquée", value: "sophisticated", score: { Oriental: 2, Boisé: 1 }, icon: "💎" }
        ]
    }
];

// Scents Data
const scentsDataQuiz = [
    {
        category: "Floral",
        description: "Les senteurs florales évoquent romantisme et douceur, parfaites pour une ambiance élégante et apaisante.",
        scents: ["Rose", "Jasmin", "Lavande", "Fleur d'Oranger"]
    },
    {
        category: "Boisé",
        description: "Les parfums boisés sont riches et chaleureux, idéaux pour une atmosphère méditative et réconfortante.",
        scents: ["Cèdre", "Santal", "Pin", "Patchouli"]
    },
    {
        category: "Oriental",
        description: "Les parfums orientaux sont exotiques et envoûtants, créant une ambiance sensuelle et chaleureuse.",
        scents: ["Vanille", "Ambre", "Musc", "Encens"]
    },
    {
        category: "Frais",
        description: "Les parfums frais sont vivifiants et purs, parfaits pour dynamiser et rafraîchir votre espace.",
        scents: ["Bergamote", "Notes marines", "Citron", "Eucalyptus"]
    },
    {
        category: "Épicé",
        description: "Les senteurs épicées sont vibrantes et audacieuses, idéales pour une ambiance énergique et dynamique.",
        scents: ["Safran", "Cardamome", "Poivre noir", "Cannelle"]
    }
];

// Quiz State
let currentQuestionIndex = 0;
let answers = {};
let profileScores = { Floral: 0, Boisé: 0, Oriental: 0, Frais: 0, Épicé: 0 };

// DOM Elements
const quizContent = document.getElementById("quizContent");
const quizNavigation = document.getElementById("quizNavigation");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

function showQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    quizContent.innerHTML = `
    <h2 class="text-lg font-semibold mb-4">${q.question}</h2>
    <div id="options" class="space-y-2"></div>
  `;
    const optionsDiv = quizContent.querySelector("#options");
    q.options.forEach((option) => {
        const btn = document.createElement("button");
        const isSelected = q.multiple
            ? answers[currentQuestionIndex]?.includes(option.value)
            : answers[currentQuestionIndex] === option.value;
        btn.className = `w-full text-left p-3 rounded-lg ${q.multiple ? 'toggle-btn' : 'option-btn'} ${isSelected ? 'selected' : ''}`;
        btn.innerHTML = `<span>${option.text}</span><span>${option.icon}</span>`;
        btn.addEventListener("click", () => {
            console.log(`Clicked option: ${option.value} for question ${currentQuestionIndex + 1}`);
            q.multiple ? toggleOption(option.value, option.score) : selectOption(option.value, option.score);
        });
        optionsDiv.appendChild(btn);
    });

    updateProgress();
    renderNavigation();
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
}

function renderNavigation() {
    const hasAnswer = quizQuestions[currentQuestionIndex].multiple
        ? answers[currentQuestionIndex]?.length > 0
        : answers[currentQuestionIndex] != null;
    quizNavigation.innerHTML = `
    <button id="prevBtn" class="bg-gray-500 text-white px-4 py-2 rounded-lg ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'}" ${currentQuestionIndex === 0 ? 'disabled' : ''}>Précédent</button>
    <button id="nextBtn" class="bg-amber-600 text-white px-4 py-2 rounded-lg ${hasAnswer ? 'hover:bg-amber-700' : 'opacity-50 cursor-not-allowed'}" ${hasAnswer ? '' : 'disabled'}>${currentQuestionIndex === quizQuestions.length - 1 ? 'Soumettre' : 'Suivant'}</button>
  `;
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (prevBtn && !prevBtn.disabled) {
        prevBtn.addEventListener("click", prevQuestion);
    }
    if (nextBtn && !nextBtn.disabled) {
        nextBtn.addEventListener("click", () => {
            console.log(`Next button clicked at question ${currentQuestionIndex + 1}`);
            if (currentQuestionIndex < quizQuestions.length - 1) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                showResults();
            }
        });
    }
}

function selectOption(value, score) {
    console.log(`Selecting option: ${value}, Score: ${JSON.stringify(score)}`);
    // Remove previous score
    const prevAnswer = answers[currentQuestionIndex];
    if (prevAnswer) {
        const prevOption = quizQuestions[currentQuestionIndex].options.find(opt => opt.value === prevAnswer);
        Object.keys(prevOption.score).forEach(key => {
            profileScores[key] -= prevOption.score[key];
        });
    }
    // Add new score
    answers[currentQuestionIndex] = value;
    Object.keys(score).forEach(key => {
        profileScores[key] += score[key];
    });
    // Only auto-advance if not the last question
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        renderNavigation(); // Refresh navigation to enable "Soumettre"
    }
}

function toggleOption(value, score) {
    console.log(`Toggling option: ${value}, Score: ${JSON.stringify(score)}`);
    if (!answers[currentQuestionIndex]) answers[currentQuestionIndex] = [];
    const index = answers[currentQuestionIndex].indexOf(value);
    if (index === -1) {
        answers[currentQuestionIndex].push(value);
        Object.keys(score).forEach(key => {
            profileScores[key] += score[key];
        });
    } else {
        answers[currentQuestionIndex].splice(index, 1);
        Object.keys(score).forEach(key => {
            profileScores[key] -= score[key];
        });
    }
    showQuestion();
}

function prevQuestion() {
    const prevAnswers = answers[currentQuestionIndex] || [];
    if (Array.isArray(prevAnswers)) {
        prevAnswers.forEach(value => {
            const option = quizQuestions[currentQuestionIndex].options.find(opt => opt.value === value);
            Object.keys(option.score).forEach(key => {
                profileScores[key] -= option.score[key];
            });
        });
    } else if (prevAnswers) {
        const prevOption = quizQuestions[currentQuestionIndex].options.find(opt => opt.value === prevAnswers);
        Object.keys(prevOption.score).forEach(key => {
            profileScores[key] -= prevOption.score[key];
        });
    }
    currentQuestionIndex--;
    showQuestion();
}

function calculateProfile() {
    const maxScore = Math.max(...Object.values(profileScores));
    return Object.keys(profileScores).find(key => profileScores[key] === maxScore);
}

function getProductRecommendations(profile) {
    const scentProfile = scentsData.find(s => s.category.toLowerCase() === profile.toLowerCase());
    return productsData
        .filter(product => product.family.toLowerCase() === profile.toLowerCase() || product.scents.some(scent => scentProfile.scents.map(s => s.toLowerCase()).includes(scent)))
        .map(product => ({
            name: product.name,
            details: `Prix: ${product.price}<br />${product.description}<br />Senteurs: ${product.scents.join(", ")}`
        }));
}

function showResults() {
    const dominantProfile = calculateProfile();
    const scentProfile = scentsData.find(s => s.category.toLowerCase() === dominantProfile.toLowerCase());
    const recommendations = getProductRecommendations(dominantProfile);

    quizContent.innerHTML = `
    <h2 class="text-xl font-bold mb-4">Votre Profil Olfactif : ${dominantProfile}</h2>
    <p class="mb-4">${scentProfile.description}</p>
    <p class="mb-4"><strong>Senteurs associées :</strong> ${scentProfile.scents.join(", ")}</p>
    <div class="chart-container mb-6">
      <canvas id="profileChart"></canvas>
    </div>
    <h3 class="text-lg font-semibold mb-2">Produits Recommandés :</h3>
    <ul id="productList" class="space-y-2 mb-6"></ul>
    <button id="restartQuiz" class="bg-rose-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors">Recommencer le quiz</button>
    <a href="index.html#products" class="inline-block bg-gray-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors ml-2">Découvrir tous les produits</a>
  `;
    quizNavigation.innerHTML = "";

    // Render Chart
    new Chart(document.getElementById("profileChart"), {
        type: "radar",
        data: {
            labels: ["Floral", "Boisé", "Oriental", "Frais", "Épicé"],
            datasets: [{
                label: "Votre Profil Olfactif",
                data: Object.values(profileScores),
                backgroundColor: "rgba(212, 163, 115, 0.3)",
                borderColor: "#D4A373",
                borderWidth: 2,
                pointBackgroundColor: "#D4A373",
                pointBorderColor: "#FFFFFF",
                pointBorderWidth: 1,
                pointRadius: 4
            }]
        },
        options: {
            animation: { duration: 1200, easing: "easeOutQuart" },
            scales: {
                r: {
                    beginAtZero: true,
                    max: Math.max(...Object.values(profileScores)) + 5,
                    ticks: { stepSize: 5, color: "#3F2E2E" },
                    grid: { color: "rgba(63, 46, 46, 0.2)" }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                    labels: { color: "#3F2E2E", font: { size: 14 } }
                }
            }
        }
    });

    // Render Product Recommendations
    const productList = document.getElementById("productList");
    recommendations.forEach(product => {
        const li = document.createElement("li");
        li.className = "perfume-item p-3 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer";
        li.innerHTML = `<div class="font-semibold">${product.name}</div><div class="text-sm text-gray-600">${product.details}</div>`;
        li.onclick = () => li.classList.toggle("active");
        productList.appendChild(li);
    });

    // Restart Quiz
    document.getElementById("restartQuiz").onclick = () => {
        currentQuestionIndex = 0;
        answers = {};
        profileScores = { Floral: 0, Boisé: 0, Oriental: 0, Frais: 0, Épicé: 0 };
        showQuestion();
    };

    progressBar.style.width = "100%";
    progressText.textContent = "100%";
}

document.addEventListener("DOMContentLoaded", () => {
    showQuestion();
});