//global variables
var angryCatNumber, devilCatNumber, haloCatNumber, happyCatNumber, wins = 0, losses = 0, totalScore;
//generates a random number between the numbers provided below
function randomNumber(maxNumber, minNumber) {
    if (!minNumber) {
        minNumber = 1;
    }
    return Math.floor((Math.random() * (maxNumber - minNumber)) + minNumber);
}
//starts a new game within the numbers and sets the random numbers
function newGame() {
    correctNumber = randomNumber(120, 19);
    angryCatNumber = randomNumber(12);
    devilCatNumber = randomNumber(12);
    haloCatNumber = randomNumber(12);
    happyCatNumber = randomNumber(12);  
    totalScore = 0;
    updateHTML();
} 

newGame();
//this function compares the number they have guessed to the correct number to determine a win or loss, and starts a new game
function calculateScore(catNumber) {
    totalScore += catNumber;
    if (totalScore === correctNumber) {
        wins++;
        newGame();
    } else if (totalScore > correctNumber) {
        losses++;
        newGame();
    } else {
        updateHTML();
    }
}

//this updates the HTML with JQuery
$("#angryCat").click(function() {
    calculateScore(angryCatNumber);
});

$("#devilCat").click(function() {
    calculateScore(devilCatNumber);
});

$("#haloCat").click(function() {
    calculateScore(haloCatNumber);
});

$("#happyCat").click(function() {
    calculateScore(happyCatNumber);
});

$("#showHow").click(function() {
    $("#instructions").slideToggle();
});

function updateHTML() {
    $("#correctNumber").text(correctNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#totalScore").text(totalScore);
}

