var words = [
	["SAW", false],
	["GET", false],
	["PAN", false],
	["LET", false],
	["MAN", false],
	["WIN", false],
	["CAR", false],
	["DOT", false],
	["HIM", false],
	["BUS", false],
	["JET", false],
	["YES", false],
	["WAS", false],
	["POP", false],
	["FAR", false],
	["NOW", false],
	["AXE", false],
	["AIR", false],
	["EYE", false],
	["IMP", false],
	["OLD", false],
	["USE", false],
	["OUT", false],
	["ZAP", false]
];
var words4 = ["AJAR", "BLUR", "CASK", "DARK", "EVEN", "FOLD", "GONE", "HELD", "ISLE", "JOLT", "KILT", "LAMP", "MAIN", "NOPE", "OWED", "PAID", "QUIZ", "RUST", "STOP", "TENT", "USED", "VASE", "WARP", "YELL"];
var words5 = ["ABOUT", "BROKE", "CRATE", "DOUBT", "EARTH", "FAULT", "GREAT", "HOUSE", "IGLOO", "JOUST", "KNOWN", "LIGHT", "MAPLE", "NOBLE", "OASIS", "PURSE", "QUILT", "ROAST", "START", "TRACK", "UNDER", "VAULT", "WEIRD", "ZEBRA"];
var words6 = ["ASSIST", "BREATH", "CRUSTY", "DARKER", "EARNED", "FASTER", "GATHER", "HELPER", "IGNITE", "JUMPER", "KNIVES", "LASERS", "MOLDED", "NOISES", "ORANGE", "PRAYER", "QUARTS", "ROLLER", "SALTED", "TRENCH", "UNIQUE", "VAPORS", "WASTED", "YELLOW"];
var bonusWords = ["HEX", "STAR", "NINJA", "KIMONO"];
var currentBonus = 0;
var wordArray = 1;
var wordLength = 3;
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
var upExp = 0;
var nextExp = [10, 25, 50, 100, 250, 500, 1000, 2500, 5000];
var upBelt = 0;
var currentBelt = ["White", "Yellow", "Orange", "Green", "Blue", "Purple", "Red", "Brown", "Black"];
var wordChestAvail = false;
var bonusActive = false;
var battleCost = 10;
var battleAfford = false;
var battleActive = false;
var ninjaHealth = 100;
var enemyHealth = 100;
var enemyBar = 0;

function start() {
	//Show Random Word
	var len = words.length;
	var word = Math.floor(Math.random() * len);
	currentWord = words[word][0];
	words[word][1] = true;
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
		//BONUS WORD
		bonusActive = true;
		currentWord = bonusWords[currentBonus];
		document.getElementById("word").style.backgroundColor = "#FFFD40";
		document.getElementById("info").innerHTML = "Bonus word ($x5)!";
	} else {		
		do {
			var len = words.length;
			var word = Math.floor(Math.random() * len);			
		} 
		while (words[word][1] == true);
		currentWord = words[word][0];
		words[word][1] = true;
		wordArray++;
		if (wordArray == words.length) {
			wordArray = 0;
			var i = 0;
			while (i < words.length) {
				words[i][1] = false;
				i++;
			}
		}
	}		
	
	document.getElementById("word").innerHTML = currentWord;
}

function check() {
	var sec = setInterval(second, 100);
	function second() {
		document.getElementById("money").innerHTML = totalMoney;
		document.getElementById("totalCorrect").innerHTML = totalCorrect;
		if (totalCorrect >= 10) {
			document.getElementById("10correct").style.backgroundColor = "#00A67C";
			document.getElementById("10correct").style.color = "#FFFFFF";
		}
		if (wordStreak >= 10) {
			document.getElementById("10streak").style.backgroundColor = "#00A67C";
			document.getElementById("10streak").style.color = "#FFFFFF";
		}
		document.getElementById("totalTypos").innerHTML = totalTypos;
		var calcAccuracy = (totalCorrect * 100)/(totalCorrect + totalTypos);
		document.getElementById("accuracy").innerHTML = Math.round(calcAccuracy * 100) / 100;
		if (totalMoney >= battleCost && battleActive == false) {
			battleAfford = true;
			document.getElementById("battle").disabled = false;
			document.getElementById("battle").style.backgroundColor = '#992626';
			document.getElementById("battle").style.cursor = 'pointer';
		} else if (totalMoney < battleCost || battleActive == true) {
			battleAfford = false;
			document.getElementById("battle").disabled = true;
			document.getElementById("battle").style.backgroundColor = '#CDCDCD';
			document.getElementById("battle").style.cursor = 'default';
		}
	}
}

//OPEN CHEST
function openChest() {
	if (wordChestAvail == true) {
		document.getElementById("crateOpen").style.backgroundColor = "#00A67C";
		document.getElementById("crateOpen").style.color = "#FFFFFF";
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
		document.getElementById("chest").style.backgroundColor = "#343434";
		document.getElementById("chest").style.color = "#ffffff";
		document.getElementById("chest").style.cursor = "default";
	}
}

//KEY DOWN EVENT
document.addEventListener("keydown", keyPressed, false);	
function keyPressed(e) {	
	if (e > 47) {var keyCode = e;} 
	else {var keyCode = e.keyCode;}
		
	if (totalLetters < wordLength) {
		if (keyCode >= 65 && keyCode <= 90) {
			totalChar ++;
			document.getElementById("totalChar").innerHTML = totalChar;
			letters += String.fromCharCode(keyCode)
			document.getElementById('letters').innerHTML = letters
		 } else {
			 return;
		 }

		totalLetters += 1;			
		if (totalLetters == wordLength) {
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
			
			//Increase Money
			if (bonusActive == true) {
				totalMoney += earnCorrect * 5;
				bonusActive = false;
			} else {
				totalMoney += earnCorrect;
			}		
			document.getElementById("money").innerHTML = totalMoney;
			
			//Increase Experience
			totalExperience += earnExp;
			document.getElementById("totalExp").innerHTML = totalExperience;
			if (totalExperience >= nextExp[upExp]) {
				//Upgrade Belt
				earnCorrect++;
				document.getElementById("moneyPerWord").innerHTML = earnCorrect;
				earnExp++;
				document.getElementById("expPerWord").innerHTML = earnExp;
				totalExperience = 0;
				document.getElementById("totalExp").innerHTML = totalExperience;
				upExp++;
				document.getElementById("nextExp").innerHTML = nextExp[upExp];
				upBelt++;
				document.getElementById("belt").innerHTML = currentBelt[upBelt];
				document.getElementById("currentAnnouncement").innerHTML = "Congratulations, you have reached " + currentBelt[upBelt] + " belt!";
				document.getElementById("beltSpan").style.borderColor = currentBelt[upBelt];
				//REPLACE WORDS ARRAY WITH BIGGER WORDS
				for (var i = 0; i < words.length; i++) {
					if (currentBelt[upBelt] == "Yellow") {
						words[i][0] = words4[i];
					} else if (currentBelt[upBelt] == "Orange") {
						words[i][0] = words5[i];
					} else if (currentBelt[upBelt] == "Green") {
						words[i][0] = words6[i];
					}
				}
				var i = 0;
				while (i < words.length) {
					words[i][1] = false;
					i++;
				}
				currentBonus++;
				wordLength++;
				wordArray = 0;
			}
			
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
				document.getElementById("chest").style.backgroundColor = "#999426";
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

function battle() {
	if (battleAfford == false) {
		//Do nothing, battle not affordable
	} else if (battleAfford == true) {
		battleActive = true;
		totalMoney -= battleCost;
		document.getElementById("battleArea").style.display = 'block';
		
		var sec = setInterval(attack, 2000);
		function attack() {
			if (enemyBar < 100) {				
				var ninjaAttack = Math.floor(Math.random() * 11);
				var elem = document.getElementById("enemyHealth");
				enemyBar += ninjaAttack;
				elem.style.width = enemyBar + '%';
			} else {
				//Battle Ended
				battleActive = false;
			}
		}
	}
}