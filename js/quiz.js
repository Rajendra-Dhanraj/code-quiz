var questionContainer = document.querySelector('#question-container');
var currentQuestion = document.querySelector('#current-question');
var option1 = document.querySelector("#option-1")
var option2 = document.querySelector("#option-2")
var option3 = document.querySelector("#option-3")
var option4 = document.querySelector("#option-4")
var options = document.querySelectorAll('.options');

var counter = 0;

var score = 0;
var questionsArray = [
    {
        question: "Which HTML element do we put the JavaScript location?",
        option_1: "<script>",
        option_2: "<js>",
        option_3: "<javascript>",
        option_4: "<header>",
        answer: "<script>"
    },
    {
        question: "String values must be within _____ when being assigned to variables.",
        option_1: "Parenthesis",
        option_2: "Periods",
        option_3: "Curly Brackets",
        option_4: "Quotes",
        answer: "Quotes"
    },
    {
        question: "How do you call a function named quizFunction?",
        option_1: "call quizFunction() ",
        option_2: "call function quizFunction",
        option_3: "function:quizFunction",
        option_4: "quizFunction()",
        answer: "quizFunction()"
    }
    
    
]

// we set the first question on page load

currentQuestion.textContent = questionsArray[0].question;
option1.textContent = questionsArray[0].option_1;
option2.textContent = questionsArray[0].option_2;
option3.textContent = questionsArray[0].option_3;
option4.textContent = questionsArray[0].option_4;


for(var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function(event) {

        // checking if answer click is correct
        if(event.target.textContent == questionsArray[counter].answer) {
            score++;
            console.log("Correct!")
        } else {
            console.log("Wrong!")
        }
 
        // check to see if we wont exceed number of questions
        if(counter < questionsArray.length-1) {
            counter++;
        } else {
            // this is what will run after last question was clicked
            var currentHighScore = window.localStorage.getItem('quiz-high-score') || 0;
            // check to see if new score is higher then prev high score
            if(score > currentHighScore) {
                window.localStorage.setItem('quiz-high-score', score);
            }

            window.localStorage.setItem('my-score', score);
            window.location = './score.html';
        }
        // change through the array of questions and answers
        currentQuestion.textContent = questionsArray[counter].question;
        option1.textContent = questionsArray[counter].option_1;
        option2.textContent = questionsArray[counter].option_2;
        option3.textContent = questionsArray[counter].option_3;
        option4.textContent = questionsArray[counter].option_4;
    })
}