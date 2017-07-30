// === WORDS DATABASE ===
var words = [
"keyboard"//,
// "computer",
// "mouse",
// "bugs",
// "application",
// "mailbox",
// "printer",
// "software",
// "website",
// "button"
];

// === RANDOM WORD STUFF ===
var randomWord = words[Math.floor(Math.random()*words.length)];
var answer = [];
for (var i=0; i < randomWord.length; i++) {
	answer[i] = "_";
}
var remainingLetters = randomWord.length;
var remainingShots = 5;


// === MAIN LOOP ===
while (remainingLetters > 0 && remainingShots > 0) {
	//show result
	alert(answer.join(" "));
	//ask a player
	var shot = prompt("Enter one letter or click cancel to end the game");
	if (shot === null) {
		break;
	} else if (shot > 0 && shot < 9999999) {
		alert("Not numbers!");
	} else if (shot.length > 1){
		alert("Please, enter only ONE letter");
	} else if (shot.length == 0) {
		alert("You don't enter any letter");
	} else {
		shot = shot.toLowerCase();
		remainingShots--;
		for (var j = 0; j < randomWord.length; j++) {
			if (randomWord[j] === shot) {
				answer[j] = shot;
				remainingLetters--;
			}
		}
	}
}
// === END MAIN LOOP ===

//END GAME
if (remainingShots > 0) {
    alert("Good job, " + randomWord + " is a word you're looking for!");
} else {
    alert("GAME OVER! The answer was: " + randomWord + ".");
}
