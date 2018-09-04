var words = ["SAW", "GET", "PAN", "LET", "MAN", "WIN", "CAR", "DOT", "HIM", "BUS", "JET", "YES", "WAS", "POP", "FAR", "NOW", "AXE", "AIR", "EYE", "IMP", "OLD", "USE", "OUT", "ZAP"];
var letters = "";
var totalLetters = 0;
var currentWord = "";
var pause = false;
var width = 1;
var wordChestTotal = 0;
var totalChar = 0;
var totalWords = 0;
var totalCorrect = 0;
var totalTypos = 0;
var accuracy = 0;
var wordStreak = 0;
var totalMoney = 0;	
var chestMoney = 0;
var minCM = 10;
var maxCM = 25;
var earnCorrect = 1;
var totalExperience = 0;
var earnExp = 1;
var nextExp = 10;
var belt = "White";
var wordChestAvail = false;
var bonusActive = false;

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
	document.getElementById("word").style.backgroundColor = "white";
	document.getElementById("letters").innerHTML = "";
	document.getElementById("isCorrect").innerHTML = "&nbsp;";
	document.getElementById("letters-container").style.backgroundColor = "white";
	document.getElementById("letters").style.color = "black";
	document.getElementById("info").innerHTML = "&nbsp;";

	//Show New Random Word
	var bonus = Math.floor(Math.random() * 101);
	if (bonus >= 95) {
		bonusActive = true;
		currentWord = "HEX";
		document.getElementById("word").style.backgroundColor = "#FFFD40";
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

//OPEN CHEST
function openChest() {
	if (wordChestAvail == true) {
		document.getElementById("chestModal").style.display = 'block';
		
		//Get Money
		var chestMoney = Math.floor(Math.random() * (maxCM-minCM+1)+minCM);
		totalMoney += chestMoney;
		document.getElementById("money").innerHTML = totalMoney;
		document.getElementById("chestMoney").innerHTML = chestMoney;
		
		//RESET CHEST
		wordChestAvail = false;
		wordChestTotal = 0;
		document.getElementById("wordChestTotal").innerHTML = wordChestTotal;
		var elem = document.getElementById("wordChest");
		width = 0;
		elem.style.width = width + '%';
		document.getElementById("chest").style.backgroundColor = "#5FD2B5";
		document.getElementById("chest").style.cursor = "default";
	}
}

//KEY DOWN EVENT
document.addEventListener("keydown", keyPressed, false);	
function keyPressed(e) {	
	if (e > 47) {var keyCode = e;} 
	else {var keyCode = e.keyCode;}
		
	if (totalLetters < 3) {
		if (keyCode >= 65 && keyCode <= 90) {
			totalChar ++;
			document.getElementById("totalChar").innerHTML = totalChar;
			letters += String.fromCharCode(keyCode)
			document.getElementById('letters').innerHTML = letters
		 } else {
			 return;
		 }

		totalLetters += 1;			
		if (totalLetters == 3) {
			totalWords++;
			document.getElementById("totalWords").innerHTML = totalWords;
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
				document.getElementById("beltSpan").style.borderColor = "yellow";
			}
			
			//Increase Money
			if (bonusActive == true) {totalMoney += earnCorrect * 5;} else {totalMoney += earnCorrect;}		
			document.getElementById("money").innerHTML = totalMoney;
			
			//Increase Word Chest Bar
			wordChestTotal++;
			if (wordChestTotal >= 10) {
				//Word Chest Available
				wordChestAvail = true;
				wordChestTotal = 10;
				document.getElementById("wordChestTotal").innerHTML = wordChestTotal;
				var elem = document.getElementById("wordChest");
				width = 100;
				elem.style.width = width + '%';
				document.getElementById("chest").style.backgroundColor = "#FFFD40";
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
		check();
		setTimeout(restart, 500);
	}		
}