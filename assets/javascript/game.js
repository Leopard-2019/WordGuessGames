// Global Variables declaration

k = 0;
bands = ["RUSH", "VANHALEN", "JOURNEY", "CHICAGO", "KISS", "EAGLES"];
soundBand = ["https://www.youtube.com/embed/DaLKrsqbyEk", "https://www.youtube.com/embed/bX9RMdcFQAw", "https://www.youtube.com/embed/bfnzeJs1Z54", "https://www.youtube.com/embed/pvxotwpM-_c", "https://www.youtube.com/embed/EFMD7Usflbg", "https://www.youtube.com/embed/32Oc2d_3yEk"];
choice = Math.floor(Math.random() * bands.length);
answer = bands[choice];
myLength = answer.length;
display = [myLength];
letters = answer.split('');
attemptsLeft = 2 * answer.length;
output = [];
userLetter = " ";
letterRm = [];
counterWin = answer.length;

document.getElementById("numberGuessRn").innerHTML = attemptsLeft;

// loop that generates the array with (" - ")'s with a length equal to the randon word chosen

for (var i = 0; i < answer.length; i++) {
    display[i] = " _ ";
    output[i] = display[i];
}
document.getElementById("currentWord").innerHTML = output;


// function triggered by  clicking the button after typing the letter. This function is the core
// of the whole word guess game.

function myFunction() {
    userLetter = document.getElementById("letter").value;
    letterRm.push(userLetter);
    document.getElementById("aGuess").innerHTML = letterRm;
    document.getElementById("letter").value = "";

    // loop that compares the letter guessed vs. the letters that comprise the random word chosen.
    // the variable counterWin has the lenght of the word chosen, and will eventually become 0 is the word 
    // chosen is guessed. The variable attempts has the length of the number twice the length of the word chosen 
    // toUpperCase is used to make sure that the word given as input is capital case, since the name of the bands are all in capital case.

    for (var j = 0; j < answer.length; j++) {
        if (userLetter.toUpperCase() === letters[j]) {
            display[j] = userLetter.toUpperCase();
            output[j] = display[j];
            counterWin--;
        }
    }
    attemptsLeft--;
    document.getElementById("currentWord").innerHTML = output;

    // conditionals that check the maximun number of attempts has been reached, and also if the player wins, if neithe those conditions are
    // met, the payer continues guessing the word randomly chosen.
    // it contain 1 functions ("myLetter"), it resets for a new word guess. 
    // Please note that if the player wins, a song of the band guesses is played.
    // counter "k" counts the number of wins (word guessed) achieved by the player.

    if (counterWin < 1) {
        k = k + 1;
        alert("You Win!! PLEASE TRY ANOTHER WORD");
        document.getElementById("numberWin").innerHTML = k;
        document.getElementById("myVideo").src = soundBand[choice];
        function myLetter() { };
    }
    else if (attemptsLeft < 1) {
        document.getElementById("numberGuessRn").innerHTML = attemptsLeft;
        alert("YOU LOSE!! PLEASE TRY ANOTHER WORD!!");
        function myLetter() { };
    }
    else {
        document.getElementById("numberGuessRn").innerHTML = attemptsLeft;
    }
};
// Please note that the global variables are also contained in the function "myLetter" which basically resets for a new word guess.
// only six bands were selected for this homework, however, additional ones can be added any time if it is desired.

function myLetter() {
    bands = ["RUSH", "VANHALEN", "JOURNEY", "CHICAGO", "KISS", "EAGLES",];
    soundBand = ["https://www.youtube.com/embed/DaLKrsqbyEk", "https://www.youtube.com/embed/bX9RMdcFQAw", "https://www.youtube.com/embed/bfnzeJs1Z54", "https://www.youtube.com/embed/pvxotwpM-_c", "https://www.youtube.com/embed/EFMD7Usflbg", "https://www.youtube.com/embed/32Oc2d_3yEk"];
    choice = Math.floor(Math.random() * bands.length);
    answer = bands[choice];
    myLength = answer.length;
    display = [myLength];
    letters = answer.split('');
    attemptsLeft = 2 * answer.length;
    output = [];
    userLetter = " ";
    letterRm = [];
    counterWin = answer.length;

    document.getElementById("numberGuessRn").innerHTML = attemptsLeft;

    // loop that generate the array with (" - ")'s with a length equal to the randon word chosen

    for (var i = 0; i < answer.length; i++) {
        display[i] = " _ ";
        output[i] = display[i];
    }
    document.getElementById("currentWord").innerHTML = output;

}