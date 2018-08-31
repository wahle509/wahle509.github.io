var words = ["SAW", "GET", "PAN", "LET", "MAN", "WIN", "CAR", "DOT", "HIM", "BUS", "JET", "YES", "WAS", "POP"];
var letters = "";
var totalLetters = 0;
var currentWord = "";
var pause = false;
var width = 1;
var wordChestTotal = 0;
var totalCorrect = 0;
var totalTypos = 0;
var accuracy = 0;
var wordStreak = 0;
var totalMoney = 0;	
var earnCorrect = 1;
var totalExperience = 0;
var earnExp = 1;
var nextExp = 10;
var belt = "White";
var wordChestAvail = false;

function start() {
	//Show Random Word
	var len = words.length;
	var word = Math.floor(Math.random() * len);
	currentWord = words[word];
	document.getElementById("word").innerHTML = currentWord;
}

function restart() {
	//Reset Variables
	totalLetters = 0;
	letters = "";
	currentWord = "";
	pause = false;
	
	//Reset Display
	document.getElementById("word").style.color = "black";
	document.getElementById("letters").innerHTML = "";
	document.getElementById("isCorrect").innerHTML = "&nbsp;";
	document.getElementById("letters-container").style.backgroundColor = "white";
	document.getElementById("letters").style.color = "black";
	document.getElementById("info").innerHTML = "&nbsp;";

	//Show New Random Word
	var bonus = Math.floor(Math.random() * 101);
	if (bonus >= 95) {
		currentWord = "HEX";
		document.getElementById("word").style.color = "green";
		document.getElementById("info").innerHTML = "Bonus word ($x5)! 'To cast an evil spell upon'";
	} else {
		var len = words.length;
		var word = Math.floor(Math.random() * len);
		currentWord = words[word];
	}		
	
	document.getElementById("word").innerHTML = currentWord;
}

function check() {
	var sec = setInterval(second, 100);
	function second() {
		document.getElementById("totalCorrect").innerHTML = totalCorrect;
		document.getElementById("totalTypos").innerHTML = totalTypos;
		var calcAccuracy = (totalCorrect * 100)/(totalCorrect + totalTypos);
		document.getElementById("accuracy").innerHTML = Math.round(calcAccuracy * 100) / 100;
	}
}

function openChest() {
	if (wordChestAvail == true) {
		document.getElementById("chestModal").style.display = 'block';
	}
}

//KEY DOWN EVENTS
document.addEventListener("keydown", keyPressed, false);	
function keyPressed(e) {
	if (e > 47) {var keyCode = e;} 
	else {var keyCode = e.keyCode;}
	
	if (pause == true && keyCode == 32) {
		restart();
		return;
	}
		
	if (totalLetters < 3) {
		switch(keyCode) {
			//rowQ
			case 81: letters += "Q";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 87: letters += "W";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 69: letters += "E";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 82: letters += "R";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 84: letters += "T";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 89: letters += "Y";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 85: letters += "U";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 73: letters += "I";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 79: letters += "O";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 80: letters += "P";
				document.getElementById("letters").innerHTML = letters;
				break;
			//rowA
			case 65: letters += "A";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 83: letters += "S";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 68: letters += "D";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 70: letters += "F";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 71: letters += "G";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 72: letters += "H";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 74: letters += "J";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 75: letters += "K";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 76: letters += "L";
				document.getElementById("letters").innerHTML = letters;
				break;
			//rowZ
			case 90: letters += "Z";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 88: letters += "X";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 67: letters += "C";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 86: letters += "V";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 66: letters += "B";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 78: letters += "N";
				document.getElementById("letters").innerHTML = letters;
				break;
			case 77: letters += "M";
				document.getElementById("letters").innerHTML = letters;
				break;
		}	

		totalLetters += 1;			
		if (totalLetters == 3) {
			pause = true;
			checkWord();
		}
	}		
	
	function checkWord() {
		if (letters == currentWord) {
			//Correct
			totalCorrect++;
			document.getElementById("isCorrect").innerHTML = "Correct!";
			document.getElementById("letters-container").style.backgroundColor = "00A67C";
			document.getElementById("letters").style.color = "white";
			wordStreak++;
			document.getElementById("streak").innerHTML = wordStreak;
			
			//Increase Experience
			totalExperience += earnExp;
			document.getElementById("totalExp").innerHTML = totalExperience;
			if (totalExperience == nextExp) {
				totalExperience = 0;
				document.getElementById("totalExp").innerHTML = totalExperience;
				nextExp *= 2.5;
				document.getElementById("nextExp").innerHTML = nextExp;
				belt = "Yellow";
				document.getElementById("belt").innerHTML = belt;
			}
			
			//Increase Money
			totalMoney += earnCorrect;
			document.getElementById("money").innerHTML = totalMoney;
			
			//Increase Word Chest Bar
			wordChestTotal++;
			if (wordChestTotal >= 10) {
				//Word Chest Available
				wordChestAvail = true;
				wordChestTotal = 10;
				document.getElementById("wordChestTotal").innerHTML = wordChestTotal;
				var elem = document.getElementById("wordChest");
				elem.style.width = width + '%';
				document.getElementById("chest").style.backgroundColor = "#FFDF00";
				document.getElementById("chest").style.cursor = "pointer";					
			} else {
				wordChestAvail = false;
				document.getElementById("wordChestTotal").innerHTML = wordChestTotal;
				var elem = document.getElementById("wordChest");
				width += 10;
				elem.style.width = width + '%';
			}
											
		} else {
			//Typo
			totalTypos++;
			document.getElementById("isCorrect").innerHTML = "Typo!";
			document.getElementById("letters-container").style.backgroundColor = "#F60018";
			document.getElementById("letters").style.color = "white";
			wordStreak = 0;
			document.getElementById("streak").innerHTML = wordStreak;
		}
		document.getElementById("info").innerHTML = "Press Space for new word."
		check();
	}		
}