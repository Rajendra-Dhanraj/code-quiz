var score = window.localStorage.getItem('my-score');
var highScore = window.localStorage.getItem('quiz-high-score');

var scoreHolder = document.querySelector('#score-holder');
var highScoreHolder = document.querySelector('#highscore-holder')

scoreHolder.textContent = score;
highScoreHolder.textContent = highScore;