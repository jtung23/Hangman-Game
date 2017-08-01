var wins = 0;
var wordArray = ['brisket'];
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var word = document.getElementById("word");

// Guess variables
var totalGuesses = 15;
var guessesRemaining = document.getElementById("guessesRemaining");
var guess = document.getElementById("guess");

// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
				// "n","o","p","q","r","s","t","u","v","w","x","y","z",];
var brisket = ["b", "r", "i", "s", "k", "e", "t"];
var userArray = [""];

// track userGuess (compare guesses var with alphabet variables with includes.)
// document.onkeyup = function alphaOnly(event) {
// 	alert(alpha);
// 	// var userGuess = event.keyCode;
//  //  	return (( >= 65 && key <= 90));
//   	userArray.push(key);
//   	alert(userArray);
// };

// Guess counter
console.log(brisket.indexOf("k")) // =4
word.innerHTML = randomWord

for (randomWord) {
	if (guess = letters) {
		show letters
	} else {
		show "_"
	}
}


// 
document.onkeyup = function(event) {

	var userGuess = event.key


	// var userGuess = event.keyCode;
 //  	return (( userGuess >= 65 && userGuess <= 90));


	if (brisket.includes(userGuess)) {
		console.log(userGuess)

	} else {

		var newGuess = document.createElement('span');
		newGuess.innerHTML = userGuess;
		guess.appendChild(newGuess);
		totalGuesses--;
		guessesRemaining.innerHTML = totalGuesses;
	}
}

	

	// change guesses remaining to 15 and pull a new word from array



// mathfloor[math.random] picking from array.
// using typeof ***

// On start:
// Word is generated as blank spaces. for loop check if each userGuess matches
// the characters in the word, if it does then show the word, if not then show 
// underscore.
// for loop. if userguess inputs into array. [""]. append character or underscore 
// writing functions for it. 
// Wins = 0
// Number of Guesses remaining = 15

// On Error click:
// guess = -1
// letter guess shows in Letters guess


// When guessesRemaining = 0
// Word pulled from array
// Guesses resets to 15
// Letters guessed is blank