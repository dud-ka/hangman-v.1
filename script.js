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

var otherLetters = randomWord.length;
// === MAIN LOOP ===
while (otherLetters > 0) {
	//show result
	alert(answer.join(" "));
	//ask a player
	var shot = prompt("Enter one letter or click cancel to end the game");
	if (shot === null) {
		break;
	} else if (shot > 0 && shot < 9999999) {
		alert("Not numbers!");
	} else if (shot.length > 1){
		alert("Please, enter only one letter");
	} else if (shot.length == 0) {
		alert("You don't enter any letter");
	} else {
		shot = shot.toLowerCase();
		for (var j = 0; j < randomWord.length; j++) {
			if (randomWord[j] === shot) {
				answer[j] = shot;
				otherLetters--;
			}
		}
	}
}
// === END MAIN LOOP ===

alert("Good job, " + randomWord + " is a word you're looking for!");