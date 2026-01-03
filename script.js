let score = 0;
let currentQuestion = 0;

const questions = [
    {
        question: "What year did WW2 end?",
        answers: [
            "1945",
            "1939",
            "1942",
            "1918"
        ],
        correctIndex: 0
    },
    {
        question: "Name of British Prime Minister in 1941?",
        answers: [
            "Tony Blaire",
            "Winston Churchill",
            "Neville Chamberlain",
            "Stanley Baldwin"
        ],
        correctIndex: 1
    },
    {
        question: "Which country was an ally of Britain in WW2?",
        answers: [
            "Japan",
            "Germany",
            "Italy",
            "USA"
        ],
        correctIndex: 3
    }

];

const scoreDisplay = document.getElementById("score");
const questionText = document.getElementById("question");
const buttons = document.querySelectorAll("#quiz button");
const message = document.getElementById("message");
const nextButton = document.getElementById("next");

function loadQuestion() {
    const q = questions[currentQuestion];

    questionText.textContent = q.question;

    questionText.textContent = q.question;
    message.textContent = "";

    buttons.forEach((button, index) => {
        if (button.id !== "next") {
            button.textContent = q.answers[index];
            button.disabled = false;
        }
    });
}

buttons.forEach((button, index) => {
    if (button.id !== "next") {
        button.addEventListener("click", function (){
            if (index === questions[currentQuestion].correctIndex) {
                score++;
                scoreDisplay.textContent = score;
                message.textContent = "Correct!";
            } else {
                message.textContent = "Incorrect";
            }

            buttons.forEach(b => b.disabled = true);
            nextButton.disabled = false;
            });
        }
    });

    nextButton.addEventListener("click", function () {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
    nextButton.disabled = true;
  } else {
    questionText.textContent = "Quiz finished!";
    message.textContent = `Final score: ${score}`;
    nextButton.disabled = true;
  }
});

nextButton.disabled = true;
loadQuestion();

