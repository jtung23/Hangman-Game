// Questions: Why put some functions on outside of onkey and some inside.
// call bakc functions html box
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var wins = 0;
var word = document.getElementById("word");
// Guess variables
var totalGuesses = 15;
var guessesRemaining = document.getElementById("guessesRemaining");
var guess = document.getElementById("guess");
var underscore = "_ "
var meat = ["brisket", "pork"]

//////////////////////////////////////////////////
var chosenMeat = meat[Math.floor(Math.random() * meat.length)]
var newWord = "";
var lettersInChosenMeatArray = chosenMeat.split("")
console.log(lettersInChosenMeatArray)
var numberOfUnderscores = lettersInChosenMeatArray.length
///////////////////////////////////////////////////

var chosenMeatArrayLetters = lettersInChosenMeatArray.join('')

var randomWord = meat[Math.floor(Math.random() * meat.length)];
var userGuessArray = [];
var userCorrectGuess = [];

// //////////////////////////////////////////////

function pullWord () {


	for (var i = 0; i < numberOfUnderscores; i++) {
		userCorrectGuess.push('_');
		document.getElementById('word').innerHTML = userCorrectGuess;
	}
	guessesRemaining.innerHTML = totalGuesses
}

function updateScore() {
	document.querySelector("#wins").innerHTML = "Wins: " + wins;
}
function reset() {
	totalGuesses = 16
	document.querySelector("#guess").innerHTML = ""
	userGuessArray = [];
	pullWord();
}


// ////////////////////////////////////////////////


	// if (brisket[i] === userArray[i]) {
	// 	word.innerHTML = "brisket"
	// } else if (brisket[i] != userArray[i]) {
	// 	word.innerHTML = "_ _ _ _ _ _ _"
	// }

// //////////////////////////////////////////////////////
pullWord();
updateScore();

// //////////////////////////////////////////////////

document.onkeyup = function(event) 	{

	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	function newUserArray() {	
		userGuessArray.push(userGuess);
		return userGuessArray;
	}

	newUserArray();

	for (var i = 0; i < alphabet.length; i++) {
		if (userGuess === alphabet[i]) {
			compareletters(userGuess)
		document.getElementById("word").innerHTML = userCorrectGuess.join(' ');	
		}
	}

	// 	if (lettersInChosenMeatArray.includes(userGuess)) {
	// 		console.log(userGuess);
	// 	} 
	// 	else {
	// 	newUserArray();
	// 	var newGuess = document.createElement('span');
	// 	newGuess.innerHTML = userGuess;
	// 	guess.appendChild(newGuess);
		
	// 	guessesRemaining.innerHTML = totalGuesses;
	// 	} 

	// for (var i = 0; i < lettersInChosenMeatArray.length; i++) {
	// 	var allGuessesFound = true;
	// 	if (lettersInChosenMeatArray[i] === "") {
	// 		allGuessesFound = false;
	// 	}
	// }

}


function compareletters(userLetter) {
	if (chosenMeat.indexOf(userLetter) > -1) {

		for(var i = 0; i < numberOfUnderscores; i++) {

			if(lettersInChosenMeatArray[i] === userLetter) {

				userCorrectGuess[i] = userLetter;
				document.getElementById('word').innerHTML = userCorrectGuess.join(' ');
				console.log(userCorrectGuess)
			}
		}
	}
	else {
		totalGuesses--;
	}
}
		// if (userGuess === "b") {
		// 	word.innerHTML = "b"
		// 	console.log(meat.brisket.charAt(meat.brisket[1][0]))
		// }
		// for (var i = 0; i < userGuessArray.length;userGuessArray i++) {
		// 	if (userGuessArray[i] === meat[i]) {
		// 	queryselector("#word").userGuessArray[i].charAt.innerHTML = userGuessArray[i]
		// 	}
		// }


	// brisket: ["brisket", "_ _ _ _ _ _ _", "b", "r", "i", "s", "k", "e", "t"],
	// pork: ["pork", "_ _ _ _","p", "o", "r", "k"],

  	// var userPress;

   //  event = event || window.event;

   //  // Ensure we only handle printable keys
   //  var charCode = typeof event.which == "number" ? event.which : event.keyCode;

   //  if (charCode) {
   //      userArray.push(String.fromCharCode(charCode));
   //  }


			// else {
		// 	var guessesRemaining = 15;

		// }

	// change guesses remaining to 15 and pull a new word from array


// track userGuess (compare guesses var with alphabet variables with includes.)
// document.onkeyup = function alphaOnly(event) {
// 	alert(alpha);
// 	// var userGuess = event.keyCode;
//  //  	return (( >= 65 && key <= 90));
//   	userArray.push(key);
//   	alert(userArray);
// };

// Guess counter

 //  var userArray = [];
 //  var userPress;

 //  if (typeof event !== 'undefined') {
 //    keyPress = event.keyCode;
 //  }
 //  else if (e) {
 //    keyPress = e.which;
 //  }

	// userArray.push(String.fromCharCode(keyPress));

 //  	return false;   // Prevents the default action
 //  	console.log(userArray);

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

// filtering and returning a value from array
// var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//     return age >= 18;
// }

// function myFunction() {
//     document.getElementById("demo").innerHTML = ages.filter(checkAdult);
// }