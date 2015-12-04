var seconds = 1;
var totalMoney = 0;
var overallMoney = 0;
var xp = 0;
var rank = 0;
var trophies = 0;
var winChance = 25;
var trainerXp = 0;
var gameNum = 1;
var result = false;
var level = 0;
var nextLevel = 25;
var previousLevel = 0;
var seasons = 1;
var totalWins = 0;
var totalLoss = 0;
var totalGames = 0;
var winMoney = 10;
var loseMoney = 5;
var winExp = 5;
var loseExp = 2.5;
var countdownSec = 5;
var managerLevel = 0;
var trainerLevel = 0;
var expPlayerLevel = 0;
var popPlayerLevel = 0;
var trainerActive = false;
var managerActive = false;
var expPlayerActive = false;
var popPlayerActive = false;
var mascotActive = false;
var uniformsActive = false;
var expStarUpCost = 10000;
var popStarUpCost = 10000;
var managerEarnings = 1;
var managerUpCost = 250;
var trainerUpCost = 1000;
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
var leagues = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX"];
var ranks = [1, 0.925, 0.81, 0.69, 0.6, 0.5, 0.45, 0.39, 0.333, 0.29, 0.25];

//End of Season Stats
var seasonWin = 0;
var seasonLoss = 0;
var seasonMoney = 0;
var seasonXp = 0;

//Trophies
var trophiesClaimed = [false, false, false, false, false];

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
		rank: rank,
		trophies: trophies,
		trophiesClaimed: trophiesClaimed,
		winChance: winChance,
		trainerXp: trainerXp,
		gameNum: gameNum,
		level: level,
		managerLevel: managerLevel,
		trainerLevel: trainerLevel,
		expPlayerLevel: expPlayerLevel,
		popPlayerLevel: popPlayerLevel,
		nextLevel: nextLevel,
		previousLevel: previousLevel,
		seasons: seasons,
		totalWins: totalWins,
		totalLoss: totalLoss,
		totalGames: totalGames,
		winMoney: winMoney,
		loseMoney: loseMoney,
		winExp: winExp,
		loseExp: loseExp,
		trainerActive: trainerActive,
		managerActive: managerActive,
		expPlayerActive: expPlayerActive,
		popPlayerActive: popPlayerActive,
		mascotActive: mascotActive,
		uniformsActive: uniformsActive,
		expStarUpCost: expStarUpCost,
		popStarUpCost: popStarUpCost,
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
	rank = saveObj.rank;
	trophies = saveObj.trophies;
	trophiesClaimed = saveObj.trophiesClaimed;
	winChance = saveObj.winChance;
	trainerXp = saveObj.trainerXp;
	gameNum = saveObj.gameNum;
	level = saveObj.level;
	managerLevel = saveObj.managerLevel;
	trainerLevel = saveObj.trainerLevel;
	expPlayerLevel = saveObj.expPlayerLevel;
	popPlayerLevel = saveObj.popPlayerLevel;
	nextLevel = saveObj.nextLevel;
	previousLevel = saveObj.previousLevel;
	seasons = saveObj.seasons;
	totalWins = saveObj.totalWins;
	totalLoss = saveObj.totalLoss;
	totalGames = saveObj.totalGames;
	winMoney = saveObj.winMoney;
	loseMoney = saveObj.loseMoney;
	winExp = saveObj.winExp;
	loseExp = saveObj.loseExp;
	trainerActive = saveObj.trainerActive;
	managerActive = saveObj.managerActive;
	expPlayerActive = saveObj.expPlayerActive;
	mascotActive = saveObj.mascotActive;
	uniformsActive = saveObj.uniformsActive;
	popPlayerActive = saveObj.popPlayerActive;
	expStarUpCost = saveObj.expStarUpCost;
	popStarUpCost = saveObj.popStarUpCost;
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
	
	//Manager Active?
	if (managerActive == true) {setInterval(gainMoney,1000);} 
		else if (managerActive == false) {clearInterval(gainMoney);}
	document.getElementById("managerText").innerHTML = managerActive ? "Manager: $" + managerEarnings.toFixed(2) + "/s" : "Hire Manager<br> <small><small>+$1.00/s for $50</small></small>";
	document.getElementById("managerInfo").style.display = managerActive ? "block": "none";
	document.getElementById("manager").style.backgroundColor = managerActive ? "#8DCF8A" : "#EFEFEF";
	document.getElementById("manager").style.cursor = managerActive ? "default" : "pointer";
	document.getElementById("managerText").style.cursor = managerActive ? "default" : "pointer";
	document.getElementById("upgradeManager").style.display = managerActive ? "block" : "none";
	
	//Trainer Active?
	document.getElementById("trainerText").innerHTML = trainerActive ? "Trainers: " + trainerXp.toFixed(2) + "xp/game" : "Hire Trainers<br> <small><small>+0.1 xp/game for $250</small></small>";
	document.getElementById("trainerInfo").style.display = trainerActive ? "block": "none";
	document.getElementById("trainers").style.backgroundColor = trainerActive ? "#8DCF8A" : "#EFEFEF";
	document.getElementById("trainers").style.cursor = trainerActive ? "default" : "pointer";
	document.getElementById("trainerText").style.cursor = trainerActive ? "default" : "pointer";
	document.getElementById("upgradeTrainer").style.display = trainerActive ? "block" : "none";
	
	//Experienced Player Active?
	document.getElementById("expPlayerText").innerHTML = expPlayerActive ? "Experienced Player" : "Experienced Player<br><small><small>Boost Exp/Game<br>Requires: League V & $2,500</small></small>";
	document.getElementById("expPlayerInfo").style.display = expPlayerActive ? "block": "none";
	document.getElementById("expPlayer").style.backgroundColor = expPlayerActive ? "#8DCF8A" : "#EFEFEF";
	document.getElementById("upgradeExpStar").style.display = expPlayerActive ? "block" : "none";
	
	//Popular Player Active?
	document.getElementById("popPlayerText").innerHTML = popPlayerActive ? "Popular Player" : "Popular Player<br><small><small>Boost Exp/Game<br>Requires: League V & $2,500</small></small>";
	document.getElementById("popPlayerInfo").style.display = popPlayerActive ? "block": "none";
	document.getElementById("popPlayer").style.backgroundColor = popPlayerActive ? "#8DCF8A" : "#EFEFEF";
	document.getElementById("upgradePopStar").style.display = popPlayerActive ? "block" : "none";
	
	//Mascot Active?
	document.getElementById("mascot").style.backgroundColor = mascotActive ? "#8DCF8A" : "#EFEFEF";
	document.getElementById("mascot").style.border = mascotActive ? "2px solid gold" : "0px";
	document.getElementById("mascot").innerHTML = mascotActive ? "Mascot: +5% Win Chance" : "Mascot<br><small><small>Add 5% to Win Chance for 5 trophies</small></small>";
	
	checkRank();
	displayData();
}

function displayData() {	
	//Manager Available
	if (totalMoney >= 50 && managerActive == false) {
		document.getElementById("manager").style.backgroundColor = "#F3F781";
	} else if (totalMoney < 50 && managerActive == false) {document.getElementById("manager").style.backgroundColor = "#efefef";}
	//Manager Upgrade Available
	if (totalMoney >= managerUpCost) {
		document.getElementById("upgradeManager").style.backgroundColor = "#F3F781";
		document.getElementById("upgradeManager").style.boxShadow = "2px 2px 2px #565656";
	} else {
		document.getElementById("upgradeManager").style.backgroundColor = "#8DCF8A";
		document.getElementById("upgradeManager").style.boxShadow = "0px 0px 0px #565656";
	}
	
	//Trainers Available
	if (totalMoney >= 250 && trainerActive == false) {
		document.getElementById("trainers").style.backgroundColor = "#F3F781";
	} else if (totalMoney < 250 && trainerActive == false) {document.getElementById("trainers").style.backgroundColor = "#efefef";}
	//Trainer Upgrade Available
	if (totalMoney >= trainerUpCost) {
		document.getElementById("upgradeTrainer").style.backgroundColor = "#F3F781";
		document.getElementById("upgradeTrainer").style.boxShadow = "2px 2px 2px #565656";
	} else {
		document.getElementById("upgradeTrainer").style.backgroundColor = "#8DCF8A";
		document.getElementById("upgradeTrainer").style.boxShadow = "0px 0px 0px #565656";
	}
	
	//Exp Player Available
	if (level >= 5 && totalMoney >= 2500 && expPlayerActive == false) {
		document.getElementById("expPlayer").style.backgroundColor = "#F3F781";
	} else if (totalMoney < 5000 && expPlayerActive == false) {document.getElementById("expPlayer").style.backgroundColor = "#efefef";}
	//Exp Player Upgrade Available
	if (totalMoney >= expStarUpCost) {
		document.getElementById("upgradeExpStar").style.backgroundColor = "#F3F781";
		document.getElementById("upgradeExpStar").style.boxShadow = "2px 2px 2px #565656";
	} else {
		document.getElementById("upgradeExpStar").style.backgroundColor = "#8DCF8A";
		document.getElementById("upgradeExpStar").style.boxShadow = "0px 0px 0px #565656";
	}
	
	//Popular Player Available
	if (level >= 8 && totalMoney >= 5000 && popPlayerActive == false) {
		document.getElementById("popPlayer").style.backgroundColor = "#F3F781";
	} else if (totalMoney < 10000 && popPlayerActive == false) {document.getElementById("popPlayer").style.backgroundColor = "#efefef";}
	//Pop Player Upgrade Available
	if (totalMoney >= popStarUpCost) {
		document.getElementById("upgradePopStar").style.backgroundColor = "#F3F781";
		document.getElementById("upgradePopStar").style.boxShadow = "2px 2px 2px #565656";
	} else {
		document.getElementById("upgradePopStar").style.backgroundColor = "#8DCF8A";
		document.getElementById("upgradePopStar").style.boxShadow = "0px 0px 0px #565656";
	}
	
	//TROPHIES
	//Mascot Upgrade Available
	if (trophies >= 5 && mascotActive == false) {document.getElementById("mascot").style.backgroundColor = "#F3F781"}
		else if (trophies < 5 && mascotActive == false) {document.getElementById("mascot").style.backgroundColor = "#EFEFEF"}
		
	//Uniforms Upgrade Available
	if (trophies >= 5) {document.getElementById("uniforms").style.backgroundColor = "#F3F781"}
		else {document.getElementById("uniforms").style.backgroundColor = "#EFEFEF"}
	
	//Win 100
	if (totalWins >= 100 && trophiesClaimed[0] == false) {document.getElementById("winsTrophy").innerHTML = "<img src='trophy.png' height='16'>";}
		else if (trophiesClaimed[0] == true) {document.getElementById("winsTrophy").innerHTML = "<img src='check.png' height='16'>";}
	//Reach Level 10
	if (level >= 10 && trophiesClaimed[1] == false) {document.getElementById("levelTrophy").innerHTML = "<img src='trophy.png' height='16'>";}
		else if (trophiesClaimed[1] == true) {document.getElementById("levelTrophy").innerHTML = "<img src='check.png' height='16'>";}
	//Win Chance > 33%
	if (winChance >= 33 && trophiesClaimed[2] == false) {document.getElementById("chanceTrophy").innerHTML = "<img src='trophy.png' height='16'>";}
		else if (trophiesClaimed[2] == true) {document.getElementById("chanceTrophy").innerHTML = "<img src='check.png' height='16'>";}
	//Rank #9
	if (rank >= 9 && trophiesClaimed[3] == false) {document.getElementById("rankTrophy").innerHTML = "<img src='trophy.png' height='16'>";}
		else if (trophiesClaimed[3] == true) {document.getElementById("rankTrophy").innerHTML = "<img src='check.png' height='16'>";}
	//Level 10 Manager
	if (managerLevel >= 10 && trophiesClaimed[4] == false) {document.getElementById("managerTrophy").innerHTML = "<img src='trophy.png' height='16'>";}
		else if (trophiesClaimed[4] == true) {document.getElementById("managerTrophy").innerHTML = "<img src='check.png' height='16'>";}
		
	if (seasons > 4) {
		document.getElementById("rankInfo").style.display = "none";
		checkRank();
	}
	
	document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
	document.getElementById("overallMoney").innerHTML = "$" + formatNum(overallMoney);
	document.getElementById("levelUp").value = xp - previousLevel;
	document.getElementById("numTrophies").innerHTML = trophies;
	document.getElementById("winChance").innerHTML = winChance + "%";
	document.getElementById("level").innerHTML = leagues[level-1];
	document.getElementById("managerLevel").innerHTML = managerLevel;
	document.getElementById("trainerLevel").innerHTML = trainerLevel;
	document.getElementById("expPlayerLevel").innerHTML = expPlayerLevel;
	document.getElementById("popPlayerLevel").innerHTML = popPlayerLevel;
	document.getElementById("seasons").innerHTML = seasons;
	if (totalWins != 0 && totalLoss != 0) {
		var winPct = totalWins/(totalWins+totalLoss);
		document.getElementById("overallRecord").innerHTML = totalWins + "-" + totalLoss + " [" + winPct.toFixed(3) + "]";
	} else {document.getElementById("overallRecord").innerHTML = totalWins + "-" + totalLoss + "[0.000]"};	
	document.getElementById("totalGames").innerHTML = totalGames;
	document.getElementById("totalXp").innerHTML = formatNum(xp);
	document.getElementById("nextLevel").innerHTML = formatNum(nextLevel);
	document.getElementById("managerUpCost").innerHTML = "$" + formatNum(managerUpCost);
	document.getElementById("trainerUpCost").innerHTML = "$" + formatNum(trainerUpCost);
	document.getElementById("expStarUpCost").innerHTML = formatNum(expStarUpCost);
	document.getElementById("popStarUpCost").innerHTML = formatNum(popStarUpCost);
	document.getElementById("winExp").innerHTML = formatNum(winExp);
	document.getElementById("loseExp").innerHTML = formatNum(loseExp);
	document.getElementById("winMoney").innerHTML = formatNum(winMoney);
	document.getElementById("loseMoney").innerHTML = formatNum(loseMoney);
	
	if (game1 == "win") {
		document.getElementById("game1Result").innerHTML = "Win";
		document.getElementById("game1Result").style.color = "green";
		document.getElementById("game1Exp").innerHTML = formatNum(winExp);
		document.getElementById("game1Money").innerHTML = "$" + formatNum(winMoney);
		document.getElementById("game1").value = 5;
	} else if (game1 == "loss") {
		document.getElementById("game1Result").innerHTML = "Lose";
		document.getElementById("game1Result").style.color = "red";
		document.getElementById("game1Exp").innerHTML = formatNum(loseExp);
		document.getElementById("game1Money").innerHTML = "$" + formatNum(loseMoney);
		document.getElementById("game1").value = 5;
	} else {
		document.getElementById("game1Result").innerHTML = "";
		document.getElementById("game1Exp").innerHTML = "";
		document.getElementById("game1Money").innerHTML = "";
	}
	if (game2 == "win") {
		document.getElementById("game2Result").innerHTML = "Win";
		document.getElementById("game2Result").style.color = "green";
		document.getElementById("game2Exp").innerHTML = formatNum(winExp);
		document.getElementById("game2Money").innerHTML = "$" + formatNum(winMoney);
		document.getElementById("game2").value = 5;
	} else if (game2 == "loss") {
		document.getElementById("game2Result").innerHTML = "Lose";
		document.getElementById("game2Result").style.color = "red";
		document.getElementById("game2Exp").innerHTML = formatNum(loseExp);
		document.getElementById("game2Money").innerHTML = "$" + formatNum(loseMoney);
		document.getElementById("game2").value = 5;
	} else {
		document.getElementById("game2Result").innerHTML = "";
		document.getElementById("game2Exp").innerHTML = "";
		document.getElementById("game2Money").innerHTML = "";
	}
	if (game3 == "win") {
		document.getElementById("game3Result").innerHTML = "Win";
		document.getElementById("game3Result").style.color = "green";
		document.getElementById("game3Exp").innerHTML = formatNum(winExp);
		document.getElementById("game3Money").innerHTML = "$" + formatNum(winMoney);
		document.getElementById("game3").value = 5;
	} else if (game3 == "loss") {
		document.getElementById("game3Result").innerHTML = "Lose";
		document.getElementById("game3Result").style.color = "red";
		document.getElementById("game3Exp").innerHTML = formatNum(loseExp);
		document.getElementById("game3Money").innerHTML = "$" + formatNum(loseMoney);
		document.getElementById("game3").value = 5;
	} else {
		document.getElementById("game3Result").innerHTML = "";
		document.getElementById("game3Exp").innerHTML = "";
		document.getElementById("game3Money").innerHTML = "";
	}
	if (game4 == "win") {
		document.getElementById("game4Result").innerHTML = "Win";
		document.getElementById("game4Result").style.color = "green";
		document.getElementById("game4Exp").innerHTML = formatNum(winExp);
		document.getElementById("game4Money").innerHTML = "$" + formatNum(winMoney);
		document.getElementById("game4").value = 5;
	} else if (game4 == "loss") {
		document.getElementById("game4Result").innerHTML = "Lose";
		document.getElementById("game4Result").style.color = "red";
		document.getElementById("game4Exp").innerHTML = formatNum(loseExp);
		document.getElementById("game4Money").innerHTML = "$" + formatNum(loseMoney);
		document.getElementById("game4").value = 5;
	} else {
		document.getElementById("game4Result").innerHTML = "";
		document.getElementById("game4Exp").innerHTML = "";
		document.getElementById("game4Money").innerHTML = "";
	}
	if (game5 == "win") {
		document.getElementById("game5Result").innerHTML = "Win";
		document.getElementById("game5Result").style.color = "green";
		document.getElementById("game5Exp").innerHTML = formatNum(winExp);
		document.getElementById("game5Money").innerHTML = "$" + formatNum(winMoney);
		document.getElementById("game5").value = 5;
	} else if (game5 == "loss") {
		document.getElementById("game5Result").innerHTML = "Lose";
		document.getElementById("game5Result").style.color = "red";
		document.getElementById("game5Exp").innerHTML = formatNum(loseExp);
		document.getElementById("game5Money").innerHTML = "$" + formatNum(loseMoney);
		document.getElementById("game5").value = 5;
	} else {
		document.getElementById("game5Result").innerHTML = "";
		document.getElementById("game5Exp").innerHTML = "";
		document.getElementById("game5Money").innerHTML = "";
	}
	if (game6 == "win") {
		document.getElementById("game6Result").innerHTML = "Win";
		document.getElementById("game6Result").style.color = "green";
		document.getElementById("game6Exp").innerHTML = formatNum(winExp);
		document.getElementById("game6Money").innerHTML = "$" + formatNum(winMoney);
		document.getElementById("game6").value = 5;
	} else if (game6 == "loss") {
		document.getElementById("game6Result").innerHTML = "Lose";
		document.getElementById("game6Result").style.color = "red";
		document.getElementById("game6Exp").innerHTML = formatNum(loseExp);
		document.getElementById("game6Money").innerHTML = "$" + formatNum(loseMoney);
		document.getElementById("game6").value = 5;
	} else {
		document.getElementById("game6Result").innerHTML = "";
		document.getElementById("game6Exp").innerHTML = "";
		document.getElementById("game6Money").innerHTML = "";
	}
	if (game7 == "win") {
		document.getElementById("game7Result").innerHTML = "Win";
		document.getElementById("game7Result").style.color = "green";
		document.getElementById("game7Exp").innerHTML = formatNum(winExp);
		document.getElementById("game7Money").innerHTML = "$" + formatNum(winMoney);
		document.getElementById("game7").value = 5;
	} else if (game7 == "loss") {
		document.getElementById("game7Result").innerHTML = "Lose";
		document.getElementById("game7Result").style.color = "red";
		document.getElementById("game7Exp").innerHTML = formatNum(loseExp);
		document.getElementById("game7Money").innerHTML = "$" + formatNum(loseMoney);
		document.getElementById("game7").value = 5;
	} else {
		document.getElementById("game7Result").innerHTML = "";
		document.getElementById("game7Exp").innerHTML = "";
		document.getElementById("game7Money").innerHTML = "";
	}
	if (game8 == "win") {
		document.getElementById("game8Result").innerHTML = "Win";
		document.getElementById("game8Result").style.color = "green";
		document.getElementById("game8Exp").innerHTML = formatNum(winExp);
		document.getElementById("game8Money").innerHTML = "$" + formatNum(winMoney);
		document.getElementById("game8").value = 5;
	} else if (game8 == "loss") {
		document.getElementById("game8Result").innerHTML = "Lose";
		document.getElementById("game8Result").style.color = "red";
		document.getElementById("game8Exp").innerHTML = formatNum(loseExp);
		document.getElementById("game8Money").innerHTML = "$" + formatNum(loseMoney);
		document.getElementById("game8").value = 5;
	} else {
		document.getElementById("game8Result").innerHTML = "";
		document.getElementById("game8Exp").innerHTML = "";
		document.getElementById("game8Money").innerHTML = "";
	}
	if (game9 == "win") {
		document.getElementById("game9Result").innerHTML = "Win";
		document.getElementById("game9Result").style.color = "green";
		document.getElementById("game9Exp").innerHTML = formatNum(winExp);
		document.getElementById("game9Money").innerHTML = "$" + formatNum(winMoney);
		document.getElementById("game9").value = 5;
	} else if (game9 == "loss") {
		document.getElementById("game9Result").innerHTML = "Lose";
		document.getElementById("game9Result").style.color = "red";
		document.getElementById("game9Exp").innerHTML = formatNum(loseExp);
		document.getElementById("game9Money").innerHTML = "$" + formatNum(loseMoney);
		document.getElementById("game9").value = 5;
	} else {
		document.getElementById("game9Result").innerHTML = "";
		document.getElementById("game9Exp").innerHTML = "";
		document.getElementById("game9Money").innerHTML = "";
	}
	if (game10 == "win") {
		document.getElementById("game10Result").innerHTML = "Win";
		document.getElementById("game10Result").style.color = "green";
		document.getElementById("game10Exp").innerHTML = formatNum(winExp);
		document.getElementById("game10Money").innerHTML = "$" + formatNum(winMoney);
		document.getElementById("game10").value = 5;
	} else if (game10 == "loss") {
		document.getElementById("game10Result").innerHTML = "Lose";
		document.getElementById("game10Result").style.color = "red";
		document.getElementById("game10Exp").innerHTML = formatNum(loseExp);
		document.getElementById("game10Money").innerHTML = "$" + formatNum(loseMoney);
		document.getElementById("game10").value = 5;
	} else {
		document.getElementById("game10Result").innerHTML = "";
		document.getElementById("game10Exp").innerHTML = "";
		document.getElementById("game10Money").innerHTML = "";
	}	
}

function deleteData() {
	document.getElementById("resetConfirm").style.visibility = "hidden";
	localStorage.clear();
	totalMoney = 0;
	overallMoney = 0;
	xp = 0;
	rank = 0;
	trophies = 0;
	winChance = 25;
	trainerXp = 0;
	gameNum = 1;
	result = false;
	level = 1;
	managerLevel = 0;
	trainerLevel = 0;
	expPlayerLevel = 0;
	popPlayerLevel = 0;
	nextLevel = 25;
	previousLevel = 0;
	seasons = 1;
	winExp = 5;
	loseExp = 2.5;
	winMoney = 10;
	loseMoney = 5;
	totalWins = 0;
	totalLoss = 0;
	totalGames = 0;
	countdownSec = 5;
	trainerActive = false;
	managerActive = false;
	expPlayerActive = false;
	popPlayerActive = false;
	mascotActive = false;
	uniformsActive = false;
	expStarUpCost = 10000;
	popStarUpCost = 10000;
	managerEarnings = 1;
	managerUpCost = 250;
	trainerUpCost = 1000;
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
	
	//Clear Game Results
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
	
	//Clear Goals
	document.getElementById("winsTrophy").innerHTML = "&nbsp;";
	document.getElementById("levelTrophy").innerHTML = "&nbsp;";
	document.getElementById("chanceTrophy").innerHTML = "&nbsp;";
	document.getElementById("rankTrophy").innerHTML = "&nbsp;";
	document.getElementById("managerTrophy").innerHTML = "&nbsp;";
	for (i=0;i<5;i++) {
		trophiesClaimed[i] = false;
	}
	
	//Clear Rank Table
	for (i=1;i<10;i++) {
		document.getElementById("r" + i).style.backgroundColor = "#FFFFFF";
	}
	
	document.getElementById("currentRank").innerHTML = "N/A";
	
	save();
	load();
	clearInterval(startCountdown);
	clearInterval(startSeason);
	clearInterval(gainMoney);
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
		xp += winExp;
		document.getElementById("totalXp").innerHTML = formatNum(xp);
		totalMoney += winMoney;
		document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
		seasonMoney += winMoney;
		overallMoney += winMoney;
		seasonXp += winExp;
		seasonWin++;
		totalWins++;
	} else {
		//Game Lost
		result = false;
		xp += loseExp;
		document.getElementById("totalXp").innerHTML = formatNum(xp);
		totalMoney += loseMoney;
		document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
		seasonMoney += loseMoney;
		overallMoney += loseMoney;
		seasonXp += loseExp;
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
		document.getElementById("level").innerHTML = leagues[level-1];
		previousLevel = nextLevel;
		nextLevel *= 1.75;
		document.getElementById("nextLevel").innerHTML = formatNum(nextLevel);
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
		document.getElementById("game" + num + "Exp").innerHTML = formatNum(winExp);
		document.getElementById("game" + num + "Money").innerHTML = "$" + formatNum(winMoney);
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
		document.getElementById("game" + num + "Exp").innerHTML = formatNum(loseExp);
		document.getElementById("game" + num + "Money").innerHTML = "$" + formatNum(loseMoney);
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
		document.getElementById("totalXp").innerHTML = formatNum(xp);
	}	
}

//Season Ends
function endSeason() {
	//Show Season Totals
	document.getElementById("seasonRecord").innerHTML = seasonWin + "-" + seasonLoss;
	document.getElementById("seasonMoney").innerHTML = "$" + formatNum(seasonMoney);
	document.getElementById("seasonXp").innerHTML = formatNum(seasonXp);
	
	if (seasonWin < 10) {
		document.getElementById("startSeason").style.display = "block";
		setTimeout(startSeason, 5000);
		startCountdown = setInterval(countdown, 1000);
	} else {perfectSeason();}	
}

//Check Rank
function checkRank() {
	var winPct = totalWins/(totalWins+totalLoss);
	for (i=10;i>0;i--) {
		if (winPct >= ranks[i] && winPct <= ranks[i-1]) {
			//Rank 10
			document.getElementById("r" + i).style.backgroundColor = "#8DCF8A";
			rank = i;
			document.getElementById("currentRank").innerHTML = "#" + rank;
		} else {document.getElementById("r" + i).style.backgroundColor = "#FFFFFF";}
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
		managerLevel++;
		document.getElementById("managerText").innerHTML = "Manager: $" + managerEarnings.toFixed(2) + "/s";
		document.getElementById("managerInfo").style.display = "block";
		document.getElementById("manager").style.backgroundColor = "#8DCF8A";
		document.getElementById("upgradeManager").style.display = "block";
		totalMoney -= 50;
		document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
		managerActive = true;	
		displayData();		
	}	
}

function hireTrainer() {
	if (totalMoney >= 250 && trainerActive == false) {
		trainerXp += 0.1;
		trainerLevel++;
		document.getElementById("trainerText").innerHTML = "Trainers: " + trainerXp.toFixed(2) + "xp/game";
		document.getElementById("trainerInfo").style.display = "block";
		document.getElementById("trainers").style.backgroundColor = "#8DCF8A";
		document.getElementById("upgradeTrainer").style.display = "block";
		totalMoney -= 250;
		document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
		trainerActive = true;
		displayData();
	}
}

function upgradeManager() {
	if (totalMoney >= managerUpCost) {
		totalMoney -= managerUpCost;
		document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
		managerEarnings *= 1.5;
		document.getElementById("managerText").innerHTML = "Manager: $" + managerEarnings.toFixed(2) + "/s";
		managerUpCost *= 1.5;
		document.getElementById("managerUpCost").innerHTML = "$" + formatNum(managerUpCost);
		managerLevel++;
		displayData();
	}
}

function upgradeTrainer() {
	if (totalMoney >= trainerUpCost) {
		totalMoney -= trainerUpCost;
		document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
		trainerXp *= 1.5;
		document.getElementById("trainerText").innerHTML = "Trainers: " + trainerXp.toFixed(2) + "xp/game";
		trainerUpCost *= 1.5;
		document.getElementById("trainerUpCost").innerHTML = "$" + formatNum(trainerUpCost);
		trainerLevel++;
		displayData();
	}
}

function selectStar(star) {
	switch (star) {
		case "exp":
			if (totalMoney >= 2500 && level >= 5 && expPlayerActive == false) {
				winExp *= 2;
				document.getElementById("winExp").innerHTML = winExp;
				loseExp *= 2;
				document.getElementById("loseExp").innerHTML = loseExp;
				document.getElementById("expPlayerText").innerHTML = "Experienced Player";
				document.getElementById("expPlayerInfo").style.display = "block";
				document.getElementById("expPlayer").style.backgroundColor = "#8DCF8A";
				totalMoney -= 2500;
				document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
				expPlayerActive = true;
				document.getElementById("upgradeExpStar").style.display = "block";
				expPlayerLevel++;
				displayData();
			}
			break;
		case "pop":
			if (totalMoney >= 2500 && level >= 5 && popPlayerActive == false) {
				winMoney *= 2;
				document.getElementById("winMoney").innerHTML = winMoney;
				loseMoney *= 2;
				document.getElementById("loseMoney").innerHTML = loseMoney;
				document.getElementById("popPlayerText").innerHTML = "Popular Player";
				document.getElementById("popPlayerInfo").style.display = "block";
				document.getElementById("popPlayer").style.backgroundColor = "#8DCF8A";
				totalMoney -= 2500;
				document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
				popPlayerActive = true;
				document.getElementById("upgradePopStar").style.display = "block";
				popPlayerLevel++;
				displayData();
			}
			break;
	}
}

function upgradeStar(star) {
	switch (star) {
		case "exp":
			if (totalMoney >= expStarUpCost) {
				winExp *= 2;
				document.getElementById("winExp").innerHTML = winExp;
				loseExp *= 2;
				document.getElementById("loseExp").innerHTML = loseExp;
				totalMoney -= expStarUpCost;
				document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
				expStarUpCost *= 1.5;
				document.getElementById("expStarUpCost").innerHTML = formatNum(expStarUpCost);				
				expPlayerLevel++;
				displayData();
			}
			break;
		case "pop":
			if (totalMoney >= popStarUpCost) {
				winMoney *= 2;
				document.getElementById("winMoney").innerHTML = winMoney;
				loseMoney *= 2;
				document.getElementById("loseMoney").innerHTML = loseMoney;
				totalMoney -= popStarUpCost;
				document.getElementById("totalMoney").innerHTML = formatNum(totalMoney);
				popStarUpCost *= 1.5;
				document.getElementById("popStarUpCost").innerHTML = formatNum(popStarUpCost);
				popPlayerLevel++;
				displayData();
			}
			break;
	}
}

//Gain Trophy
function gainTrophy() {
	trophies++;
	document.getElementById("numTrophies").innerHTML = trophies;
}

//Trophies
function trophy(t) {
	switch (t) {
		case "w100":
			if (totalWins >= 100 && trophiesClaimed[0] == false) {
				gainTrophy();
				document.getElementById('winsTrophy').innerHTML = "<img src='check.png'>";
				trophiesClaimed[0] = true;
			}
			break;
		case "lx":
			if (level >= 10 && trophiesClaimed[1] == false) {
				gainTrophy();
				document.getElementById('levelTrophy').style.backgroundColor = "<img src='check.png'>";
				trophiesClaimed[1] = true;
			}
			break;
		case "c33":
			if (winChance >= 33 && trophiesClaimed[2] == false) {
				gainTrophy();
				document.getElementById('chanceTrophy').style.backgroundColor = "<img src='check.png'>";
				trophiesClaimed[2] = true;
			}
			break;
		case "r9":
			if (document.getElementById("rankTrophy").innerHTML != "&nbsp;" && trophiesClaimed[3] == false) {
				gainTrophy();
				document.getElementById('rankTrophy').style.backgroundColor = "<img src='check.png'>";
				trophiesClaimed[3] = true;
			}
			break;
		case "m10":
			if (managerLevel >= 10 && trophiesClaimed[4] == false) {
				gainTrophy();
				document.getElementById('managerTrophy').style.backgroundColor = "<img src='check.png'>";
				trophiesClaimed[4] = true;
			}
			break;
	}
}

//Trophy Upgrade
function trophyUpgrade(t) {
	switch(t) {
		case "mascot":
			if (trophies >= 5) {
				trophies -= 5;
				document.getElementById("numTrophies").innerHTML = trophies;
				winChance += 5;
				document.getElementById("winChance").innerHTML = winChance + "%";
				mascotActive = true;
				document.getElementById("mascot").style.backgroundColor = "#8DCF8A";
				document.getElementById("mascot").style.border = "2px solid gold";
				document.getElementById("mascot").innerHTML = "Mascot: +5% Win Chance";
			}
			break;
		case "uniform":
			break;
	}
}

//Tabs
function tabs(num) {
	document.getElementById("options").style.display = "none";	
	document.getElementById("goals").style.display = "none";
	document.getElementById("stats").style.display = "none";
	document.getElementById("rank").style.display = "none";
	document.getElementById("optionsTab").style.backgroundColor = "#dedede";	
	document.getElementById("goalsTab").style.backgroundColor = "#dedede";
	document.getElementById("statsTab").style.backgroundColor = "#dedede";
	document.getElementById("rankTab").style.backgroundColor = "#dedede";
	switch(num) {
		case 1:
			document.getElementById("stats").style.display = "block";			
			document.getElementById("statsTab").style.backgroundColor = "#8DCF8A";			
			break;
		case 2:
			document.getElementById("goals").style.display = "block";
			document.getElementById("goalsTab").style.backgroundColor = "#8DCF8A";	
			break;
		case 3:
			document.getElementById("options").style.display = "block";
			document.getElementById("optionsTab").style.backgroundColor = "#8DCF8A";	
			break;
		case 4:
			document.getElementById("rank").style.display = "block";
			document.getElementById("rankTab").style.backgroundColor = "#8DCF8A";	
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
		return num = (Math.ceil(num * 100) / 100).toFixed(2);
	}
}