//Variables
var currentQuestion = document.querySelector("#current-question");
var option1 = document.querySelector("#option-1");
var option2 = document.querySelector("#option-2");
var option3 = document.querySelector("#option-3");
var option4 = document.querySelector("#option-4");
var options = document.querySelectorAll(".options");
var resultHolder = document.querySelector("#result-holder");
var timeLeft = 75;
var counter = 0;
var score = 0;


// Questions Array
var questionsArray = [
  {
    question: "Which HTML element do we put the JavaScript location?",
    option_1: "<script>",
    option_2: "<js>",
    option_3: "<javascript>",
    option_4: "<header>",
    answer: "<script>",
  },
  {
    question:
      "String values must be within _____ when being assigned to variables.",
    option_1: "Parenthesis",
    option_2: "Periods",
    option_3: "Curly Brackets",
    option_4: "Quotes",
    answer: "Quotes",
  },
  {
    question: "How do you call a function named 'quizFunction'?",
    option_1: "call quizFunction() ",
    option_2: "Run quizFunction",
    option_3: "function:quizFunction",
    option_4: "quizFunction()",
    answer: "quizFunction()",
  },
  {
    question: "A function within an object is called a ______.",
    option_1: "value",
    option_2: "key",
    option_3: "method",
    option_4: "property",
    answer: "method",
  },
];

// Set the first question on page load
currentQuestion.textContent = questionsArray[0].question;
option1.textContent = questionsArray[0].option_1;
option2.textContent = questionsArray[0].option_2;
option3.textContent = questionsArray[0].option_3;
option4.textContent = questionsArray[0].option_4;

//loop through questions once an answer button is clicked
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function (event) {
    // checking if answer clicked is correct
    if (event.target.textContent == questionsArray[counter].answer) {
      score++;
      resultHolder.textContent = "Correct";
      console.log("Correct!");
    } else {
      resultHolder.textContent = "Wrong";
      timeLeft = timeLeft - 10;
      console.log("Wrong!");
    }

    setTimeout(() => {
      resultHolder.textContent = "";
    }, 1000);

    // check to make sure we stop looping once looped through all quesitons
    if (counter < questionsArray.length - 1) {
      counter++;
    } else {
      // this is what will run after last question was clicked
      // if no current highscore, default is 0
      var currentHighScore =
        window.localStorage.getItem("quiz-high-score") || 0;
      // check to see if new score is higher then prev high score.
      //store score in local storage
      if (score > currentHighScore) {
        window.localStorage.setItem("quiz-high-score", score);
      }
      //store store in local and move to score web page
      window.localStorage.setItem("my-score", score);
      window.location = "./score.html";
    }
    // change through the array of questions and answers
    currentQuestion.textContent = questionsArray[counter].question;
    option1.textContent = questionsArray[counter].option_1;
    option2.textContent = questionsArray[counter].option_2;
    option3.textContent = questionsArray[counter].option_3;
    option4.textContent = questionsArray[counter].option_4;
  });
}

var timerEl = document.getElementById("timeleft");

function countdown() {
  var timeinterval = setInterval(function () {
    if (timeLeft > 1) {
      timeLeft--;
    }
    timerEl.textContent = timeLeft;
  }, 1000);
}
countdown();
