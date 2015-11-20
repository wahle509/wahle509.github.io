var seconds = 0;
var totalMoney = 0;
var overallMoney = 0;
var xp = 0;
var winChance = 5;
var winChanceInc = 0.01;
var gameNum = 1;
var result = false;
var level = 1;
var nextLevel = 25;
var previousLevel = 0;
var seasons = 1;
var totalWins = 0;
var totalLoss = 0;
var totalGames = 0;
var countdownSec = 5;
var trainerActive = false;
var managerActive = false;
var expPlayerActive = false;
var popPlayerActive = false;
var managerEarnings = 1;
var managerUpCost = 1000;
var trainerUpCost = 2500;
var startCountdown;

//End of Season Stats
var seasonWin = 0;
var seasonLoss = 0;
var seasonMoney = 0;
var seasonXp = 0;

function timer() {timerS = setInterval(oneS,1000);}

function oneS() {
	if (seconds < 5) {
		seconds++;
		document.getElementById("game" + gameNum).value = seconds;	
	} else {
		gameResult();
		seconds = 0;
	}	
	
	document.getElementById("overallMoney").innerHTML = "$" + overallMoney;
	
	//Manager Available
	if (totalMoney >= 50 && managerActive == false) {
		document.getElementById("manager").style.backgroundColor = "#F3F781";
	} else if (totalMoney < 50 && managerActive == false) {document.getElementById("manager").style.backgroundColor = "#efefef";}
	
	//Trainers Available
	if (totalMoney >= 250 && trainerActive == false) {
		document.getElementById("trainers").style.backgroundColor = "#F3F781";
	} else if (totalMoney < 250 && trainerActive == false) {document.getElementById("trainers").style.backgroundColor = "#efefef";}
	
	//Exp Player Available
	if (level >= 5 && totalMoney >= 5000 && expPlayerActive == false) {
		document.getElementById("expPlayer").style.backgroundColor = "#F3F781";
	} else if (totalMoney < 5000 && expPlayerActive == false) {document.getElementById("expPlayer").style.backgroundColor = "#efefef";}
	
	//Popular Player Available
	if (level >= 8 && totalMoney >= 10000 && popPlayerActive == false) {
		document.getElementById("popPlayer").style.backgroundColor = "#F3F781";
	} else if (totalMoney < 10000 && popPlayerActive == false) {document.getElementById("popPlayer").style.backgroundColor = "#efefef";}
}

function gameResult() {
	var num = Math.random() * 100;
	
	if (num <= winChance) {
		//Game Won
		result = true;
		xp += 5;
		document.getElementById("totalXp").innerHTML = xp.toFixed(2);
		totalMoney += 10;
		document.getElementById("totalMoney").innerHTML = totalMoney.toFixed(2);
		seasonMoney += 10;
		overallMoney += 10;
		seasonXp += 5;
		seasonWin++;
		totalWins++;
	} else {
		//Game Lost
		result = false;
		xp += 1;
		document.getElementById("totalXp").innerHTML = xp.toFixed(2);
		totalMoney += 5;
		document.getElementById("totalMoney").innerHTML = totalMoney.toFixed(2);
		seasonMoney += 5;
		overallMoney += 5;
		seasonXp += 1;
		seasonLoss++;
		totalLoss++;
	}
	
	totalGames++;
	document.getElementById("totalGames").innerHTML = totalGames;
	
	checkXp();
	
	document.getElementById("levelUp").value = xp - previousLevel;
	displayResult(gameNum);
	
	var winPct = totalWins/(totalWins+totalLoss);
	document.getElementById("overallRecord").innerHTML = totalWins + "-" + totalLoss + " [" + winPct.toFixed(3) + "]";
}

function checkXp() {
	if (xp >= nextLevel) {
		level++;
		document.getElementById("level").innerHTML = level;
		previousLevel = nextLevel;
		nextLevel *= 2.5;
		document.getElementById("levelUp").max = nextLevel;
		document.getElementById("levelUp").value = 0;
		winChance++;
		document.getElementById("winChance").innerHTML = winChance + "%";
	}
}

function displayResult(num) { 
	if (result == true) {
		document.getElementById("game" + num + "Result").innerHTML = "Win";
		document.getElementById("game" + num + "Result").style.color = "green";
		document.getElementById("game" + num + "Exp").innerHTML = 5;
		document.getElementById("game" + num + "Money").innerHTML = "$" + 10;
	} else {
		document.getElementById("game" + num + "Result").innerHTML = "Lose";
		document.getElementById("game" + num + "Result").style.color = "red";
		document.getElementById("game" + num + "Exp").innerHTML = 1;
		document.getElementById("game" + num + "Money").innerHTML = "$" + 5;
	}
	
	if (num < 10) {gameNum++;}
		else {
			clearTimeout(timerS);
			endSeason();
		}

	if (trainerActive == true) {
		xp += 0.01;
		document.getElementById("totalXp").innerHTML = xp.toFixed(2);
	}	
}

function endSeason() {
	document.getElementById("seasonRecord").innerHTML = seasonWin + "-" + seasonLoss;
	document.getElementById("seasonMoney").innerHTML = "$" + seasonMoney;
	document.getElementById("seasonXp").innerHTML = seasonXp;
	
	if (seasonWin < 10) {
		document.getElementById("startSeason").style.display = "block";
		setTimeout(startSeason, 5000);
		startCountdown = setInterval(countdown, 1000);
	} else {
		perfectSeason();		
	}
	
}

//Next Season Countdown
function countdown() {
	if (countdownSec > 0) {
		countdownSec--;
		document.getElementById("countdownSec").innerHTML = countdownSec;	
	} else {
		countdownSec = 5;
		document.getElementById("countdownSec").innerHTML = countdownSec;
		clearInterval(startCountdown);
	}
}

function startSeason() {
	document.getElementById("startSeason").style.display = "none";
	seasons++;
	document.getElementById("seasons").innerHTML = seasons;
	
	var x=1;
	while (x < 11) {
		document.getElementById("game" + x).value = 0;
		document.getElementById("game" + x + "Result").innerHTML = "";
		document.getElementById("game" + x + "Exp").innerHTML = "";
		document.getElementById("game" + x + "Money").innerHTML = "";
		x++;
	}
	x=1;

	gameNum = 1;
	
	document.getElementById("lastSeasonRecord").innerHTML = seasonWin + "-" + seasonLoss;
	document.getElementById("lastSeasonMoney").innerHTML = "$" + seasonMoney;
	document.getElementById("lastSeasonXp").innerHTML = seasonXp;
	seasonWin = 0;
	seasonLoss = 0;
	seasonMoney = 0;
	seasonXp = 0;	
	document.getElementById("seasonRecord").innerHTML = seasonWin + "-" + seasonLoss;
	document.getElementById("seasonMoney").innerHTML = "$" + seasonMoney;
	document.getElementById("seasonXp").innerHTML = seasonXp;
	
	timer();
}

function perfectSeason() {
		
}

function gainMoney() {
	totalMoney += managerEarnings;
	document.getElementById("totalMoney").innerHTML = totalMoney.toFixed(2);
}

function hireManager() {
	if (totalMoney >= 50 && managerActive == false) {
		setInterval(gainMoney,1000);
		document.getElementById("managerText").innerHTML = "Manager: $1/s";
		document.getElementById("manager").style.backgroundColor = "#8DCF8A";
		totalMoney -= 50;
		document.getElementById("totalMoney").innerHTML = totalMoney.toFixed(2);
		managerActive = true;
		document.getElementById("upgradeManager").style.display = "block";
	}	
}

function hireTrainer() {
	if (totalMoney >= 250 && trainerActive == false) {
		document.getElementById("trainerText").innerHTML = "Trainers: 0.01xp/game";
		document.getElementById("trainers").style.backgroundColor = "#8DCF8A";
		totalMoney -= 250;
		document.getElementById("totalMoney").innerHTML = totalMoney.toFixed(2);
		trainerActive = true;
		document.getElementById("upgradeTrainer").style.display = "block";
	}
}

function upgradeManager() {
	if (totalMoney >= managerUpCost) {
		totalMoney -= managerUpCost;
		document.getElementById("totalMoney").innerHTML = totalMoney.toFixed(2);
		managerEarnings++;
		document.getElementById("managerText").innerHTML = "Manager: $" + managerEarnings + "/s";
		managerUpCost *= 1.5;
		document.getElementById("managerUpCost").innerHTML = "$" + managerUpCost.toFixed(2);
	}
}

function upgradeTrainer() {
	if (totalMoney >= 5000) {
		totalMoney -= 5000;
		document.getElementById("totalMoney").innerHTML = totalMoney.toFixed(2);
		winChanceInc += 0.01;
		document.getElementById("trainerText").innerHTML = "Trainers: " + winChanceInc + "xp/game";
		trainerUpCost *= 1.5;
		document.getElementById("trainerUpCost").innerHTML = "$" + trainerUpCost.toFixed(2);
	}
}

function selectStar(star) {
	switch (star) {
		case exp:
			if (totalMoney >= 5000 && expPlayerActive == false) {
				document.getElementById("expPlayerText").innerHTML = "Experienced Player: Lvl 1";
				document.getElementById("manager").style.backgroundColor = "#8DCF8A";
				totalMoney -= 5000;
				document.getElementById("totalMoney").innerHTML = totalMoney.toFixed(2);
				expPlayerActive = true;
				document.getElementById("upgradeExpStar").style.display = "block";
			}
			break;
		case pop:
			if (totalMoney >= 10000 && popPlayerActive == false) {
				
			}
			break;
	}
}