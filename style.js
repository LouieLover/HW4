var questions = [{
        q: "Commonly used data types DO NOT INCLUDE:",
        a: ["Strings", "Boolean", "Alerts", "Number"],
        corIndex: 2
    },
    {
        q: "The condition in an if/else statement is enclosed within",
        a: ["Quotes", "Curly Bracket", "Parentheses", "Square Bracket"],
        corIndex: 2
    },
    {
        q: "Array in Javascript and be used to store _____.",
        a: ["Numbers and Strings", "Booleans", "Other Arrays", "All of the above"],
        corIndex: 3
    },
    {
        q: "String value must be enclosed within _____ when being assigned to variables",
        a: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
        corIndex: 2
    },
    {
        q: "A very useful tool during development and debugging for printing content to the debugger is.",
        a: ["Console Log", "Terminal/Bash", "For Loop", "Javascript"],
        corIndex: 0
    },
]


var timerEl = document.getElementById("countdown");
var quizStart = document.getElementById("start-quiz");
var timeLeft = 75;
var timeInterval;
var index = 0;
var titleQuestions = document.querySelector(".title");
var quest = [questions[0].q1, questions[1].q2, questions[2].q3, questions[3].q4, questions[4].q5];
var highScore = document.getElementById("Highscore");
var introCard = document.querySelector(".card-body.intro");



quizStart.addEventListener("click", function() {

    quizTimer()
    introCard.style.display = "none"

    showquestion()
});

function showquestion() {
    var currentQuestion = questions[index]
    titleQuestions.textContent = currentQuestion.q
    var answerArea = document.getElementById("answer")

    for (var i = 0; i < currentQuestion.a.length; i++) {
        var button = document.createElement("button");
        button.style.display = "block";
        button.style.margin = "auto";
        button.textContent = currentQuestion.a[i];
        answerArea.appendChild(button);

    }
    button.onclick = answerQuestion;

    function answerQuestion() {

        var feedback = document.getElementById("feedback");
        var time = questions.length * 10;
        var choices = document.getElementById("choices");

        if (this.value !== questions[index].answer)

            time -= 10;
        choices.innerHTML = "";
    }

    feedback.setAttribute("class", "feedback");
    setTimeout(function() {
        feedback.setAttribute("class", "feedback hide");
    }, 1000);


}

function quizTimer() {
    timeInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;

        if (timeLeft === 0) {
            timerEl.textContent = "";

            clearInterval(timeInterval);
        }

    }, 1000);
};

function showResults() {



    clearInterval(timeInterval);



}