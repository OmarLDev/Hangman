var validChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var tempWord = "";
var guessedArray = [];
var lotrTheme = document.getElementById("lotr");
var swTheme = document.getElementById("star-wars");
var winText = document.getElementById("wins");
var guessedChars = document.getElementById("guessedLetters");
var remainingAttempts = document.getElementById("remaining");
var randomWord = document.getElementById("randomWord");
var wordToGuess = "";

var themes = {
    lotr : { 
        characters: ["GANDALF", "FRODO", "SMEAGOL", "ARAGORN", "LEGOLAS"],
        theme : ".lotr"
    },
    starWars : {
        characters: ["YODA", "ANAKIN", "PALPATINE", "CHEWBACCA", "LEIA"],
        theme : ".starWars"
    }
};

function createTempWord(word){
    for(var i = 0; i < word.length; i++){
        tempWord += " _ ";
    }
    return tempWord;
}

function chooseRandomWord(theme){
    switch (theme) {
        case "lotr":
            return themes.lotr.characters[Math.floor(Math.random() * 5)];;
            break;
        case "star-wars":
            return themes.starWars.characters[Math.floor(Math.random() * 5)];
            break;
    }
}

document.onkeyup = function(event){
    var userGuess = event.key.toUpperCase();
    if(validChars.includes(userGuess)){
        guessedArray.push(userGuess);
        //alert(userGuess);
        guessedChars.textContent = guessedArray;      
    }    
}

lotrTheme.onclick = function(event){
    randomWord.textContent = "";
    wordToGuess = "";
    wordToGuess = chooseRandomWord("lotr");
    randomWord.textContent = createTempWord(wordToGuess);
}

swTheme.onclick = function(event){
    wordToGuess = "";
    randomWord.textContent = wordToGuess;
    wordToGuess = chooseRandomWord("star-wars");
    randomWord.textContent = createTempWord(wordToGuess);
}