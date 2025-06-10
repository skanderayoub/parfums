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
        scents: [
            { name: "Rose", description: "Un parfum floral velouté et romantique, empreint d'une élégance intemporelle.", icon: "🌹" },
            { name: "Jasmin", description: "Une note florale douce et envoûtante, évoquant chaleur et luxe.", icon: "🌸" },
            { name: "Lavande", description: "Un parfum floral apaisant, évoquant les champs provençaux.", icon: "💜" },
            { name: "Fleur d'Oranger", description: "Une note florale lumineuse et douce, aux accents méditerranéens.", icon: "🌼" }
        ]
    },
    {
        category: "Boisé",
        description: "Les parfums boisés sont riches et chaleureux, idéaux pour une atmosphère méditative et réconfortante.",
        scents: [
            { name: "Cèdre", description: "Un parfum boisé riche et terreux, aux propriétés apaisantes.", icon: "🌲" },
            { name: "Santal", description: "Une note boisée crémeuse et chaude, d'une douceur méditative.", icon: "🌳" },
            { name: "Pin", description: "Un parfum boisé frais, rappelant les forêts de conifères.", icon: "🌲" },
            { name: "Patchouli", description: "Une note boisée profonde et musquée, aux accents terreux.", icon: "🍃" }
        ]
    },
    {
        category: "Oriental",
        description: "Les parfums orientaux sont exotiques et envoûtants, créant une ambiance sensuelle et chaleureuse.",
        scents: [
            { name: "Vanille", description: "Un parfum doux et réconfortant, aux nuances riches et crémeuses.", icon: "🍦" },
            { name: "Ambre", description: "Une note résineuse chaude, à l'attrait sensuel et profond.", icon: "🪔" },
            { name: "Musc", description: "Un parfum riche et enveloppant, aux nuances animales et chaleureuses.", icon: "🦌" },
            { name: "Encens", description: "Une note mystique et résineuse, évoquant la spiritualité.", icon: "🕉️" }
        ]
    },
    {
        category: "Frais",
        description: "Les parfums frais sont vivifiants et purs, parfaits pour dynamiser et rafraîchir votre espace.",
        scents: [
            { name: "Bergamote", description: "Un parfum citronné vif et frais, à l'énergie stimulante.", icon: "🍋" },
            { name: "Notes marines", description: "Un parfum frais et pur, rappelant les brises océaniques.", icon: "🌊" },
            { name: "Citron", description: "Une note zestée et pétillante, pleine de fraîcheur.", icon: "🍋" },
            { name: "Eucalyptus", description: "Un parfum frais et vivifiant, aux accents herbacés.", icon: "🌿" }
        ]
    },
    {
        category: "Épicé",
        description: "Les senteurs épicées sont vibrantes et audacieuses, parfaites pour une ambiance énergique et dynamique.",
        scents: [
            { name: "Safran", description: "Une épice vibrante et exotique, au caractère audacieux et ardent.", icon: "🌶️" },
            { name: "Cardamome", description: "Une épice chaude et aromatique, à la fraîcheur vivifiante.", icon: "🌿" },
            { name: "Poivre noir", description: "Une note épicée intense et piquante, pleine de caractère.", icon: "🌶️" },
            { name: "Cannelle", description: "Une épice chaude et sucrée, aux accents réconfortants.", icon: "🌰" }
        ]
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
    // Refresh the question display to highlight the selected option for the last question
    if (currentQuestionIndex === quizQuestions.length - 1) {
        showQuestion();
    } else {
        currentQuestionIndex++;
        showQuestion();
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
    console.log(`Profile scores: ${JSON.stringify(profileScores)}`);
    const scores = Object.values(profileScores);
    if (scores.every(score => score === 0)) {
        console.warn("All profile scores are zero, defaulting to 'Floral'");
        return ["Floral"];
    }
    const sortedProfiles = Object.keys(profileScores).sort((a, b) => profileScores[b] - profileScores[a]);
    const maxScore = profileScores[sortedProfiles[0]];
    const profiles = sortedProfiles.filter(key => profileScores[key] >= maxScore * 0.8); // Include profiles within 80% of max score
    console.log(`Dominant profiles: ${profiles.join(", ")}`);
    return profiles.length > 0 ? profiles : ["Floral"];
}

function getScentRecommendations(profiles) {
    console.log(`Getting scent recommendations for profiles: ${profiles.join(", ")}`);
    if (!profiles || profiles.length === 0) {
        console.warn("No profiles provided, defaulting to 'Floral'");
        profiles = ["Floral"];
    }
    const recommendations = [];
    profiles.forEach(profile => {
        const scentProfile = scentsDataQuiz.find(s => s.category.toLowerCase() === profile.toLowerCase());
        if (scentProfile) {
            scentProfile.scents.forEach(scent => {
                recommendations.push({
                    name: scent.name,
                    details: `${scent.description} ${scent.icon}`
                });
            });
        }
    });
    // Remove duplicates while preserving order
    const uniqueRecommendations = [];
    const seen = new Set();
    recommendations.forEach(rec => {
        if (!seen.has(rec.name.toLowerCase())) {
            seen.add(rec.name.toLowerCase());
            uniqueRecommendations.push(rec);
        }
    });
    return uniqueRecommendations;
}

function getChartColors(isDarkTheme) {
    return isDarkTheme
        ? {
            ticksColor: "#F3F4F6",
            gridColor: "rgba(243, 244, 246, 0.4)",
            pointLabelsColor: "#F3F4F6",
            legendLabelsColor: "#F3F4F6",
            pointBackgroundColor: "transparent",
            pointBorderColor: "#F3F4F6",
            borderColor: "#FBBF24",
            backgroundColor: "rgba(251, 191, 36, 0.3)"
        }
        : {
            ticksColor: "#1A1A1A",
            gridColor: "rgba(26, 26, 26, 0.6)",
            pointLabelsColor: "#1A1A1A",
            legendLabelsColor: "#1A1A1A",
            pointBackgroundColor: "#A67B5B",
            pointBorderColor: "#1A1A1A",
            borderColor: "#A67B5B",
            backgroundColor: "rgba(166, 123, 91, 0.3)"
        };
}

function updateChartTheme(chart, isDarkTheme) {
    const colors = getChartColors(isDarkTheme);
    chart.data.datasets[0].backgroundColor = colors.backgroundColor;
    chart.data.datasets[0].borderColor = colors.borderColor;
    chart.data.datasets[0].pointBackgroundColor = colors.pointBackgroundColor;
    chart.data.datasets[0].pointBorderColor = colors.pointBorderColor;
    chart.options.scales.r.ticks.color = colors.ticksColor;
    chart.options.scales.r.grid.color = colors.gridColor;
    chart.options.scales.r.pointLabels.color = colors.pointLabelsColor;
    chart.options.plugins.legend.labels.color = colors.legendLabelsColor;
    chart.update();
}

function showResults() {
    const dominantProfiles = calculateProfile();
    const primaryProfile = dominantProfiles[0];
    const scentProfile = scentsDataQuiz.find(s => s.category.toLowerCase() === primaryProfile.toLowerCase()) || scentsDataQuiz[0];
    const recommendations = getScentRecommendations(dominantProfiles);

    quizContent.innerHTML = `
    <h2 class="text-xl font-bold mb-6">Votre Profil : ${dominantProfiles.join(" & ")}</h2>
    <p class="mb-5">${scentProfile.description}</p>
    <p class="mb-5"><strong>Senteurs associées :</strong> ${recommendations.map(r => r.name).join(", ")}</p>
    <div class="chart-container mb-8">
      <canvas id="profileChart"></canvas>
    </div>
    <h3 class="text-lg font-semibold mb-3">Senteurs recommandées :</h3>
    <ul id="scentList" class="space-y-3 mb-8"></ul>
    <button id="restartQuiz" class="bg-amber-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-amber-700 transition-colors">Recommencer le quiz</button>
    <a href="index.html#products" class="inline-block bg-gray-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors ml-3">Découvrir tous les produits</a>
  `;
    quizNavigation.innerHTML = "";

    // Determine initial theme
    const isDarkTheme = document.body.classList.contains("dark-theme");
    const chartColors = getChartColors(isDarkTheme);

    // Render Chart
    const chart = new Chart(document.getElementById("profileChart"), {
        type: "radar",
        data: {
            labels: ["Floral", "Boisé", "Oriental", "Frais", "Épicé"],
            datasets: [{
                label: "Votre Profil Olfactif",
                data: Object.values(profileScores),
                backgroundColor: chartColors.backgroundColor,
                borderColor: chartColors.borderColor,
                borderWidth: 2,
                pointBackgroundColor: chartColors.pointBackgroundColor,
                pointBorderColor: chartColors.pointBorderColor,
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
                    ticks: { stepSize: 5, color: chartColors.ticksColor, font: { weight: '500' } },
                    grid: { color: chartColors.gridColor },
                    pointLabels: { font: { size: 14, weight: 'bold' }, color: chartColors.pointLabelsColor }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                    labels: { color: chartColors.legendLabelsColor, font: { size: 14, weight: 'bold' } }
                }
            }
        }
    });

    // Setup theme change observer
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === "class") {
                const isDarkTheme = document.body.classList.contains("dark-theme");
                console.log(`Theme changed to: ${isDarkTheme ? 'dark' : 'light'}`);
                updateChartTheme(chart, isDarkTheme);

                // Update scent list theme
                const scentListItems = document.querySelectorAll("#scentList .perfume-item");
                scentListItems.forEach(item => {
                    item.classList.toggle("bg-amber-50", !isDarkTheme);
                    item.classList.toggle("hover:bg-amber-100", !isDarkTheme);
                    item.classList.toggle("bg-gray-800", isDarkTheme);
                    item.classList.toggle("hover:bg-gray-700", isDarkTheme);
                    const details = item.querySelector(".text-sm");
                    details.classList.toggle("text-gray-600", !isDarkTheme);
                    details.classList.toggle("text-gray-300", isDarkTheme);
                });
            }
        });
    });
    observer.observe(document.body, { attributes: true });

    // Render Scent Recommendations
    const scentList = document.getElementById("scentList");
    recommendations.forEach(scent => {
        const li = document.createElement("li");
        li.className = `perfume-item p-4 rounded-lg ${isDarkTheme ? 'bg-gray-800 hover:bg-gray-700' : 'bg-amber-50 hover:bg-amber-100'} transition-colors cursor-pointer`;
        li.innerHTML = `<div class="font-semibold">${scent.name}</div><div class="text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}">${scent.details}</div>`;
        li.onclick = () => li.classList.toggle("active");
        scentList.appendChild(li);
    });

    // Restart Quiz
    document.getElementById("restartQuiz").onclick = () => {
        observer.disconnect(); // Clean up observer
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