// Questions: Why put some functions on outside of onkey and some inside.
// call bakc functions html box
var wins = 0;
var word = document.getElementById("word");
// Guess variables
var totalGuesses = 15;
var guessesRemaining = document.getElementById("guessesRemaining");
var guess = document.getElementById("guess");
var underscore = "_ "
var meat = ["brisket", "pork"]
var chosenMeat = meat[Math.floor(Math.random() * meat.length)]
var lettersInChosenMeatArray = chosenMeat.split("")
console.log(lettersInChosenMeatArray)
var numberOfUnderscores = lettersInChosenMeatArray.length
var chosenMeatArrayLetters = lettersInChosenMeatArray.join('')

var randomWord = meat[Math.floor(Math.random() * meat.length)];
var userGuessArray = ["p", "b"];

// //////////////////////////////////////////////

function pullWord () {
	console.log(chosenMeatArrayLetters)
	for (var i = 0; i < lettersInChosenMeatArray.length; i++) {
		if (userGuessArray.includes(lettersInChosenMeatArray[i])) {
			// alert("yes")
			word.innerHTML = chosenMeatArrayLetters
		} else {
			// alert("no")
			word.innerHTML = underscore.repeat(lettersInChosenMeatArray.length)
			
		}
}
}
	// }
	// if (chosenMeatArrayLetters) {
	// 	word.innerHTML = underscore.repeat(numberOfUnderscores)
	// }

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

		if (lettersInChosenMeatArray.includes(userGuess)) {

			newUserArray();
			console.log(userGuess);
			console.log(userGuessArray)
			for (var i = 0; i < userGuessArray.length; i++) {
				if (userGuessArray[i]) {
				}
			}
		} 
		else {
		newUserArray();
		var newGuess = document.createElement('span');
		newGuess.innerHTML = userGuess;
		guess.appendChild(newGuess);
		totalGuesses--;
		guessesRemaining.innerHTML = totalGuesses;
		} 
		if (totalGuesses < 2) {
		reset()
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