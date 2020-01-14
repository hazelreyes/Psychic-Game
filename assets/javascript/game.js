var computerChoices = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuesses = [];
var computerGuess = myFunction();

var directionsText = document.getElementById("direction-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("guessesLeft-text");
var userChoiceText = document.getElementById("yourGuesses-text");

function myFunction() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 10;
        yourGuesses = [];
    } else if (userGuess !== computerGuess && guessesLeft > 1) {
        guessesLeft--;
        yourGuesses.push(userGuess);
    } else if (userGuess !== computerGuess && guessesLeft === 1) {
        losses++;
        guessesLeft = 10;
        yourGuesses = [];
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    leftText.textContent = "Guesses Left: " + guessesLeft;
    userChoiceText.innerHTML = "Your choices so far: " + yourGuesses;

};