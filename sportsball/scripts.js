var seconds = 0;
var totalMoney = 0;
var overallMoney = 0;
var xp = 0;
var winChance = 5;
var winChanceInc = 0.01;
var gameNum = 1;
var result = false;
var level = 1;
var nextLevel = 10;
var previousLevel = 0;
var seasons = 1;
var totalWins = 0;
var totalLoss = 0;
var totalGames = 0;
var countdownSec = 5;
var trainerActive = false;
var managerActive = false;
var managerEarnings = 1;
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
		switch(gameNum) {
			case 1:
				document.getElementById("game1").value = seconds;
				break;
			case 2:
				document.getElementById("game2").value = seconds;
				break;
			case 3:
				document.getElementById("game3").value = seconds;
				break;
			case 4:
				document.getElementById("game4").value = seconds;
				break;
			case 5:
				document.getElementById("game5").value = seconds;
				break;
		}
		
	} else {
		gameResult();
		seconds = 0;
	}	
	
	document.getElementById("overallMoney").innerHTML = "$" + overallMoney;
	
	if (totalMoney >= 50 && managerActive == false) {
		document.getElementById("manager").style.backgroundColor = "yellow";
	} else {document.getElementById("manager").style.backgroundColor = "#efefef";}
	
	if (totalMoney >= 100 && trainerActive == false) {
		document.getElementById("trainers").style.backgroundColor = "yellow";
	} else {document.getElementById("trainer").style.backgroundColor = "#efefef";}
}

function gameResult() {
	var num = Math.random() * 100;
	
	if (num <= winChance) {
		//Game Won
		result = true;
		xp += 5;
		document.getElementById("totalXp").innerHTML = xp;
		totalMoney += 10;
		document.getElementById("totalMoney").innerHTML = totalMoney;
		seasonMoney += 10;
		overallMoney += 10;
		seasonXp += 5;
		seasonWin++;
		totalWins++;
	} else {
		//Game Lost
		result = false;
		xp += 1;
		document.getElementById("totalXp").innerHTML = xp;
		totalMoney += 5;
		document.getElementById("totalMoney").innerHTML = totalMoney;
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
	switch(num) {
		case 1: 
			if (result == true) {
				document.getElementById("game1Result").innerHTML = "Win";
				document.getElementById("game1Result").style.color = "green";
			} else {
				document.getElementById("game1Result").innerHTML = "Lose";
				document.getElementById("game1Result").style.color = "red";
			}
			gameNum++;
			break;
		case 2:
			if (result == true) {
				document.getElementById("game2Result").innerHTML = "Win";
				document.getElementById("game2Result").style.color = "green";
			} else {
				document.getElementById("game2Result").innerHTML = "Lose";
				document.getElementById("game2Result").style.color = "red";
			}
			gameNum++;
			break;
		case 3:
			if (result == true) {
				document.getElementById("game3Result").innerHTML = "Win";
				document.getElementById("game3Result").style.color = "green";
			} else {
				document.getElementById("game3Result").innerHTML = "Lose";
				document.getElementById("game3Result").style.color = "red";
			}
			gameNum++;
			break;
		case 4:
			if (result == true) {
				document.getElementById("game4Result").innerHTML = "Win";
				document.getElementById("game4Result").style.color = "green";
			} else {
				document.getElementById("game4Result").innerHTML = "Lose";
				document.getElementById("game4Result").style.color = "red";
			}
			gameNum++;
			break;
		case 5:
			if (result == true) {
				document.getElementById("game5Result").innerHTML = "Win";
				document.getElementById("game5Result").style.color = "green";
			} else {
				document.getElementById("game5Result").innerHTML = "Lose";
				document.getElementById("game5Result").style.color = "red";
			}
			clearTimeout(timerS);
			endSeason();
			break;				
	}
	
	if (trainerActive == true) {
		winChance += winChanceInc;
		document.getElementById("winChance").innerHTML = winChance.toFixed(2) + "%";
	}
	
}

function endSeason() {
	document.getElementById("seasonRecord").innerHTML = seasonWin + "-" + seasonLoss;
	document.getElementById("seasonMoney").innerHTML = "$" + seasonMoney;
	document.getElementById("seasonXp").innerHTML = seasonXp;
	document.getElementById("startSeason").style.display = "block";
	document.getElementById("currentSeason").style.backgroundColor = "#8DCF8A";
	setTimeout(startSeason, 5000);
	startCountdown = setInterval(countdown, 1000);
}

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
	
	document.getElementById("game1").value = 0;
	document.getElementById("game2").value = 0;
	document.getElementById("game3").value = 0;
	document.getElementById("game4").value = 0;
	document.getElementById("game5").value = 0;
	document.getElementById("game1Result").innerHTML = "";
	document.getElementById("game2Result").innerHTML = "";
	document.getElementById("game3Result").innerHTML = "";
	document.getElementById("game4Result").innerHTML = "";
	document.getElementById("game5Result").innerHTML = "";
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

function gainMoney() {
	totalMoney += managerEarnings;
	overallMoney += managerEarnings;
	document.getElementById("totalMoney").innerHTML = totalMoney;
}

function hireManager() {
	if (totalMoney >= 50 && managerActive == false) {
		setInterval(gainMoney,1000);
		document.getElementById("managerText").innerHTML = "Manager: $1/s";
		document.getElementById("manager").style.backgroundColor = "#8DCF8A";
		totalMoney -= 50;
		document.getElementById("totalMoney").innerHTML = totalMoney;
		managerActive = true;
		document.getElementById("upgradeManager").style.display = "block";
	}	
}

function hireTrainer() {
	if (totalMoney >= 100) {
		document.getElementById("trainerText").innerHTML = "Trainers: 0.01xp/game";
		document.getElementById("trainers").style.backgroundColor = "#8DCF8A";
		totalMoney -= 100;
		document.getElementById("totalMoney").innerHTML = totalMoney;
		trainerActive = true;
		document.getElementById("upgradeTrainer").style.display = "block";
	}
}

function upgradeManager() {
	if (totalMoney >= 1000) {
		totalMoney -= 1000;
		document.getElementById("totalMoney").innerHTML = totalMoney;
		managerEarnings++;
		document.getElementById("managerText").innerHTML = "Manager: $" + managerEarnings + "/s";
	}
}

function upgradeTrainer() {
	if (totalMoney >= 2500) {
		totalMoney -= 2500;
		document.getElementById("totalMoney").innerHTML = totalMoney;
		winChanceInc += 0.01;
		document.getElementById("trainerText").innerHTML = "Trainers:" + winChanceInc + "xp/games";
	}
}