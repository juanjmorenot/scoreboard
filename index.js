let scoreHome = document.getElementById("score-home");
let countHome = 0;

function oneHome() {
    countHome += 1;
    scoreHome.textContent = countHome
}

function twoHome() {
    countHome += 2;
    scoreHome.textContent = countHome
}

function threeHome() {
    countHome += 3;
    scoreHome.textContent = countHome
}

let scoreGuess = document.getElementById("score-guess");
let countGuess = 0;

function oneGuess() {
    countGuess += 1;
    scoreGuess.textContent = countGuess
}

function twoGuess() {
    countGuess += 2;
    scoreGuess.textContent = countGuess
}

function threeGuess() {
    countGuess += 3;
    scoreGuess.textContent = countGuess
}

function newGame() {
    countHome = 0;
    countGuess = 0;
    scoreHome.textContent = countHome
    scoreGuess.textContent = countGuess
}
