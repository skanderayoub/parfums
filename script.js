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

// Base de données enrichie avec des parfums inspirés de Fragrantica
const perfumeDatabase = [
    { name: "Chanel Chance Eau Fraîche", brand: "Chanel", family: "fresh", notes: ["citron", "jasmin", "teck"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily", "seasonal"], gender: ["female", "unisex"], ageRange: ["18-23", "23-40"] },
    { name: "Dior Miss Dior Eau de Parfum", brand: "Dior", family: "floral", notes: ["rose", "pivoine", "muguet"], skinType: ["normal", "dry"], intensity: "moderate", context: ["daily", "evening"], gender: ["female"], ageRange: ["18-23", "23-40"] },
    { name: "Lancôme La Vie Est Belle", brand: "Lancôme", family: "floral", notes: ["iris", "vanille", "praline"], skinType: ["dry", "normal"], intensity: "moderate", context: ["evening", "personality"], gender: ["female"], ageRange: ["23-40", "40+"] },
    { name: "Yves Saint Laurent Libre", brand: "Yves Saint Laurent", family: "floral", notes: ["lavande", "vanille", "fleur d'oranger"], skinType: ["normal", "sensitive"], intensity: "moderate", context: ["daily", "evening"], gender: ["female"], ageRange: ["23-40"] },
    { name: "Maison Francis Kurkdjian Baccarat Rouge 540", brand: "Maison Francis Kurkdjian", family: "oriental", notes: ["safran", "ambre", "cèdre"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening", "personality"], gender: ["female", "unisex"], ageRange: ["23-40", "40+"] },
    { name: "Gucci Bloom", brand: "Gucci", family: "floral", notes: ["tubéreuse", "jasmin", "rangoon creeper"], skinType: ["dry", "normal"], intensity: "moderate", context: ["daily", "evening"], gender: ["female"], ageRange: ["18-23", "23-40"] },
    { name: "Jo Malone Peony & Blush Suede", brand: "Jo Malone", family: "floral", notes: ["pivoine", "pomme", "suede"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily", "seasonal"], gender: ["female"], ageRange: ["18-23", "23-40"] },
    { name: "Carolina Herrera Good Girl", brand: "Carolina Herrera", family: "oriental", notes: ["amande", "café", "tubéreuse"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening"], gender: ["female"], ageRange: ["23-40"] },
    { name: "Viktor & Rolf Flowerbomb", brand: "Viktor & Rolf", family: "floral", notes: ["rose", "freesia", "vanille"], skinType: ["dry", "normal"], intensity: "bold", context: ["evening"], gender: ["female"], ageRange: ["23-40", "40+"] },
    { name: "Chloé Eau de Parfum", brand: "Chloé", family: "floral", notes: ["pivoine", "rose", "miel"], skinType: ["dry", "normal"], intensity: "moderate", context: ["daily", "evening"], gender: ["female"], ageRange: ["18-23", "23-40"] },
    { name: "Creed Aventus", brand: "Creed", family: "spicy", notes: ["ananas", "poivre noir", "patchouli"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening", "personality"], gender: ["male"], ageRange: ["23-40", "40+"] },
    { name: "Tom Ford Oud Wood", brand: "Tom Ford", family: "woody", notes: ["santal", "oud", "cardamome"], skinType: ["normal", "oily"], intensity: "bold", context: ["evening", "personality"], gender: ["male", "unisex"], ageRange: ["23-40", "40+"] },
    { name: "Hermès Terre d’Hermès", brand: "Hermès", family: "woody", notes: ["pamplemousse", "cèdre", "poivre"], skinType: ["normal", "oily"], intensity: "moderate", context: ["daily", "personality"], gender: ["male"], ageRange: ["23-40", "40+"] },
    { name: "Chanel Bleu de Chanel", brand: "Chanel", family: "woody", notes: ["encens", "cèdre", "pamplemousse"], skinType: ["normal", "oily"], intensity: "moderate", context: ["daily", "personality"], gender: ["male"], ageRange: ["23-40"] },
    { name: "Yves Saint Laurent La Nuit de l’Homme", brand: "Yves Saint Laurent", family: "spicy", notes: ["cardamome", "lavande", "cèdre"], skinType: ["normal", "oily"], intensity: "moderate", context: ["evening"], gender: ["male"], ageRange: ["23-40"] },
    { name: "Dior Sauvage", brand: "Dior", family: "fresh", notes: ["bergamote", "poivre", "ambroxan"], skinType: ["normal", "oily"], intensity: "moderate", context: ["daily", "personality"], gender: ["male"], ageRange: ["18-23", "23-40"] },
    { name: "Guerlain L’Homme Idéal", brand: "Guerlain", family: "woody", notes: ["amande", "cuir", "fève tonka"], skinType: ["normal", "oily"], intensity: "moderate", context: ["daily", "personality"], gender: ["male"], ageRange: ["23-40", "40+"] },
    { name: "Byredo Rose Noir", brand: "Byredo", family: "floral", notes: ["rose damascena", "musc", "mousse"], skinType: ["normal", "sensitive"], intensity: "moderate", context: ["evening"], gender: ["unisex"], ageRange: ["23-40", "40+"] },
    { name: "Creed Silver Mountain Water", brand: "Creed", family: "fresh", notes: ["bergamote", "thé vert", "musc"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily", "seasonal"], gender: ["unisex"], ageRange: ["18-23", "23-40"] },
    { name: "Maison Margiela Replica Jazz Club", brand: "Maison Margiela", family: "woody", notes: ["rhum", "tabac", "vanille"], skinType: ["normal", "oily"], intensity: "moderate", context: ["evening", "personality"], gender: ["unisex"], ageRange: ["23-40"] },
    { name: "Jo Malone Basil & Neroli", brand: "Jo Malone", family: "fresh", notes: ["basilic", "néroli", "musc blanc"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily", "seasonal"], gender: ["unisex"], ageRange: ["18-23", "23-40"] },
    { name: "Tom Ford Black Orchid", brand: "Tom Ford", family: "oriental", notes: ["truffe", "chocolat noir", "patchouli"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening"], gender: ["female", "unisex"], ageRange: ["23-40", "40+"] },
    { name: "Byredo Black Saffron", brand: "Byredo", family: "oriental", notes: ["safran", "cuir", "violette"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening", "personality"], gender: ["unisex"], ageRange: ["23-40", "40+"] },
    { name: "Amouage Reflection Man", brand: "Amouage", family: "floral", notes: ["jasmin", "musc", "santal"], skinType: ["normal", "sensitive"], intensity: "moderate", context: ["daily", "evening"], gender: ["male", "unisex"], ageRange: ["23-40"] },
    { name: "Guerlain Shalimar", brand: "Guerlain", family: "oriental", notes: ["vanille", "iris", "encens"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening"], gender: ["female"], ageRange: ["40+"] },
    { name: "Jo Malone Oud & Bergamot", brand: "Jo Malone", family: "oriental", notes: ["bergamote", "oud", "cèdre"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening"], gender: ["unisex"], ageRange: ["23-40", "40+"] },
    { name: "Diptyque Philosykos", brand: "Diptyque", family: "fresh", notes: ["figue", "coco", "cèdre"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily", "seasonal"], gender: ["unisex"], ageRange: ["18-23", "23-40"] },
    { name: "Armani Sì", brand: "Giorgio Armani", family: "floral", notes: ["cassis", "rose", "vanille"], skinType: ["dry", "normal"], intensity: "moderate", context: ["daily", "evening"], gender: ["female"], ageRange: ["23-40"] },
    { name: "BVLGARI Bois d’Argent", brand: "BVLGARI", family: "woody", notes: ["iris", "musc", "cèdre"], skinType: ["normal", "oily"], intensity: "moderate", context: ["daily", "personality"], gender: ["unisex"], ageRange: ["23-40", "40+"] },
    { name: "Chanel N°5", brand: "Chanel", family: "floral", notes: ["rose", "jasmin", "vanille"], skinType: ["normal", "dry"], intensity: "bold", context: ["evening"], gender: ["female"], ageRange: ["40+"] },
    { name: "Guerlain Mon Guerlain", brand: "Guerlain", family: "oriental", notes: ["lavande", "vanille", "santal"], skinType: ["oily", "normal"], intensity: "moderate", context: ["evening"], gender: ["female"], ageRange: ["23-40", "40+"] },
    { name: "Tom Ford Tobacco Vanille", brand: "Tom Ford", family: "oriental", notes: ["tabac", "vanille", "épices"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening"], gender: ["unisex"], ageRange: ["23-40", "40+"] },
    { name: "Jo Malone Lime Basil & Mandarin", brand: "Jo Malone", family: "fresh", notes: ["citron vert", "basilic", "mandarine"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily", "seasonal"], gender: ["unisex"], ageRange: ["18-23", "23-40"] },
    { name: "Dior J’Adore", brand: "Dior", family: "floral", notes: ["jasmin", "pêche", "musc"], skinType: ["normal", "dry"], intensity: "moderate", context: ["daily", "evening"], gender: ["female"], ageRange: ["23-40"] },
    { name: "Byredo Gypsy Water", brand: "Byredo", family: "fresh", notes: ["bergamote", "genièvre", "vanille"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily", "seasonal"], gender: ["unisex"], ageRange: ["18-23", "23-40"] },
    { name: "Amouage Lyric Man", brand: "Amouage", family: "floral", notes: ["rose", "safran", "musc"], skinType: ["normal", "sensitive"], intensity: "bold", context: ["evening"], gender: ["male", "unisex"], ageRange: ["23-40", "40+"] },
    { name: "Creed Bois du Portugal", brand: "Creed", family: "woody", notes: ["santal", "vétiver", "lavande"], skinType: ["normal", "oily"], intensity: "moderate", context: ["daily", "personality"], gender: ["male"], ageRange: ["23-40", "40+"] },
    { name: "Maison Margiela Replica Coffee Break", brand: "Maison Margiela", family: "oriental", notes: ["café", "lavande", "menthe"], skinType: ["oily", "normal"], intensity: "moderate", context: ["daily", "evening"], gender: ["unisex"], ageRange: ["23-40"] },
    { name: "Yves Saint Laurent Black Opium", brand: "Yves Saint Laurent", family: "oriental", notes: ["café", "vanille", "fleur d'oranger"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening"], gender: ["female"], ageRange: ["23-40"] },
    { name: "Jo Malone Blackberry & Bay", brand: "Jo Malone", family: "fresh", notes: ["mûre", "laurier", "cèdre"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily", "seasonal"], gender: ["unisex"], ageRange: ["18-23", "23-40"] },
    { name: "Diptyque Oud Palao", brand: "Diptyque", family: "oriental", notes: ["oud", "vanille", "rose"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening"], gender: ["unisex"], ageRange: ["23-40", "40+"] },
    { name: "Lancôme Poême", brand: "Lancôme", family: "floral", notes: ["fleur d'oranger", "vanille", "mimosa"], skinType: ["dry", "normal"], intensity: "bold", context: ["evening"], gender: ["female"], ageRange: ["40+"] },
    { name: "Jo Malone English Pear & Freesia", brand: "Jo Malone", family: "floral", notes: ["poire", "freesia", "patchouli"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily", "seasonal"], gender: ["female", "unisex"], ageRange: ["18-23", "23-40"] },
    { name: "Tom Ford Noir Extreme", brand: "Tom Ford", family: "oriental", notes: ["cardamome", "noix de muscade", "kulfi"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening"], gender: ["male", "unisex"], ageRange: ["23-40", "40+"] },
    { name: "Marc Jacobs Daisy", brand: "Marc Jacobs", family: "floral", notes: ["violette", "jasmin", "fraise"], skinType: ["normal", "dry"], intensity: "light", context: ["daily", "seasonal"], gender: ["female"], ageRange: ["18-23", "23-40"] },
    { name: "Burberry Brit Sheer", brand: "Burberry", family: "floral", notes: ["litchi", "pivoine", "yuzu"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily"], gender: ["female"], ageRange: ["18-23"] },
    { name: "Bvlgari Omnia Crystalline", brand: "Bvlgari", family: "floral", notes: ["bambou", "nashi", "lotus"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily"], gender: ["female"], ageRange: ["18-23", "23-40"] },
    { name: "Coach Poppy EDP", brand: "Coach", family: "floral", notes: ["cassis", "freesia", "praline"], skinType: ["normal", "dry"], intensity: "moderate", context: ["daily", "evening"], gender: ["female"], ageRange: ["18-23", "23-40"] },
    { name: "Versace Bright Crystal Absolu", brand: "Versace", family: "floral", notes: ["yuzu", "pivoine", "framboise"], skinType: ["normal", "dry"], intensity: "moderate", context: ["daily", "evening"], gender: ["female"], ageRange: ["18-23", "23-40"] },
    { name: "Judith Leiber Night", brand: "Judith Leiber", family: "oriental", notes: ["cannelle", "jasmin", "ambre"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening"], gender: ["female"], ageRange: ["23-40", "40+"] },
    { name: "Salvatore Ferragamo F for Fascinating Night", brand: "Salvatore Ferragamo", family: "floral", notes: ["jasmin", "rose", "patchouli"], skinType: ["normal", "dry"], intensity: "moderate", context: ["evening"], gender: ["female"], ageRange: ["23-40"] },
    { name: "Phlur Missing Person", brand: "Phlur", family: "fresh", notes: ["musc", "jasmin", "bergamote"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily"], gender: ["unisex"], ageRange: ["18-23", "23-40"] },
    { name: "Byredo Rouge Chaotique", brand: "Byredo", family: "spicy", notes: ["prune", "patchouli", "praline"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening"], gender: ["unisex"], ageRange: ["23-40", "40+"] },
    { name: "Louis Vuitton Pacific Chill", brand: "Louis Vuitton", family: "fresh", notes: ["cassis", "basilic", "citron"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily", "seasonal"], gender: ["unisex"], ageRange: ["18-23", "23-40"] },
    { name: "Narciso Rodriguez For Her", brand: "Narciso Rodriguez", family: "floral", notes: ["fleur de miel", "ambre", "bois"], skinType: ["normal", "dry"], intensity: "moderate", context: ["daily", "evening"], gender: ["female"], ageRange: ["23-40", "40+"] },
    { name: "Kilian Angel’s Share", brand: "Kilian", family: "oriental", notes: ["cognac", "fève tonka", "chêne"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening"], gender: ["unisex"], ageRange: ["23-40", "40+"] },
    { name: "Le Labo Another 13", brand: "Le Labo", family: "woody", notes: ["ambroxan", "jasmin", "mousse"], skinType: ["normal", "oily"], intensity: "moderate", context: ["daily", "evening"], gender: ["unisex"], ageRange: ["23-40"] },
    { name: "Calvin Klein Eternity", brand: "Calvin Klein", family: "floral", notes: ["freesia", "lys", "santal"], skinType: ["normal"], intensity: "moderate", context: ["daily", "evening"], gender: ["female"], ageRange: ["23-40", "40+"] },
    { name: "Elie Saab Girl of Now", brand: "Elie Saab", family: "floral", notes: ["amande", "fleur d'oranger", "patchouli"], skinType: ["normal", "dry"], intensity: "moderate", context: ["evening"], gender: ["female"], ageRange: ["18-23", "23-40", "40+"] },
    { name: "Initio Parfums Oud for Greatness", brand: "Initio Parfums", family: "woody", notes: ["oud", "safran", "lavande"], skinType: ["oily", "normal"], intensity: "bold", context: ["evening", "personality"], gender: ["male", "unisex"], ageRange: ["23-40", "40+"] },
    { name: "Acca Kappa White Moss", brand: "Acca Kappa", family: "fresh", notes: ["lavande", "genièvre", "musc"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily"], gender: ["male"], ageRange: ["18-23", "23-40"] },
    { name: "Nicolai Parfumeur L’Eau Mixte", brand: "Nicolai Parfumeur", family: "fresh", notes: ["pamplemousse", "vétiver", "menthe"], skinType: ["normal", "sensitive"], intensity: "light", context: ["daily"], gender: ["male"], ageRange: ["18-23", "23-40"] }
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
            const btn = document.createElement("button");
            btn.className = `toggle-btn p-3 rounded-lg w-full text-left text-sm flex items-center space-x-2 font-lora ${answers[currentQuestion] && answers[currentQuestion].includes(option.value) ? "selected" : ""}`;
            btn.innerHTML = `<span class="text-lg">${option.icon}</span><span>${option.text}</span>`;
            btn.onclick = () => toggleOption(option.value, option.score);
            optionsElement.appendChild(btn);
        });
    } else {
        q.options.forEach((option, index) => {
            const btn = document.createElement("button");
            btn.className = `option-btn bg-amber-100 text-gray-800 p-3 rounded-lg w-full text-left text-sm flex items-center space-x-2 hover:bg-amber-200 font-lora ${q.type === "scale" ? "justify-between" : ""}`;
            btn.innerHTML = `<span class="text-lg">${option.icon}</span><span>${option.text}</span>`;
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
            details: `Notes: ${perfume.notes.join(", ")}<br>Idéal pour: ${perfume.gender.join(", ")}, ${perfume.ageRange.join(", ")}<br>Créez une bougie Candle Bar inspirée de ce parfum !`
        }));
}

function showResults() {
    quizSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");

    const { dominantProfile, gender, ageRange, skinType, intensity, contexts } = calculateProfile();
    const profileDescriptions = {
        floral: "Votre profil floral danse comme une flamme dans un jardin de roses, évoquant une douceur élégante et romantique, parfaite pour une bougie Candle Bar chaleureuse.",
        woody: "Votre profil boisé brûle avec la force d'une forêt ancienne, alliant robustesse et mystère, idéal pour une bougie Candle Bar profonde et envoûtante.",
        oriental: "Votre profil oriental scintille comme une chandelle dans un bazar exotique, avec des notes riches et sensuelles, parfait pour une bougie Candle Bar audacieuse.",
        fresh: "Votre profil frais éclaire comme une brise marine, vif et lumineux, idéal pour une bougie Candle Bar légère et vivifiante.",
        spicy: "Votre profil épicé pétille comme une flamme ardente, vibrant et audacieux, parfait pour une bougie Candle Bar qui capte l'attention."
    };

    profileResult.textContent = `Votre signature Candle Bar est ${dominantProfile.charAt(0).toUpperCase() + dominantProfile.slice(1)}. ${profileDescriptions[dominantProfile]}`;

    // Graphique radar avec couleurs Candle Bar
    new Chart(profileChart, {
        type: "radar",
        data: {
            labels: ["Floral", "Boisé", "Oriental", "Frais", "Épicé"],
            datasets: [{
                label: "Votre Profil Olfactif",
                data: Object.values(profileScores),
                backgroundColor: "rgba(212, 163, 115, 0.2)", // Doré clair
                borderColor: "rgba(212, 163, 115, 1)", // Doré
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

    // Recommandations avec affichage déroulant
    const recommendations = getPerfumeRecommendations(dominantProfile, gender, ageRange, skinType, intensity, contexts);
    perfumeList.innerHTML = "";
    recommendations.forEach((perfume, index) => {
        const li = document.createElement("li");
        li.className = "perfume-item p-2 rounded-lg";
        li.innerHTML = `
      <div class="font-semibold font-lora">${perfume.name}</div>
      <div class="perfume-details text-xs text-gray-600">${perfume.details}</div>
    `;
        li.onclick = () => {
            li.classList.toggle("active");
        };
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

startQuizBtn.onclick = startQuiz;
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
    introSection.classList.remove("hidden");
};