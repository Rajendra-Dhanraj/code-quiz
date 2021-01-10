// get score and store in new variable
var score = window.localStorage.getItem("my-score");
// get highscore and store in new variable
var highScore = window.localStorage.getItem("quiz-high-score");

var allScores = JSON.parse(window.localStorage.getItem("all-scores")) || [];

// using id from html page, update values with score and highscore
var scoreHolder = document.querySelector("#score-holder");
var highScoreHolder = document.querySelector("#highscore-holder");
scoreHolder.textContent = score;
highScoreHolder.textContent = highScore;

var initialsForm = document.querySelector("#initials-form");
var initialsInput = document.querySelector("#initials-input");

initialsForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var userScoreObj = {
    initials: initialsInput.value,
    score: score,
  };

  allScores.push(userScoreObj);

  window.localStorage.setItem("all-scores", JSON.stringify(allScores));

  location.reload();
});


// show scoreboard
var scoreBoard = document.querySelector("#score-board");

for (var i = 0; i < allScores.length; i++) {
  var newDiv = document.createElement("div");
  newDiv.classList.add("entry");

  var newName = document.createElement("h5");
  newName.textContent = allScores[i].initials;

  var newScore = document.createElement("h5");
  newScore.textContent = allScores[i].score;

  newDiv.append(newName);
  newDiv.append(newScore);

  scoreBoard.append(newDiv);
}

var clearHighScores = document.querySelector('#clear-scores');

clearHighScores.addEventListener('click', function(event){
    localStorage.clear(event);
    scoreBoard.textContent = '';   
});