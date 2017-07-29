// === WORDS DATABASE ===
var words = [
	"keyboard",
	"computer",
	"mouse",
	"bugs",
	"application",
	"mailbox",
	"printer",
	"software",
	"website",
	"button"
];

// === RANDOM WORD STUFF ===
var randomWord = words[Math.floor(Math.random()*words.length)];

var answer = [];

for (var i=0; i < randomWord.length; i++) {
	// answer += ' _ '; //alt. version
	answer[i] = "_";
}

var otherLetters = randomWord.length;