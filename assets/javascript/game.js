var wins = 0;
var wordArray = ['b'];
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var word = document.getElementById("word");
// Guess variables
var totalGuesses = 15;
var guessesRemaining = document.getElementById("guessesRemaining");
var guess = document.getElementById("guess");

var brisket = ["b", "r", "i", "s", "k", "e", "t"];
var userArray = [];


console.log(brisket.indexOf(4)); // =4

word.innerHTML = randomWord



// 	if (guess = letters) {
// 		show letters
// 	} else {
// 		show "_"
// 	}
// }
for (var i = 0; i < brisket.length; i++) {
	if (brisket[i] != userArray.includes(i)) {
		word.innerHTML = "_"
	} else {
		word.innerHTML = "B"
	}
}

// 
document.onkeyup = function(event) {

	var userGuess = event.key

  	var userArray = [];
  	var userPress;

    event = event || window.event;

    // Ensure we only handle printable keys
    var charCode = typeof event.which == "number" ? event.which : event.keyCode;

    if (charCode) {
        userArray.push(String.fromCharCode(charCode));
    }

	userArray.push(String.fromCharCode(userPress));
	
  	


	if (brisket.includes(userGuess)) {

		console.log(userGuess)

		} else {
		var newGuess = document.createElement('span');
		newGuess.innerHTML = userGuess;
		guess.appendChild(newGuess);
		totalGuesses--;
		guessesRemaining.innerHTML = totalGuesses;
		}

	userArray.splice(0, 0, userPress);

	console.log(userArray.join());
	}

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