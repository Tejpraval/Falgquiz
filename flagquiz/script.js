// Quiz Data (Flag Challenge)
const quizData = {
    easy: [{
            flag: "https://flagcdn.com/us.svg",
            question: "Which country does this flag belong to?",
            options: ["Canada", "United States", "Mexico"],
            answer: "United States"
        },
        {
            flag: "https://flagcdn.com/fr.svg",
            question: "Which country does this flag belong to?",
            options: ["France", "Germany", "Italy"],
            answer: "France"
        },
        {
            flag: "https://flagcdn.com/ca.svg",
            question: "Which country does this flag belong to?",
            options: ["Canada", "Australia", "United Kingdom"],
            answer: "Canada"
        },
        {
            flag: "https://flagcdn.com/de.svg",
            question: "Which country does this flag belong to?",
            options: ["Austria", "Switzerland", "Germany"],
            answer: "Germany"
        },
        {
            flag: "https://flagcdn.com/it.svg",
            question: "Which country does this flag belong to?",
            options: ["Spain", "Italy", "Greece"],
            answer: "Italy"
        },
        {
            flag: "https://flagcdn.com/es.svg",
            question: "Which country does this flag belong to?",
            options: ["Portugal", "Mexico", "Spain"],
            answer: "Spain"
        },
        {
            flag: "https://flagcdn.com/br.svg",
            question: "Which country does this flag belong to?",
            options: ["Brazil", "Argentina", "Chile"],
            answer: "Brazil"
        },
        {
            flag: "https://flagcdn.com/au.svg",
            question: "Which country does this flag belong to?",
            options: ["New Zealand", "Fiji", "Australia"],
            answer: "Australia"
        },
        {
            flag: "https://flagcdn.com/jp.svg",
            question: "Which country does this flag belong to?",
            options: ["China", "Japan", "South Korea"],
            answer: "Japan"
        },
        {
            flag: "https://flagcdn.com/gb.svg",
            question: "Which country does this flag belong to?",
            options: ["Ireland", "United Kingdom", "France"],
            answer: "United Kingdom"
        }
    ],
    medium: [{
            flag: "https://flagcdn.com/in.svg",
            question: "Which country does this flag belong to?",
            options: ["India", "Pakistan", "Bangladesh"],
            answer: "India"
        },
        {
            flag: "https://flagcdn.com/cn.svg",
            question: "Which country does this flag belong to?",
            options: ["Japan", "South Korea", "China"],
            answer: "China"
        },
        {
            flag: "https://flagcdn.com/ru.svg",
            question: "Which country does this flag belong to?",
            options: ["Ukraine", "Russia", "Belarus"],
            answer: "Russia"
        },
        {
            flag: "https://flagcdn.com/za.svg",
            question: "Which country does this flag belong to?",
            options: ["Zambia", "South Africa", "Zimbabwe"],
            answer: "South Africa"
        },
        {
            flag: "https://flagcdn.com/mx.svg",
            question: "Which country does this flag belong to?",
            options: ["Brazil", "Argentina", "Mexico"],
            answer: "Mexico"
        },
        {
            flag: "https://flagcdn.com/ar.svg",
            question: "Which country does this flag belong to?",
            options: ["Argentina", "Chile", "Uruguay"],
            answer: "Argentina"
        },
        {
            flag: "https://flagcdn.com/tr.svg",
            question: "Which country does this flag belong to?",
            options: ["Greece", "Turkey", "Egypt"],
            answer: "Turkey"
        },
        {
            flag: "https://flagcdn.com/nl.svg",
            question: "Which country does this flag belong to?",
            options: ["Belgium", "Netherlands", "Germany"],
            answer: "Netherlands"
        },
        {
            flag: "https://flagcdn.com/se.svg",
            question: "Which country does this flag belong to?",
            options: ["Norway", "Finland", "Sweden"],
            answer: "Sweden"
        },
        {
            flag: "https://flagcdn.com/ch.svg",
            question: "Which country does this flag belong to?",
            options: ["Switzerland", "Austria", "Germany"],
            answer: "Switzerland"
        }
    ],
    hard: [{
            flag: "https://flagcdn.com/gr.svg",
            question: "Which country does this flag belong to?",
            options: ["Cyprus", "Malta", "Greece"],
            answer: "Greece"
        },
        {
            flag: "https://flagcdn.com/pl.svg",
            question: "Which country does this flag belong to?",
            options: ["Poland", "Hungary", "Czech Republic"],
            answer: "Poland"
        },
        {
            flag: "https://flagcdn.com/ie.svg",
            question: "Which country does this flag belong to?",
            options: ["Iceland", "Ireland", "Scotland"],
            answer: "Ireland"
        },
        {
            flag: "https://flagcdn.com/no.svg",
            question: "Which country does this flag belong to?",
            options: ["Norway", "Sweden", "Denmark"],
            answer: "Norway"
        },
        {
            flag: "https://flagcdn.com/fi.svg",
            question: "Which country does this flag belong to?",
            options: ["Estonia", "Latvia", "Finland"],
            answer: "Finland"
        },
        {
            flag: "https://flagcdn.com/dk.svg",
            question: "Which country does this flag belong to?",
            options: ["Norway", "Sweden", "Denmark"],
            answer: "Denmark"
        },
        {
            flag: "https://flagcdn.com/be.svg",
            question: "Which country does this flag belong to?",
            options: ["Belgium", "Netherlands", "Luxembourg"],
            answer: "Belgium"
        },
        {
            flag: "https://flagcdn.com/at.svg",
            question: "Which country does this flag belong to?",
            options: ["Switzerland", "Austria", "Germany"],
            answer: "Austria"
        },
        {
            flag: "https://flagcdn.com/pt.svg",
            question: "Which country does this flag belong to?",
            options: ["Portugal", "Spain", "Italy"],
            answer: "Portugal"
        },
        {
            flag: "https://flagcdn.com/cz.svg",
            question: "Which country does this flag belong to?",
            options: ["Slovakia", "Czech Republic", "Hungary"],
            answer: "Czech Republic"
        }
    ]
};

// DOM Elements
const modeSelection = document.getElementById("mode-selection");
const quizContent = document.getElementById("quiz-content");
const flagImage = document.getElementById("flag-image");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitBtn = document.getElementById("submit-btn");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timer;
let selectedDifficulty;

// Event Listeners for Difficulty Selection
document.getElementById("easy-btn").addEventListener("click", () => startQuiz("easy"));
document.getElementById("medium-btn").addEventListener("click", () => startQuiz("medium"));
document.getElementById("hard-btn").addEventListener("click", () => startQuiz("hard"));

// Dark Mode Toggle
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (darkModeToggle.textContent === "Normal") {
        darkModeToggle.textContent = "Dark Mode";
    } else {
        darkModeToggle.textContent = "Normal";
    }
});

// Start Quiz
function startQuiz(difficulty) {
    selectedDifficulty = difficulty;
    modeSelection.style.display = "none";
    quizContent.classList.remove("hidden");
    loadQuestion();
}

// Load Question
function loadQuestion() {
    const currentQuestion = quizData[selectedDifficulty][currentQuestionIndex];
    flagImage.src = currentQuestion.flag;
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
    startTimer();
}

// Select Answer
function selectAnswer(selectedOption) {
    const currentQuestion = quizData[selectedDifficulty][currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        if (selectedDifficulty === "hard") {
            score--;
        }
        feedbackElement.textContent = "Incorrect!";
        feedbackElement.style.color = "red";
    }
    scoreElement.textContent = `Score: ${score}`;
    clearInterval(timer);
    setTimeout(nextQuestion, 1000);
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    feedbackElement.textContent = "";
    if (currentQuestionIndex < quizData[selectedDifficulty].length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Start Timer
function startTimer() {
    timeLeft = 10;
    timerElement.textContent = `Time Left: ${timeLeft}`;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft === 0) {
            clearInterval(timer);
            feedbackElement.textContent = "Time's up!";
            feedbackElement.style.color = "red";
            setTimeout(nextQuestion, 1000);
        }
    }, 1000);
}

// End Quiz
function endQuiz() {
    questionElement.textContent = "Quiz Over!";
    flagImage.style.display = "none";
    optionsElement.innerHTML = "";
    feedbackElement.textContent = `Your final score is ${score}/${quizData[selectedDifficulty].length}`;
    feedbackElement.style.color = "#8a2be2";
    timerElement.textContent = "";
}

// Initialize Quiz
// Quiz starts only after difficulty selection