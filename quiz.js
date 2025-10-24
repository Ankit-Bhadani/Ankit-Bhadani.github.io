const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Who created JavaScript?",
    options: ["Bill Gates", "Brendan Eich", "Elon Musk", "Tim Berners-Lee"],
    answer: "Brendan Eich"
  },
  {
    question: "What is 2 + 2 * 2?",
    options: ["6", "8", "4", "2"],
    answer: "6"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    answer: "Mars"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "What year was JavaScript created?",
    options: ["1995", "2000", "1990", "2005"],
    answer: "1995"
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "Hyper Transfer Text Protocol",
      "Hyperlink Transfer Protocol",
      "Hyper Transfer Text Program"
    ],
    answer: "HyperText Transfer Protocol"
  },
  {
    question: "Which company developed the Windows operating system?",
    options: ["Apple", "Google", "Microsoft", "IBM"],
    answer: "Microsoft"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O"
  },
  {
    question: "Which HTML tag is used to display an image?",
    options: ["<image>", "<pic>", "<img>", "<src>"],
    answer: "<img>"
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Isaac Newton", "Thomas Edison"],
    answer: "Charles Babbage"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "let", "define"],
    answer: "var"
  }
];


const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const result = document.getElementById("result");

let currentQuestion = 0;
let score = 0;
function loadQuestion() {
    const q = questions[currentQuestion];
    question.textContent = q.question;
    options.forEach((option, index) => {
        option.textContent = q.options[index];
        option.onclick = () => checkAnswer(q.options[index]);
    });
    result.textContent = "";
}

function checkAnswer(){
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
        result.textContent = "Correct!";
    } else {
        result.textContent = `Wrong! The correct answer was: ${correctAnswer}`;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        setTimeout(loadQuestion, 1000);
    } else {
        setTimeout(() => {
            question.textContent = `Quiz Over! Your score: ${score}/${questions.length}`;
            options.forEach(option => option.style.display = "none");
            result.textContent = "";
        }, 1000);
    }
}

function showfinal(){
    
    question.textContent = `Quiz Over! Your score: ${score}/${questions.length}`;
    options.forEach(option => option.style.display = "none");
    result.textContent = "";
}   

options.forEach(option => {
    option.addEventListener("click", checkAnswer);
});

loadQuestion();