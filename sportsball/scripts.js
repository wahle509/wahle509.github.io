var seconds = 1;
var totalMoney = 0;
var overallMoney = 0;
var xp = 0;
var winChance = 5;
var trainerXp = 0;
var gameNum = 1;
var result = false;
var level = 1;
var nextLevel = 25;
var previousLevel = 0;
var seasons = 1;
var totalWins = 0;
var totalLoss = 0;
var totalGames = 0;
var winMoney = 10;
var loseMoney = 5;
var winExp = 5;
var loseExp = 1;
var countdownSec = 5;
var trainerActive = false;
var managerActive = false;
var expPlayerActive = false;
var popPlayerActive = false;
var managerEarnings = 1;
var managerUpCost = 500;
var trainerUpCost = 5000;
var startCountdown;
var game1 = "none";
var game2 = "none";
var game3 = "none";
var game4 = "none";
var game5 = "none";
var game6 = "none";
var game7 = "none";
var game8 = "none";
var game9 = "none";
var game10 = "none";

//End of Season Stats
var seasonWin = 0;
var seasonLoss = 0;
var seasonMoney = 0;
var seasonXp = 0;

function timer() {
	timerS = setInterval(oneS,1000);
	load();	
	saveTimer = setInterval(save,1000);
}

function save() {
	var saveObj = {
		totalMoney: totalMoney,
		overallMoney: overallMoney,
		xp: xp,
		winChance: winChance,
		trainerXp: trainerXp,
		gameNum: gameNum,
		level: level,
		nextLevel: nextLevel,
		previousLevel: previousLevel,
		seasons: seasons,
		totalWins: totalWins,
		totalLoss: totalLoss,
		totalGames: totalGames,
		trainerActive: trainerActive,
		managerActive: managerActive,
		expPlayerActive: expPlayerActive,
		popPlayerActive: popPlayerActive,
		managerEarnings: managerEarnings,
		managerUpCost: managerUpCost,
		trainerUpCost: trainerUpCost,
		seasonWin: seasonWin,
		seasonLoss: seasonLoss,
		seasonMoney: seasonMoney,
		seasonXp: seasonXp,
		game1: game1,
		game2: game2,
		game3: game3,
		game4: game4,
		game5: game5,
		game6: game6,
		game7: game7,
		game8: game8,
		game9: game9,
		game10: game10,
	}	
	localStorage.setItem("saveFile", JSON.stringify(saveObj));	
}

function load() {
	var saveObj = JSON.parse(localStorage.getItem("saveFile"));
	totalMoney = saveObj.totalMoney;
	overallMoney = saveObj.overallMoney;
	xp = saveObj.xp;
	winChance = saveObj.winChance;
	trainerXp = saveObj.trainerXp;
	gameNum = saveObj.gameNum;
	level = saveObj.level;
	nextLevel = saveObj.nextLevel;
	previousLevel = saveObj.previousLevel;
	seasons = saveObj.seasons;
	totalWins = saveObj.totalWins;
	totalLoss = saveObj.totalLoss;
	totalGames = saveObj.totalGames
	trainerActive = saveObj.trainerActive;
	managerActive = saveObj.managerActive;
	expPlayerActive = saveObj.expPlayerActive;
	popPlayerActive = saveObj.popPlayerActive;
	managerEarnings = saveObj.managerEarnings;
	managerUpCost = saveObj.managerUpCost;
	trainerUpCost = saveObj.trainerUpCost;
	seasonWin = saveObj.seasonWin;
	seasonLoss = saveObj.seasonLoss;
	seasonMoney = saveObj.seasonMoney;
	seasonXp = saveObj.seasonXp;
	game1 = saveObj.game1;
	game2 = saveObj.game2;
	game3 = saveObj.game3;
	game4 = saveObj.game4;
	game5 = saveObj.game5;
	game6 = saveObj.game6;
	game7 = saveObj.game7;
	game8 = saveObj.game8;
	game9 = saveObj.game9;
	game10 = saveObj.game10;
	
	if (managerActive == true) {
		setInterval(gainMoney,1000);
		document.getElementById("managerText").innerHTML = "Manager: $" + managerEarnings + "/s";
		document.getElementById("manager").style.backgroundColor = "#8DCF8A";
		document.getElementById("upgradeManager").style.display = "block";
	} else {
		clearInterval(gainMoney);
		document.getElementById("managerText").innerHTML = "Hire Manager<br> <small><small>+$1.00/s for $50</small></small>";
		document.getElementById("manager").style.backgroundColor = "#efefef";
		document.getElementById("upgradeManager").style.display = "none";
	}
	
	if (trainerActive == true){
		document.getElementById("trainerText").innerHTML = "Trainers: " + trainerXp + "xp/game";
		document.getElementById("trainers").style.backgroundColor = "#8DCF8A";
		document.getElementById("upgradeTrainer").style.display = "block";
	} else {
		document.getElementById("trainerText").innerHTML = "Hire Trainers<br> <small><small>+0.01 xp/game for $250</small></small>";
		document.getElementById("trainers").style.backgroundColor = "#efefef";
		document.getElementById("upgradeTrainer").style.display = "none";
	}
	
	displayData();
}

function displayData() {
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
	
	//Win 10 Goals Complete
	if (totalWins >= 10) {
		document.getElementById("trophy").style.backgroundColor = "gold";
	}
	
	document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
	document.getElementById("overallMoney").innerHTML = "$" + formatNum(overallMoney);
	document.getElementById("levelUp").value = xp - previousLevel;
	document.getElementById("winChance").innerHTML = winChance + "%";
	document.getElementById("level").innerHTML = level;
	document.getElementById("seasons").innerHTML = seasons;
	if (totalWins != 0 && totalLoss != 0) {
		var winPct = totalWins/(totalWins+totalLoss);
		document.getElementById("overallRecord").innerHTML = totalWins + "-" + totalLoss + " [" + winPct.toFixed(3) + "]";
	} else {document.getElementById("overallRecord").innerHTML = totalWins + "-" + totalLoss + "[0.000]"};	
	document.getElementById("totalGames").innerHTML = totalGames;
	document.getElementById("totalXp").innerHTML = xp.toFixed(2);
	document.getElementById("managerUpCost").innerHTML = "$" + managerUpCost;
	document.getElementById("trainerUpCost").innerHTML = "$" + trainerUpCost;
	document.getElementById("nextLevel").innerHTML = nextLevel.toFixed(2);
	
	if (game1 == "win") {
		document.getElementById("game1Result").innerHTML = "Win";
		document.getElementById("game1Result").style.color = "green";
		document.getElementById("game1Exp").innerHTML = winExp;
		document.getElementById("game1Money").innerHTML = "$" + winMoney;
		document.getElementById("game1").value = 5;
	} else if (game1 == "loss") {
		document.getElementById("game1Result").innerHTML = "Lose";
		document.getElementById("game1Result").style.color = "red";
		document.getElementById("game1Exp").innerHTML = loseExp;
		document.getElementById("game1Money").innerHTML = "$" + loseMoney;
		document.getElementById("game1").value = 5;
	} else {
		document.getElementById("game1Result").innerHTML = "";
		document.getElementById("game1Exp").innerHTML = "";
		document.getElementById("game1Money").innerHTML = "";
	}
	if (game2 == "win") {
		document.getElementById("game2Result").innerHTML = "Win";
		document.getElementById("game2Result").style.color = "green";
		document.getElementById("game2Exp").innerHTML = winExp;
		document.getElementById("game2Money").innerHTML = "$" + winMoney;
		document.getElementById("game2").value = 5;
	} else if (game2 == "loss") {
		document.getElementById("game2Result").innerHTML = "Lose";
		document.getElementById("game2Result").style.color = "red";
		document.getElementById("game2Exp").innerHTML = loseExp;
		document.getElementById("game2Money").innerHTML = "$" + loseMoney;
		document.getElementById("game2").value = 5;
	} else {
		document.getElementById("game2Result").innerHTML = "";
		document.getElementById("game2Exp").innerHTML = "";
		document.getElementById("game2Money").innerHTML = "";
	}
	if (game3 == "win") {
		document.getElementById("game3Result").innerHTML = "Win";
		document.getElementById("game3Result").style.color = "green";
		document.getElementById("game3Exp").innerHTML = winExp;
		document.getElementById("game3Money").innerHTML = "$" + winMoney;
		document.getElementById("game3").value = 5;
	} else if (game3 == "loss") {
		document.getElementById("game3Result").innerHTML = "Lose";
		document.getElementById("game3Result").style.color = "red";
		document.getElementById("game3Exp").innerHTML = loseExp;
		document.getElementById("game3Money").innerHTML = "$" + loseMoney;
		document.getElementById("game3").value = 5;
	} else {
		document.getElementById("game3Result").innerHTML = "";
		document.getElementById("game3Exp").innerHTML = "";
		document.getElementById("game3Money").innerHTML = "";
	}
	if (game4 == "win") {
		document.getElementById("game4Result").innerHTML = "Win";
		document.getElementById("game4Result").style.color = "green";
		document.getElementById("game4Exp").innerHTML = winExp;
		document.getElementById("game4Money").innerHTML = "$" + winMoney;
		document.getElementById("game4").value = 5;
	} else if (game4 == "loss") {
		document.getElementById("game4Result").innerHTML = "Lose";
		document.getElementById("game4Result").style.color = "red";
		document.getElementById("game4Exp").innerHTML = loseExp;
		document.getElementById("game4Money").innerHTML = "$" + loseMoney;
		document.getElementById("game4").value = 5;
	} else {
		document.getElementById("game4Result").innerHTML = "";
		document.getElementById("game4Exp").innerHTML = "";
		document.getElementById("game4Money").innerHTML = "";
	}
	if (game5 == "win") {
		document.getElementById("game5Result").innerHTML = "Win";
		document.getElementById("game5Result").style.color = "green";
		document.getElementById("game5Exp").innerHTML = winExp;
		document.getElementById("game5Money").innerHTML = "$" + winMoney;
		document.getElementById("game5").value = 5;
	} else if (game5 == "loss") {
		document.getElementById("game5Result").innerHTML = "Lose";
		document.getElementById("game5Result").style.color = "red";
		document.getElementById("game5Exp").innerHTML = loseExp;
		document.getElementById("game5Money").innerHTML = "$" + loseMoney;
		document.getElementById("game5").value = 5;
	} else {
		document.getElementById("game5Result").innerHTML = "";
		document.getElementById("game5Exp").innerHTML = "";
		document.getElementById("game5Money").innerHTML = "";
	}
	if (game6 == "win") {
		document.getElementById("game6Result").innerHTML = "Win";
		document.getElementById("game6Result").style.color = "green";
		document.getElementById("game6Exp").innerHTML = winExp;
		document.getElementById("game6Money").innerHTML = "$" + winMoney;
		document.getElementById("game6").value = 5;
	} else if (game6 == "loss") {
		document.getElementById("game6Result").innerHTML = "Lose";
		document.getElementById("game6Result").style.color = "red";
		document.getElementById("game6Exp").innerHTML = loseExp;
		document.getElementById("game6Money").innerHTML = "$" + loseMoney;
		document.getElementById("game6").value = 5;
	} else {
		document.getElementById("game6Result").innerHTML = "";
		document.getElementById("game6Exp").innerHTML = "";
		document.getElementById("game6Money").innerHTML = "";
	}
	if (game7 == "win") {
		document.getElementById("game7Result").innerHTML = "Win";
		document.getElementById("game7Result").style.color = "green";
		document.getElementById("game7Exp").innerHTML = winExp;
		document.getElementById("game7Money").innerHTML = "$" + winMoney;
		document.getElementById("game7").value = 5;
	} else if (game7 == "loss") {
		document.getElementById("game7Result").innerHTML = "Lose";
		document.getElementById("game7Result").style.color = "red";
		document.getElementById("game7Exp").innerHTML = loseExp;
		document.getElementById("game7Money").innerHTML = "$" + loseMoney;
		document.getElementById("game7").value = 5;
	} else {
		document.getElementById("game7Result").innerHTML = "";
		document.getElementById("game7Exp").innerHTML = "";
		document.getElementById("game7Money").innerHTML = "";
	}
	if (game8 == "win") {
		document.getElementById("game8Result").innerHTML = "Win";
		document.getElementById("game8Result").style.color = "green";
		document.getElementById("game8Exp").innerHTML = winExp;
		document.getElementById("game8Money").innerHTML = "$" + winMoney;
		document.getElementById("game8").value = 5;
	} else if (game8 == "loss") {
		document.getElementById("game8Result").innerHTML = "Lose";
		document.getElementById("game8Result").style.color = "red";
		document.getElementById("game8Exp").innerHTML = loseExp;
		document.getElementById("game8Money").innerHTML = "$" + loseMoney;
		document.getElementById("game8").value = 5;
	} else {
		document.getElementById("game8Result").innerHTML = "";
		document.getElementById("game8Exp").innerHTML = "";
		document.getElementById("game8Money").innerHTML = "";
	}
	if (game9 == "win") {
		document.getElementById("game9Result").innerHTML = "Win";
		document.getElementById("game9Result").style.color = "green";
		document.getElementById("game9Exp").innerHTML = winExp;
		document.getElementById("game9Money").innerHTML = "$" + winMoney;
		document.getElementById("game9").value = 5;
	} else if (game9 == "loss") {
		document.getElementById("game9Result").innerHTML = "Lose";
		document.getElementById("game9Result").style.color = "red";
		document.getElementById("game9Exp").innerHTML = loseExp;
		document.getElementById("game9Money").innerHTML = "$" + loseMoney;
		document.getElementById("game9").value = 5;
	} else {
		document.getElementById("game9Result").innerHTML = "";
		document.getElementById("game9Exp").innerHTML = "";
		document.getElementById("game9Money").innerHTML = "";
	}
	if (game10 == "win") {
		document.getElementById("game10Result").innerHTML = "Win";
		document.getElementById("game10Result").style.color = "green";
		document.getElementById("game10Exp").innerHTML = winExp;
		document.getElementById("game10Money").innerHTML = "$" + winMoney;
		document.getElementById("game10").value = 5;
	} else if (game10 == "loss") {
		document.getElementById("game10Result").innerHTML = "Lose";
		document.getElementById("game10Result").style.color = "red";
		document.getElementById("game10Exp").innerHTML = loseExp;
		document.getElementById("game10Money").innerHTML = "$" + loseMoney;
		document.getElementById("game10").value = 5;
	} else {
		document.getElementById("game10Result").innerHTML = "";
		document.getElementById("game10Exp").innerHTML = "";
		document.getElementById("game10Money").innerHTML = "";
	}
}

function deleteData() {
	localStorage.clear();
	totalMoney = 0;
	overallMoney = 0;
	xp = 0;
	winChance = 5;
	trainerXp = 0;
	gameNum = 1;
	result = false;
	level = 1;
	nextLevel = 25;
	previousLevel = 0;
	seasons = 1;
	totalWins = 0;
	totalLoss = 0;
	totalGames = 0;
	countdownSec = 5;
	trainerActive = false;
	managerActive = false;
	expPlayerActive = false;
	popPlayerActive = false;
	managerEarnings = 1;
	managerUpCost = 500;
	trainerUpCost = 5000;
	seconds = 1;
	seasonWin = 0;
	seasonLoss = 0;
	seasonMoney = 0;
	seasonXp = 0;
	
	for (x=1;x<11;x++) {
		document.getElementById("game" + x).value = 0;
		document.getElementById("game" + x + "Result").innerHTML = "";
		document.getElementById("game" + x + "Exp").innerHTML = "";
		document.getElementById("game" + x + "Money").innerHTML = "";
	}

	document.getElementById("levelUp").value = 0;
	document.getElementById("startSeason").style.display = "none";
	countdownSec = 5;
	clearInterval(startCountdown);
	clearInterval(startSeason);
	clearInterval(gainMoney);
	
	game1 = "none";
	game2 = "none";
	game3 = "none";
	game4 = "none";
	game5 = "none";
	game6 = "none";
	game7 = "none";
	game8 = "none";
	game9 = "none";
	game10 = "none";
	
	displayData();
}

function oneS() {
	if (seconds < 5) {
		document.getElementById("game" + gameNum).value = seconds;	
		seconds++;
	} else {
		document.getElementById("game" + gameNum).value = seconds;
		gameResult();
		seconds = 1;
	}	
	
	document.getElementById("overallMoney").innerHTML = "$" + formatNum(overallMoney);
	
	displayData();
}

function gameResult() {
	var num = Math.random() * 100;
	
	if (num <= winChance) {
		//Game Won
		result = true;
		xp += 5;
		document.getElementById("totalXp").innerHTML = xp.toFixed(2);
		totalMoney += 10;
		document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
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
		document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
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
		document.getElementById("nextLevel").innerHTML = nextLevel;
	}
}

function displayResult(num) { 
	if (result == true) {
		document.getElementById("game" + num + "Result").innerHTML = "Win";
		document.getElementById("game" + num + "Result").style.color = "green";
		document.getElementById("game" + num + "Exp").innerHTML = winExp;
		document.getElementById("game" + num + "Money").innerHTML = "$" + winMoney;
		switch (num) {
			case 1:	game1 = "win";
				break;
			case 2:	game2 = "win";
				break;
			case 3:	game3 = "win";
				break;
			case 4:	game4 = "win";
				break;
			case 5:	game5 = "win";
				break;
			case 6:	game6 = "win";
				break;
			case 7:	game7 = "win";
				break;
			case 8:	game8 = "win";
				break;
			case 9:	game9 = "win";
				break;
			case 10:	game10 = "win";
				break;
		}
	} else {
		document.getElementById("game" + num + "Result").innerHTML = "Lose";
		document.getElementById("game" + num + "Result").style.color = "red";
		document.getElementById("game" + num + "Exp").innerHTML = loseExp;
		document.getElementById("game" + num + "Money").innerHTML = "$" + loseMoney;
		switch (num) {
			case 1:	game1 = "loss";
				break;
			case 2:	game2 = "loss";
				break;
			case 3:	game3 = "loss";
				break;
			case 4:	game4 = "loss";
				break;
			case 5:	game5 = "loss";
				break;
			case 6:	game6 = "loss";
				break;
			case 7:	game7 = "loss";
				break;
			case 8:	game8 = "loss";
				break;
			case 9:	game9 = "loss";
				break;
			case 10:	game10 = "loss";
				break;
		}
	}
	
	if (num < 10) {gameNum++;}
		else {
			clearTimeout(timerS);
			endSeason();
		}

	if (trainerActive == true) {
		xp += trainerXp;
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
	
	for (x=1;x<11;x++) {
		document.getElementById("game" + x).value = 0;
		document.getElementById("game" + x + "Result").innerHTML = "";
		document.getElementById("game" + x + "Exp").innerHTML = "";
		document.getElementById("game" + x + "Money").innerHTML = "";
	}

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
	
	game1 = "none";
	game2 = "none";
	game3 = "none";
	game4 = "none";
	game5 = "none";
	game6 = "none";
	game7 = "none";
	game8 = "none";
	game9 = "none";
	game10 = "none";	
	
	save();
	timerS = setInterval(oneS,1000);
}

function perfectSeason() {
		
}

function gainMoney() {
	totalMoney += managerEarnings;
	document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
	overallMoney += managerEarnings;
	document.getElementById("overallMoney").innerHTML = "$" + formatNum(overallMoney);
}

function hireManager() {
	if (totalMoney >= 50 && managerActive == false) {
		setInterval(gainMoney,1000);
		document.getElementById("managerText").innerHTML = "Manager: $" + managerEarnings + "/s";
		document.getElementById("manager").style.backgroundColor = "#8DCF8A";
		document.getElementById("upgradeManager").style.display = "block";
		totalMoney -= 50;
		document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
		managerActive = true;		
	}	
}

function hireTrainer() {
	if (totalMoney >= 250 && trainerActive == false) {
		trainerXp += 0.01;
		document.getElementById("trainerText").innerHTML = "Trainers: " + trainerXp + "xp/game";
		document.getElementById("trainers").style.backgroundColor = "#8DCF8A";
		document.getElementById("upgradeTrainer").style.display = "block";
		totalMoney -= 250;
		document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
		trainerActive = true;
	}
}

function upgradeManager() {
	if (totalMoney >= managerUpCost) {
		totalMoney -= managerUpCost;
		document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
		managerEarnings++;
		document.getElementById("managerText").innerHTML = "Manager: $" + managerEarnings + "/s";
		managerUpCost *= 1.5;
		document.getElementById("managerUpCost").innerHTML = "$" + format(managerUpCost);
	}
}

function upgradeTrainer() {
	if (totalMoney >= trainerUpCost) {
		totalMoney -= trainerUpCost;
		document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
		trainerXp += 0.01;
		document.getElementById("trainerText").innerHTML = "Trainers: " + trainerXp.toFixed(2) + "xp/game";
		trainerUpCost *= 1.5;
		document.getElementById("trainerUpCost").innerHTML = "$" + formatNum(trainerUpCost);
	}
}

function selectStar(star) {
	switch (star) {
		case exp:
			if (totalMoney >= 5000 && expPlayerActive == false) {
				document.getElementById("expPlayerText").innerHTML = "Experienced Player: Lvl 1";
				document.getElementById("manager").style.backgroundColor = "#8DCF8A";
				totalMoney -= 5000;
				document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
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

//Format Numbers to K, M, B
function formatNum(num) {
	if (num >= 1000000000) {
		return num = (Math.ceil((num/1000000000) * 100) / 100).toFixed(2) + "B";
	} else if (num >= 1000000){
		return num = (Math.ceil((num/1000000) * 100) / 100).toFixed(2) + "M";
	} else if (num >= 1000) {
		return num = (Math.ceil((num/1000) * 100) / 100).toFixed(2) + "K";
	} else {
		return num = Math.round(Math.ceil(num * 100) / 100);
	}
}