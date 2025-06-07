const questions = [
    {
        question: "Quel est votre sexe ?",
        type: "single",
        options: [
            { text: "Féminin", value: "female", score: {} },
            { text: "Masculin", value: "male", score: {} },
            { text: "Unisexe/Non-binaire", value: "unisex", score: {} }
        ]
    },
    {
        question: "Quelle est votre tranche d'âge ?",
        type: "single",
        options: [
            { text: "18-23 ans", value: "18-23", score: {} },
            { text: "23-40 ans", value: "23-40", score: {} },
            { text: "40 ans et plus", value: "40+", score: {} }
        ]
    },
    {
        question: "Quelles familles olfactives vous attirent le plus ? (Plusieurs choix possibles)",
        type: "multiple",
        multiple: true,
        options: [
            { text: "Florale (rose, jasmin, tubéreuse)", value: "floral", score: { floral: 3 } },
            { text: "Boisée (cèdre, santal, oud)", value: "woody", score: { woody: 3 } },
            { text: "Orientale (vanille, ambre, musc)", value: "oriental", score: { oriental: 3 } },
            { text: "Fraîche (bergamote, citron, notes marines)", value: "fresh", score: { fresh: 3 } },
            { text: "Épicée (poivre, safran, cardamome)", value: "spicy", score: { spicy: 3 } }
        ]
    },
    {
        question: "Dans quels contextes portez-vous du parfum ? (Plusieurs choix possibles)",
        type: "multiple",
        multiple: true,
        options: [
            { text: "Au quotidien (travail, casual)", value: "daily", score: { fresh: 2, floral: 1 } },
            { text: "Soirées ou occasions spéciales", value: "evening", score: { oriental: 2, woody: 1 } },
            { text: "En fonction des saisons", value: "seasonal", score: { fresh: 1, floral: 1 } },
            { text: "Pour exprimer ma personnalité", value: "personality", score: { oriental: 1, floral: 1, woody: 1 } }
        ]
    },
    {
        question: "Quel est votre type de peau ?",
        type: "single",
        options: [
            { text: "Grasse (parfums plus intenses)", value: "oily", score: { oriental: 2, spicy: 1 } },
            { text: "Sèche (parfums moins persistants)", value: "dry", score: { floral: 2, fresh: 1 } },
            { text: "Sensible (éviter certains ingrédients)", value: "sensitive", score: { fresh: 2, floral: 1 } },
            { text: "Normale", value: "normal", score: { floral: 1, woody: 1, oriental: 1, fresh: 1 } }
        ]
    },
    {
        question: "Quelle intensité de parfum préférez-vous ?",
        type: "single",
        options: [
            { text: "Légère et discrète", value: "light", score: { fresh: 2, floral: 1 } },
            { text: "Modérée, équilibrée", value: "moderate", score: { floral: 1, woody: 1 } },
            { text: "Intense et audacieuse", value: "bold", score: { oriental: 2, woody: 1 } }
        ]
    },
    {
        question: "Quelles notes olfactives vous séduisent ? (Plusieurs choix possibles)",
        type: "multiple",
        multiple: true,
        options: [
            { text: "Rose", value: "rose", score: { floral: 3 } },
            { text: "Oud", value: "oud", score: { woody: 3 } },
            { text: "Vanille", value: "vanilla", score: { oriental: 3 } },
            { text: "Bergamote", value: "bergamot", score: { fresh: 3 } },
            { text: "Safran", value: "saffron", score: { spicy: 3 } },
            { text: "Fruits rouges", value: "red_berries", score: { floral: 2, fresh: 1 } }
        ]
    },
    {
        question: "Comment décririez-vous votre personnalité ?",
        type: "single",
        options: [
            { text: "Sophistiquée et élégante", value: "sophisticated", score: { floral: 2, oriental: 1 } },
            { text: "Aventureuse et audacieuse", value: "adventurous", score: { woody: 2, spicy: 1 } },
            { text: "Énergique et lumineuse", value: "energetic", score: { fresh: 2, floral: 1 } },
            { text: "Romantique et douce", value: "romantic", score: { floral: 2, oriental: 1 } }
        ]
    },
    {
        question: "Quelles saisons préférez-vous pour vos parfums ? (Plusieurs choix possibles)",
        type: "multiple",
        multiple: true,
        options: [
            { text: "Printemps (frais, floral)", value: "spring", score: { floral: 2, fresh: 1 } },
            { text: "Été (léger, citronné)", value: "summer", score: { fresh: 3 } },
            { text: "Automne (boisé, chaleureux)", value: "fall", score: { woody: 2, oriental: 1 } },
            { text: "Hiver (riche, épicé)", value: "winter", score: { oriental: 2, spicy: 1 } }
        ]
    },
    {
        question: "Quelle importance accordez-vous à la longévité du parfum ? (1 à 5)",
        type: "scale",
        options: [
            { text: "1 (Peu important)", value: 1, score: { fresh: 1 } },
            { text: "2", value: 2, score: { fresh: 1, floral: 1 } },
            { text: "3", value: 3, score: { floral: 1, woody: 1 } },
            { text: "4", value: 4, score: { woody: 1, oriental: 1 } },
            { text: "5 (Très important)", value: 5, score: { oriental: 2, woody: 1 } }
        ]
    }
];

let currentQuestion = 0;
let answers = {};
let profileScores = { floral: 0, woody: 0, oriental: 0, fresh: 0, spicy: 0 };

const introSection = document.getElementById("intro");
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
const startQuizBtn = document.getElementById("startQuiz");
const restartQuizBtn = document.getElementById("restartQuiz");
const profileChart = document.getElementById("profileChart").getContext("2d");

function startQuiz() {
    introSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = "";
    if (q.multiple) {
        q.options.forEach((option, index) => {
            const div = document.createElement("div");
            div.className = "flex items-center space-x-2";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = `option-${index}`;
            checkbox.className = "option-checkbox h-5 w-5 text-indigo-600";
            checkbox.value = option.value;
            const label = document.createElement("label");
            label.htmlFor = `option-${index}`;
            label.className = "option-label bg-indigo-100 text-indigo-800 p-3 rounded-lg w-full text-sm";
            label.textContent = option.text;
            div.appendChild(checkbox);
            div.appendChild(label);
            optionsElement.appendChild(div);
        });
    } else {
        q.options.forEach((option, index) => {
            const btn = document.createElement("button");
            btn.className = `option-btn bg-indigo-100 text-indigo-800 p-3 rounded-lg w-full text-left hover:bg-indigo-200 text-sm ${q.type === "scale" ? "flex justify-between items-center" : ""}`;
            btn.textContent = option.text;
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

function selectMultipleOptions() {
    const checkboxes = document.querySelectorAll(".option-checkbox:checked");
    if (checkboxes.length === 0) return false;
    answers[currentQuestion] = [];
    checkboxes.forEach(checkbox => {
        const option = questions[currentQuestion].options.find(opt => opt.value === checkbox.value);
        answers[currentQuestion].push(option.value);
        Object.keys(option.score).forEach(key => {
            profileScores[key] += option.score[key] / checkboxes.length;
        });
    });
    return true;
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

async function getPerfumeRecommendations(profile, gender, ageRange) {
    try {
        const response = await fetch(`http://localhost:5000/api/perfumes/filter?profile=${profile}&gender=${gender}&age=${ageRange}`);
        const perfumes = await response.json();
        return perfumes.map(perfume => ({
            name: `${perfume.brand} - ${perfume.name}`,
            details: `Notes: ${perfume.notes.join(", ")}<br>Idéal pour: ${perfume.gender.join(", ")}, ${perfume.age_range.join(", ")}`
        }));
    } catch (error) {
        console.error("Erreur lors de la récupération des parfums:", error);
        return [];
    }
}

function showResults() {
    quizSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");

    const { dominantProfile, gender, ageRange } = calculateProfile();
    const profileDescriptions = {
        floral: "Votre profil olfactif est floral, marqué par une élégance douce et romantique, évoquant des jardins luxuriants et des pétales délicats, parfait pour une touche féminine ou sophistiquée.",
        woody: "Votre profil boisé reflète une connexion profonde avec la nature, alliant chaleur, robustesse et une touche d'aventure, idéal pour une présence affirmée.",
        oriental: "Votre profil oriental est riche et envoûtant, avec des notes sensuelles et mystérieuses qui captivent l'entourage, parfait pour les soirées.",
        fresh: "Votre profil frais est lumineux et énergique, idéal pour une sensation de légèreté et de vitalité au quotidien, adapté à tous les âges.",
        spicy: "Votre profil épicé est audacieux et vibrant, avec des notes qui ne passent pas inaperçues et affirment votre présence, idéal pour les personnalités fortes."
    };

    profileResult.textContent = `Votre profil dominant est ${dominantProfile.charAt(0).toUpperCase() + dominantProfile.slice(1)}. ${profileDescriptions[dominantProfile]}`;

    // Graphique radar
    new Chart(profileChart, {
        type: "radar",
        data: {
            labels: ["Floral", "Boisé", "Oriental", "Frais", "Épicé"],
            datasets: [{
                label: "Votre Profil Olfactif",
                data: Object.values(profileScores),
                backgroundColor: "rgba(79, 70, 229, 0.2)",
                borderColor: "rgba(79, 70, 229, 1)",
                borderWidth: 2
            }]
        },
        options: {
            animation: {
                duration: 1000,
                easing: "easeOutQuart"
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: Math.max(...Object.values(profileScores)) + 5,
                    ticks: { stepSize: 5 }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    // Récupérer et afficher les recommandations en temps réel
    getPerfumeRecommendations(dominantProfile, gender, ageRange).then(recommendations => {
        perfumeList.innerHTML = "";
        recommendations.forEach((perfume, index) => {
            const li = document.createElement("li");
            li.className = "perfume-item p-2 rounded-lg";
            li.innerHTML = `
        <div class="font-semibold">${perfume.name}</div>
        <div class="perfume-details text-xs text-gray-600">${perfume.details}</div>
      `;
            li.onclick = () => {
                li.classList.toggle("active");
            };
            perfumeList.appendChild(li);
        });
    });
}

function prevQuestion() {
    if (currentQuestion > 0) {
        const prevAnswers = answers[currentQuestion] || [];
        if (Array.isArray(prevAnswers)) {
            prevAnswers.forEach(value => {
                const option = questions[currentQuestion].options.find(opt => opt.value === value);
                Object.keys(option.score).forEach(key => {
                    profileScores[key] -= option.score[key] / prevAnswers.length;
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

startQuizBtn.onclick = startQuiz;
nextBtn.onclick = () => {
    if (questions[currentQuestion].multiple) {
        if (selectMultipleOptions()) {
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
    introSection.classList.remove("hidden");
};