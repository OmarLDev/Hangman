var validChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
                "S", "T", "U", "V", "W", "X", "Y", "Z"];
var tempWord = "";
var workingWord = "";
var guessedArray = [];
var lives = 10;
var wins = 0;
var lotrTheme = document.getElementById("lotr");
var swTheme = document.getElementById("star-wars");
var winText = document.getElementById("wins");
var guessedChars = document.getElementById("guessedLetters");
var remainingAttempts = document.getElementById("remaining");
var randomWord = document.getElementById("randomWord");
var body = document.getElementById("body");

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
        tempWord += "_";
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

function play(char){
        if(wordToGuess.indexOf(char) != -1){
            for(var i = 0; i < tempWord.length; i++){
                if(wordToGuess[i] === char){
                    workingWord += char;
                }else{
                    workingWord += tempWord[i];
                }
            }
            tempWord = workingWord;
            workingWord = "";
            randomWord.textContent = tempWord;
            
            if(tempWord.indexOf("_") === -1){
                var result = confirm("YOU WIN! Do you want to play again?");
                if(result){
                    wins += 1;
                    winText.textContent = wins;
                    reloadGame();
                }else{
                    window.location.replace("https://www.google.com");
                }
            }
        }else{
            lives -= 1;
            if(lives === 0 ){
                var result = confirm("YOU LOST! Do you want to play again?");
                if(result){
                    location.reload();
                }else{
                    window.location.replace("https://www.google.com");
                }
            }
            workingWord = "";
            randomWord.textContent = tempWord;
            remainingAttempts.textContent = lives;
        }
}

document.onkeyup = function(event){
    var userGuess = event.key.toUpperCase();
    if(validChars.includes(userGuess)){
        play(userGuess);
        guessedArray.push(userGuess);
        guessedChars.textContent = guessedArray;      
    }    
}

lotrTheme.onclick = function(event){
    reloadGame();
    randomWord.textContent = "";
    wordToGuess = "";
    wordToGuess = chooseRandomWord("lotr");
    randomWord.textContent = createTempWord(wordToGuess);
    remainingAttempts.textContent = lives;
    body.setAttribute("class","lotr");
}

swTheme.onclick = function(event){  
    reloadGame();
    wordToGuess = "";
    randomWord.textContent = wordToGuess;
    wordToGuess = chooseRandomWord("star-wars");
    randomWord.textContent = createTempWord(wordToGuess);
    remainingAttempts.textContent = lives;
    body.setAttribute("class","star-wars");
}

function reloadGame(){
    tempWord = "";
    workingWord = "";
    wordToGuess = "";
    lives = 10;
    guessedArray = [];
    remainingAttempts.textContent = lives;
    guessedChars.textContent = guessedArray;
    randomWord.textContent = tempWord;
}
