var timerS;
var timerB;
var timerSB;

var keyCount = 0;
var totalKeyCount = 0;
var keyCarton = 0;
var bin = 0;
var key;
var manualKeyPress = 1;
var keysFormat = 0;

var keyDownColor = "#aaaaaa";
var keyUpColor = "#dedede";

var currentBelt = "white";

var keyBotAvail = false;
var scriptActive = false;
var script1Cost = 10;
var script1Count = 0;
var script2Cost = 250;
var script2Count = 0;
var script3Cost = 1000;
var script3Count = 0;
var scriptAutoCount = 0;

var numAchievement = false;
var letterAchievement = false;
var yellowAchievement = false;
var goldAchievement = false;
var orangeAchievement = false;
var greenAchievement = false;
var blueAchievement = false;
var purpleAchievement = false;
var brownAchievement = false;
var redAchievement = false;
var blackAchievement = false;
var mBlackAchievement = false;

//Key Objects
//count = individual key presses, spanID = entire key span, countID = count span
var key1 = {count:0, spanID:"1", countID:"key1Count", code:49, belt:"white"}
var key2 = {count:0, spanID:"2", countID:"key2Count", code:50, belt:"white"}
var key3 = {count:0, spanID:"3", countID:"key3Count", code:51, belt:"white"}
var key4 = {count:0, spanID:"4", countID:"key4Count", code:52, belt:"white"}
var key5 = {count:0, spanID:"5", countID:"key5Count", code:53, belt:"white"}
var key6 = {count:0, spanID:"6", countID:"key6Count", code:54, belt:"white"}
var key7 = {count:0, spanID:"7", countID:"key7Count", code:55, belt:"white"}
var key8 = {count:0, spanID:"8", countID:"key8Count", code:56, belt:"white"}
var key9 = {count:0, spanID:"9", countID:"key9Count", code:57, belt:"white"}
var key0 = {count:0, spanID:"0", countID:"key0Count", code:48, belt:"white"}
var keyQ = {count:0, spanID:"q", countID:"keyQCount", code:81, belt:"white"}
var keyW = {count:0, spanID:"w", countID:"keyWCount", code:87, belt:"white"}
var keyE = {count:0, spanID:"e", countID:"keyECount", code:69, belt:"white"}
var keyR = {count:0, spanID:"r", countID:"keyRCount", code:82, belt:"white"}
var keyT = {count:0, spanID:"t", countID:"keyTCount", code:84, belt:"white"}
var keyY = {count:0, spanID:"y", countID:"keyYCount", code:89, belt:"white"}
var keyU = {count:0, spanID:"u", countID:"keyUCount", code:85, belt:"white"}
var keyI = {count:0, spanID:"i", countID:"keyICount", code:73, belt:"white"}
var keyO = {count:0, spanID:"o", countID:"keyOCount", code:79, belt:"white"}
var keyP = {count:0, spanID:"p", countID:"keyPCount", code:80, belt:"white"}
var keyA = {count:0, spanID:"a", countID:"keyACount", code:65, belt:"white"}
var keyS = {count:0, spanID:"s", countID:"keySCount", code:83, belt:"white"}
var keyD = {count:0, spanID:"d", countID:"keyDCount", code:68, belt:"white"}
var keyF = {count:0, spanID:"f", countID:"keyFCount", code:70, belt:"white"}
var keyG = {count:0, spanID:"g", countID:"keyGCount", code:71, belt:"white"}
var keyH = {count:0, spanID:"h", countID:"keyHCount", code:72, belt:"white"}
var keyJ = {count:0, spanID:"j", countID:"keyJCount", code:74, belt:"white"}
var keyK = {count:0, spanID:"k", countID:"keyKCount", code:75, belt:"white"}
var keyL = {count:0, spanID:"l", countID:"keyLCount", code:76, belt:"white"}
var keyZ = {count:0, spanID:"z", countID:"keyZCount", code:90, belt:"white"}
var keyX = {count:0, spanID:"x", countID:"keyXCount", code:88, belt:"white"}
var keyC = {count:0, spanID:"c", countID:"keyCCount", code:67, belt:"white"}
var keyV = {count:0, spanID:"v", countID:"keyVCount", code:86, belt:"white"}
var keyB = {count:0, spanID:"b", countID:"keyBCount", code:66, belt:"white"}
var keyN = {count:0, spanID:"n", countID:"keyNCount", code:78, belt:"white"}
var keyM = {count:0, spanID:"m", countID:"keyMCount", code:77, belt:"white"}

//Array for keys
var keys = [key1, key2, key3, key4, key5, key6, key7, key8, key9, key0, keyQ, keyW, keyE, keyR, keyT, keyY, keyU, keyI, keyO, keyP, keyA, keyS, keyD, keyF, keyG, keyH, keyJ, keyK, keyL, keyZ, keyX, keyC, keyV, keyB, keyN, keyM];

var beltReq = 25;
var yellowBeltReq = 25;
var goldBeltReq = 75;
var orangeBeltReq = 150;
var greenBeltReq = 400;
var blueBeltReq = 1000;
var purpleBeltReq = 2500;
var brownBeltReq = 7500;
var redBeltReq = 15000;
var blackBeltReq = 50000;
var mBlackBeltReq = 100000;


var randomKey = 0;
var min = 48;
var max = 90;

function start() {
	timerS = setInterval(oneM,100);
	saveTimer = setInterval(saveGame,1000);
	loadGame();
}

//SAVE
function saveGame() {
	var saveObj = {
		keyCarton: keyCarton,
		keyCount: keyCount,
		scriptActive: scriptActive,
		script1Cost: script1Cost,
		script1Count: script1Count,
		script2Cost: script2Cost,
		script2Count: script2Count,
		script3Cost: script3Cost,
		script3Count: script3Count,
		yellowAchievement: yellowAchievement,
		goldAchievement: goldAchievement,
		orangeAchievement: orangeAchievement,
		greenAchievement, greenAchievement,
		blueAchievement, blueAchievement,
		purpleAchievement, purpleAchievement,
		brownAchievement, brownAchievement,
		redAchievement, redAchievement,
		blackAchievement, blackAchievement,
		mBlackAchievement, mBlackAchievement,
		manualKeyPress: manualKeyPress,
		scriptAutoCount: scriptAutoCount,
		beltReq: beltReq,
		keys1: key1.count,
		keys2: key2.count,
		keys3: key3.count,
		keys4: key4.count,
		keys5: key5.count,
		keys6: key6.count,
		keys7: key7.count,
		keys8: key8.count,
		keys9: key9.count,
		keys0: key0.count,
		keysQ: keyQ.count,
		keysW: keyW.count,
		keysE: keyE.count,
		keysR: keyR.count,
		keysT: keyT.count,
		keysY: keyY.count,
		keysU: keyU.count,
		keysI: keyI.count,
		keysO: keyO.count,
		keysP: keyP.count,
		keysA: keyA.count,
		keysS: keyS.count,
		keysD: keyD.count,
		keysF: keyF.count,
		keysG: keyG.count,
		keysH: keyH.count,
		keysJ: keyJ.count,
		keysK: keyK.count,
		keysL: keyL.count,
		keysZ: keyZ.count,
		keysX: keyX.count,
		keysC: keyC.count,
		keysV: keyV.count,
		keysB: keyB.count,
		keysN: keyN.count,
		keysM: keyM.count
	}
	localStorage.setItem("saveFile", JSON.stringify(saveObj));
	
	var saveString = {
		currentBelt: currentBelt
	}
	localStorage.setItem("saveStrings", JSON.stringify(saveString));
}

//LOAD
function loadGame() {
	var saveObj = JSON.parse(localStorage.getItem("saveFile"));
	keyCarton = saveObj.keyCarton;
	keyCount = saveObj.keyCount;
	scriptActive = saveObj.scriptActive;
	script1Cost = saveObj.script1Cost;
	script1Count = saveObj.script1Count;
	script2Cost = saveObj.script2Cost;
	script2Count = saveObj.script2Count;
	script3Cost = saveObj.script3Cost;
	script3Count = saveObj.script3Count;
	yellowAchievement = saveObj.yellowAchievement;
	goldAchievement = saveObj.goldAchievement;
	orangeAchievement = saveObj.orangeAchievement;
	greenAchievement = saveObj.greenAchievement;
	blueAchievement = saveObj.blueAchievement;
	purpleAchievement = saveObj.purpleAchievement;
	brownAchievement = saveObj.brownAchievement;
	redAchievement = saveObj.redAchievement;
	blackAchievement = saveObj.blackAchievement;
	mBlackAchievement = saveObj.mBlackAchievement;
	manualKeyPress = saveObj.manualKeyPress;
	scriptAutoCount = saveObj.scriptAutoCount;
	beltReq = saveObj.beltReq;
	key1.count = saveObj.keys1;
	key2.count = saveObj.keys2;
	key3.count = saveObj.keys3;
	key4.count = saveObj.keys4;
	key5.count = saveObj.keys5;
	key6.count = saveObj.keys6;
	key7.count = saveObj.keys7;
	key8.count = saveObj.keys8;
	key9.count = saveObj.keys9;
	key0.count = saveObj.keys0;
	keyQ.count = saveObj.keysQ;
	keyW.count = saveObj.keysW;
	keyE.count = saveObj.keysE;
	keyR.count = saveObj.keysR;
	keyT.count = saveObj.keysT;
	keyY.count = saveObj.keysY;
	keyU.count = saveObj.keysU;
	keyI.count = saveObj.keysI;
	keyO.count = saveObj.keysO;
	keyP.count = saveObj.keysP;
	keyA.count = saveObj.keysA;
	keyS.count = saveObj.keysS;
	keyD.count = saveObj.keysD;
	keyF.count = saveObj.keysF;
	keyG.count = saveObj.keysG;
	keyH.count = saveObj.keysH;
	keyJ.count = saveObj.keysJ;
	keyK.count = saveObj.keysK;
	keyL.count = saveObj.keysL;
	keyZ.count = saveObj.keysZ;
	keyX.count = saveObj.keysX;
	keyC.count = saveObj.keysC;
	keyV.count = saveObj.keysV;
	keyB.count = saveObj.keysB;
	keyN.count = saveObj.keysN;
	keyM.count = saveObj.keysM;
	
	//Check for each key's belt color
	for(i=0;i<36;i++) {;
		keyUp(keys[i], "load");
	}
	
	var saveString = JSON.parse(localStorage.getItem("saveStrings"));
	currentBelt = saveString.currentBelt;	
	
	if (scriptAutoCount > 0) {
		timerSB = setInterval(runScript,1000);
	}
	
	if (script1Count >= 3) {
		document.getElementById("script2").style.visibility = "visible";
	}
	if (script2Count >= 3) {
		document.getElementById("script3").style.visibility = "visible";
	}
	
	displayData();
}

//HARD RESET
function deleteData() {
	keyCarton = 0;
	keyCount = 0;
	scriptActive = false;
	script1Cost = 10;
	script1Count = 0;
	script2Cost = 250;
	script2Count = 0;
	script3Cost = 1000;
	script3Count = 0;
	manualKeyPress = 1;
	scriptAutoCount = 0;
	beltReq = 10;
	
	//Reset Keys
	for(i=0;i<36;i++) {
		keys[i].count = 0;
		keys[i].belt = "white";
		document.getElementById(keys[i].spanID).style.backgroundColor = "#FFFFFF";
		document.getElementById(keys[i].spanID).style.fontWeight = "normal";
		document.getElementById(keys[i].spanID).style.color = "black";
		document.getElementById(keys[i].countID).style.color = "#565656";
	}
			
	currentBelt = "white";
	
	//Clear Achievements
	numAchievement = false;
	letterAchievement = false;
	yellowAchievement = false;
	goldAchievement = false;
	orangeAchievement = false;
	greenAchievement = false;
	blueAchievement = false;
	purpleAchievement = false;
	brownAchievement = false;
	redAchievement = false;
	blackAchievement = false;
	mBlackAchievement = false;
	
	//Clear scripts
	document.getElementById("script2").style.visibility = "hidden";
	document.getElementById("script3").style.visibility = "hidden";
	
	//Hide Belt Achievements
	document.getElementById("yellowBelt").style.visibility = "hidden";
	document.getElementById("goldBelt").style.visibility = "hidden";
	document.getElementById("orangeBelt").style.visibility = "hidden";
	document.getElementById("greenBelt").style.visibility = "hidden";
	document.getElementById("blueBelt").style.visibility = "hidden";
	document.getElementById("purpleBelt").style.visibility = "hidden";
	document.getElementById("brownBelt").style.visibility = "hidden";
	document.getElementById("redBelt").style.visibility = "hidden";
	document.getElementById("blackBelt").style.visibility = "hidden";
	document.getElementById("mBlackBelt").style.visibility = "hidden";

	//Hide Legend
	document.getElementById("legendGold").style.visibility = "hidden";
	document.getElementById("legendOrange").style.visibility = "hidden";
	document.getElementById("legendGreen").style.visibility = "hidden";
	document.getElementById("legendBlue").style.visibility = "hidden";
	document.getElementById("legendPurple").style.visibility = "hidden";
	document.getElementById("legendBrown").style.visibility = "hidden";
	document.getElementById("legendRed").style.visibility = "hidden";
	document.getElementById("legendBlack").style.visibility = "hidden";
	document.getElementById("legendMBlack").style.visibility = "hidden";
	
	document.getElementById("resetConfirm").style.visibility = "hidden";
	
	displayData();
}

//DISPLAY DATA
function displayData() {
	document.getElementById("keyCarton").innerHTML = formatNum(keyCarton);
	document.getElementById("totalKeys").innerHTML = formatNum(keyCount);
	document.getElementById("script1Count").innerHTML = script1Count;
	document.getElementById("script1Cost").innerHTML = formatNum(script1Cost);	
	document.getElementById("script2Count").innerHTML = script2Count;
	document.getElementById("script2Cost").innerHTML = formatNum(script2Cost);	
	document.getElementById("script3Count").innerHTML = script3Count;
	document.getElementById("script3Cost").innerHTML = formatNum(script3Cost);
	document.getElementById("keysPerPress").innerHTML = manualKeyPress;	
	document.getElementById("keyBotRate").innerHTML = scriptAutoCount + "/s";
	document.getElementById("key1Count").innerHTML = formatNum(key1.count);
	document.getElementById("key2Count").innerHTML = formatNum(key2.count);
	document.getElementById("key3Count").innerHTML = formatNum(key3.count);
	document.getElementById("key4Count").innerHTML = formatNum(key4.count);
	document.getElementById("key5Count").innerHTML = formatNum(key5.count);
	document.getElementById("key6Count").innerHTML = formatNum(key6.count);
	document.getElementById("key7Count").innerHTML = formatNum(key7.count);
	document.getElementById("key8Count").innerHTML = formatNum(key8.count);
	document.getElementById("key9Count").innerHTML = formatNum(key9.count);
	document.getElementById("key0Count").innerHTML = formatNum(key0.count);
	document.getElementById("keyQCount").innerHTML = formatNum(keyQ.count);
	document.getElementById("keyWCount").innerHTML = formatNum(keyW.count);
	document.getElementById("keyECount").innerHTML = formatNum(keyE.count);
	document.getElementById("keyRCount").innerHTML = formatNum(keyR.count);
	document.getElementById("keyTCount").innerHTML = formatNum(keyT.count);
	document.getElementById("keyYCount").innerHTML = formatNum(keyY.count);
	document.getElementById("keyUCount").innerHTML = formatNum(keyU.count);
	document.getElementById("keyICount").innerHTML = formatNum(keyI.count);
	document.getElementById("keyOCount").innerHTML = formatNum(keyO.count);
	document.getElementById("keyPCount").innerHTML = formatNum(keyP.count);
	document.getElementById("keyACount").innerHTML = formatNum(keyA.count);
	document.getElementById("keySCount").innerHTML = formatNum(keyS.count);
	document.getElementById("keyDCount").innerHTML = formatNum(keyD.count);
	document.getElementById("keyFCount").innerHTML = formatNum(keyF.count);
	document.getElementById("keyGCount").innerHTML = formatNum(keyG.count);
	document.getElementById("keyHCount").innerHTML = formatNum(keyH.count);
	document.getElementById("keyJCount").innerHTML = formatNum(keyJ.count);
	document.getElementById("keyKCount").innerHTML = formatNum(keyK.count);
	document.getElementById("keyLCount").innerHTML = formatNum(keyL.count);
	document.getElementById("keyZCount").innerHTML = formatNum(keyZ.count);
	document.getElementById("keyXCount").innerHTML = formatNum(keyX.count);
	document.getElementById("keyCCount").innerHTML = formatNum(keyC.count);
	document.getElementById("keyVCount").innerHTML = formatNum(keyV.count);
	document.getElementById("keyBCount").innerHTML = formatNum(keyB.count);
	document.getElementById("keyNCount").innerHTML = formatNum(keyN.count);
	document.getElementById("keyMCount").innerHTML = formatNum(keyM.count);
	
	if (currentBelt == "white") {
		document.getElementById("keysPerPress").innerHTML = manualKeyPress;
		document.getElementById("belt").innerHTML = "White Belt";
		document.getElementById("belt").style.backgroundColor = "#FFFFFF";
		document.getElementById("topBelt").style.backgroundColor = "#FFFFFF";
	} else if (currentBelt == "yellow") {displayBelt("white");} 
	else if (currentBelt == "gold") {displayBelt("yellow");} 
	else if (currentBelt == "orange") {displayBelt("gold");} 
	else if (currentBelt == "green") {displayBelt("orange");} 
	else if (currentBelt == "blue") {displayBelt("green");} 
	else if (currentBelt == "purple") {displayBelt("blue");} 
	else if (currentBelt == "brown") {displayBelt("purple");} 
	else if (currentBelt == "red") {displayBelt("brown");} 
	else if (currentBelt == "black") {displayBelt("red");} 
	else if (currentBelt == "mBlack") {displayBelt("black");}
}

function oneM() {
	
	document.getElementById("totalKeys").innerHTML = formatNum(keyCount);
	
	//Script 1 Available
	if (keyCarton >= script1Cost) {
		keyBotAvail = true;
		document.getElementById("script1Up").style.color = "black";
		document.getElementById("script1Up").style.backgroundColor = "#B1FB17";
	}
	else {
		keyBotAvail = false;
		document.getElementById("script1Up").style.color = "#ababab";
		document.getElementById("script1Up").style.backgroundColor = "#ffffff";
	}
	
	//Script 2 Available
	if (keyCarton >= script2Cost) {
		document.getElementById("script2Up").style.color = "black";
		document.getElementById("script2Up").style.backgroundColor = "#B1FB17";
	}
	else {
		document.getElementById("script2Up").style.color = "#ababab";
		document.getElementById("script2Up").style.backgroundColor = "#ffffff";
	}
	
	//Script 3 Available
	if (keyCarton >= script3Cost) {
		document.getElementById("script3Up").style.color = "black";
		document.getElementById("script3Up").style.backgroundColor = "#B1FB17";
	}
	else {
		document.getElementById("script3Up").style.color = "#ababab";
		document.getElementById("script3Up").style.backgroundColor = "#ffffff";
	}
	
	//Display Next Available Script
	if (script1Count >= 3) {document.getElementById("script2").style.visibility = "visible";}
	if (script2Count >= 3) {document.getElementById("script3").style.visibility = "visible";}
	
	//100 Key Presses
	if (keyCount >= 100){document.getElementById("keyCount100").style.visibility = "visible";}
		else {document.getElementById("keyCount100").style.visibility = "hidden";}

	//1K Key Presses
	if (keyCount >= 1000){document.getElementById("keyCount1K").style.visibility = "visible";}	
		else {document.getElementById("keyCount1K").style.visibility = "hidden";}
	
	//10K Key Presses
	if (keyCount >= 10000){document.getElementById("keyCount10K").style.visibility = "visible";}
		else {document.getElementById("keyCount10K").style.visibility = "hidden";}
		
	//100K Key Presses
	if (keyCount >= 100000){document.getElementById("keyCount100K").style.visibility = "visible";}
		else {document.getElementById("keyCount100K").style.visibility = "hidden";}
	
	//Numbers1 Achievement
	for (n=0; n<10; n++) {
		if (keys[n].count == 0) {
			numAchievement = false;
			break;
		} else {
			numAchievement = true;
		}
	}	
	if (numAchievement == true) {document.getElementById("numbers1").style.visibility = "visible";}
		else {document.getElementById("numbers1").style.visibility = "hidden";}
	
	//Letters1 Achievement
	for (l=10; l<36; l++) {
		if (keys[l].count == 0) {
			letterAchievement = false;
			break;
		} else {
			letterAchievement = true;
		}
	}
	if (letterAchievement == true) {document.getElementById("letters1").style.visibility = "visible";}
		else {document.getElementById("letters1").style.visibility = "hidden";}
	
	//Belt Achievements
	if (yellowAchievement == true) {document.getElementById("yellowBelt").style.visibility = "visible";}
	if (goldAchievement == true) {document.getElementById("goldBelt").style.visibility = "visible";} 
	if (orangeAchievement == true) {document.getElementById("orangeBelt").style.visibility = "visible";}
	if (greenAchievement == true) {document.getElementById("greenBelt").style.visibility = "visible";}
	if (blueAchievement == true) {document.getElementById("blueBelt").style.visibility = "visible";}
	if (purpleAchievement == true) {document.getElementById("purpleBelt").style.visibility = "visible";}
	if (brownAchievement == true) {document.getElementById("brownBelt").style.visibility = "visible";}
	if (redAchievement == true) {document.getElementById("redBelt").style.visibility = "visible";}
	if (blackAchievement == true) {document.getElementById("blackBelt").style.visibility = "visible";}
	if (mBlackAchievement == true) {document.getElementById("mBlackBelt").style.visibility = "visible";}
	
	//Deployed 10 Simple Scripts
	if (script1Count >= 10) {document.getElementById("script1x10").style.visibility = "visible";}
		else {document.getElementById("script1x10").style.visibility = "hidden";}
		
	//Master Key Achievement
	//if (key1 >= 50 || key2 >= 50 || key3 >= 50 || key4 >= 50 || key5 >= 50 || key6 >= 50 || key7 >= 50 || key8 >= 50 || key9 >= 50 || key0 >= 50 || keyA >= 50 || keyB >= 50 || keyC >= 50 || keyD >= 50 || keyE >= 50 || keyF >= 50 || keyG >= 50 || keyH >= 50 || keyI >= 50 || keyJ >= 50 || keyK >= 50 || keyL >= 50 || keyM >= 50 || keyN >= 50 || keyO >= 50 || keyP >= 50 || keyQ >= 50 || keyR >= 50 || keyS >= 50 || keyT >= 50 || keyU >= 50 || keyV >= 50 || keyW >= 50 || keyX >= 50 || keyY >= 50 || keyZ >= 50) {
	//	document.getElementById("masterKey").style.visibility = "visible";	
	//}	
	
	//Check Keys for Belt Upgrade
	for (i=0; i<36; i++) {
		if (keys[i].count >= beltReq) {keyBeltUp += 1;} 
		else {keyBeltUp = 0;}
		
		//If All Keys Meet Required Belt
		if (keyBeltUp == 36) {
			keyBeltUp = 0;
			displayBelt(currentBelt);
		}
	}	
}

function displayBelt(belt) {
	switch(belt){
		case "white": 
			//Activate Yellow Belt
			beltReq = goldBeltReq;
			currentBelt = "yellow";
			yellowAchievement = true;
			manualKeyPress = 2;
			document.getElementById("keysPerPress").innerHTML = manualKeyPress;
			document.getElementById("belt").innerHTML = "Yellow Belt";
			document.getElementById("belt").style.backgroundColor = "#F3F781";
			document.getElementById("topBelt").style.backgroundColor = "#F3F781";
			break;
		case "yellow": 
			//Activate Gold Belt
			beltReq = orangeBeltReq;
			currentBelt = "gold";
			goldAchievement = true;
			manualKeyPress = 3;
			document.getElementById("keysPerPress").innerHTML = manualKeyPress;
			document.getElementById("goldBelt").style.visibility = "visible";
			document.getElementById("belt").innerHTML = "Gold Belt";
			document.getElementById("belt").style.backgroundColor = "#FACC2E";
			document.getElementById("topBelt").style.backgroundColor = "#FACC2E";
			break;
		case "gold":
			//Activate Orange Belt
			beltReq = greenBeltReq;
			currentBelt = "orange";
			orangeAchievement = true;
			manualKeyPress = 4;
			document.getElementById("keysPerPress").innerHTML = manualKeyPress;
			document.getElementById("orangeBelt").style.visibility = "visible";
			document.getElementById("belt").innerHTML = "Orange Belt";
			document.getElementById("belt").style.backgroundColor = "#FE9A2E";
			document.getElementById("topBelt").style.backgroundColor = "#FE9A2E";					
			break;
		case "orange":
			//Activate Green Belt
			beltReq = blueBeltReq;
			currentBelt = "green";
			greenAchievement = true;
			manualKeyPress = 5;
			document.getElementById("keysPerPress").innerHTML = manualKeyPress;
			document.getElementById("greenBelt").style.visibility = "visible";
			document.getElementById("belt").innerHTML = "Green Belt";
			document.getElementById("belt").style.backgroundColor = "#01DF01";
			document.getElementById("topBelt").style.backgroundColor = "#01DF01";					
			break;
		case "green":
			//Activate Blue Belt
			beltReq = purpleBeltReq;
			currentBelt = "blue";
			blueAchievement = true;
			manualKeyPress = 6;
			document.getElementById("keysPerPress").innerHTML = manualKeyPress;
			document.getElementById("blueBelt").style.visibility = "visible";
			document.getElementById("belt").innerHTML = "Blue Belt";
			document.getElementById("belt").style.backgroundColor = "#00BFFF";	
			document.getElementById("topBelt").style.backgroundColor = "#00BFFF";
			break;
		case "blue":
			//Activate Purple Belt
			beltReq = brownBeltReq;
			currentBelt = "purple";
			purpleAchievement = true;
			manualKeyPress = 7;
			document.getElementById("keysPerPress").innerHTML = manualKeyPress;
			document.getElementById("purpleBelt").style.visibility = "visible";
			document.getElementById("belt").innerHTML = "Purple Belt";
			document.getElementById("belt").style.backgroundColor = "#9F81F7";	
			document.getElementById("topBelt").style.backgroundColor = "#9F81F7";
			break;
		case "purple":
			//Activate Brown Belt
			beltReq = redBeltReq;
			currentBelt = "brown";
			brownAchievement = true;
			manualKeyPress = 8;
			document.getElementById("keysPerPress").innerHTML = manualKeyPress;
			document.getElementById("brownBelt").style.visibility = "visible";
			document.getElementById("belt").innerHTML = "Brown Belt";		
			document.getElementById("belt").style.color = "#FFFFFF";		
			document.getElementById("belt").style.backgroundColor = "#8A4B08";
			document.getElementById("topBelt").style.backgroundColor = "#8A4B08";					
			break;
		case "brown":
			//Activate Red Belt
			beltReq = blackBeltReq;
			currentBelt = "red";
			redAchievement = true;
			manualKeyPress = 9;
			document.getElementById("keysPerPress").innerHTML = manualKeyPress;
			document.getElementById("redBelt").style.visibility = "visible";
			document.getElementById("belt").innerHTML = "Red Belt";
			document.getElementById("belt").style.backgroundColor = "#DF0101";
			document.getElementById("topBelt").style.backgroundColor = "#DF0101";					
			break;
		case "red":
			//Activate Black Belt
			beltReq = mBlackBeltReq;
			currentBelt = "black";
			blackAchievement = true;
			manualKeyPress = 10;
			document.getElementById("keysPerPress").innerHTML = manualKeyPress;
			document.getElementById("blackBelt").style.visibility = "visible";
			document.getElementById("belt").innerHTML = "Black Belt";
			document.getElementById("belt").style.backgroundColor = "#000000";
			document.getElementById("belt").style.color = "#FFFFFF";
			document.getElementById("topBelt").style.backgroundColor = "#000000";					
			break;
		case "black":
			//Activate Master Black Belt
			currentBelt = "mBlack";
			mBlackAchievement = true;
			manualKeyPress = 11;
			document.getElementById("keysPerPress").innerHTML = manualKeyPress;
			document.getElementById("mBlackBelt").style.visibility = "visible";
			document.getElementById("belt").innerHTML = "Master Black Belt";
			document.getElementById("belt").style.backgroundColor = "#000000";
			document.getElementById("belt").style.color = "#FFFFFF";
			document.getElementById("belt").style.borderColor = "#FACC2E";
			document.getElementById("topBelt").style.backgroundColor = "#000000";	
			document.getElementById("topBelt").style.borderColor = "#FACC2E";					
			break;
	}
}

//Keydown Event
document.addEventListener("keydown", keyPressed, false);

function keyPressed(e) {
	if (e > 47) {var keyCode = e;} 
	else {var keyCode = e.keyCode;}	
	
	switch(keyCode) {
		//row1
		case 49: document.getElementById("1").style.borderColor = keyDownColor;
			break;
		case 50: document.getElementById("2").style.borderColor = keyDownColor;
			break;
		case 51: document.getElementById("3").style.borderColor = keyDownColor;
			break;
		case 52: document.getElementById("4").style.borderColor = keyDownColor;
			break;
		case 53: document.getElementById("5").style.borderColor = keyDownColor;
			break;
		case 54: document.getElementById("6").style.borderColor = keyDownColor;
			break;
		case 55: document.getElementById("7").style.borderColor = keyDownColor;
			break;
		case 56: document.getElementById("8").style.borderColor = keyDownColor;
			break;
		case 57: document.getElementById("9").style.borderColor = keyDownColor;
			break;
		case 48: document.getElementById("0").style.borderColor = keyDownColor;
			break;
		//rowQ
		case 81: document.getElementById("q").style.borderColor = keyDownColor;
			break;
		case 87: document.getElementById("w").style.borderColor = keyDownColor;
			break;
		case 69: document.getElementById("e").style.borderColor = keyDownColor;
			break;
		case 82: document.getElementById("r").style.borderColor = keyDownColor;
			break;
		case 84: document.getElementById("t").style.borderColor = keyDownColor;
			break;
		case 89: document.getElementById("y").style.borderColor = keyDownColor;
			break;
		case 85: document.getElementById("u").style.borderColor = keyDownColor;
			break;
		case 73: document.getElementById("i").style.borderColor = keyDownColor;
			break;
		case 79: document.getElementById("o").style.borderColor = keyDownColor;
			break;
		case 80: document.getElementById("p").style.borderColor = keyDownColor;
			break;
		//rowA
		case 65: document.getElementById("a").style.borderColor = keyDownColor;
			break;
		case 83: document.getElementById("s").style.borderColor = keyDownColor;
			break;
		case 68: document.getElementById("d").style.borderColor = keyDownColor;
			break;
		case 70: document.getElementById("f").style.borderColor = keyDownColor;
			break;
		case 71: document.getElementById("g").style.borderColor = keyDownColor;
			break;
		case 72: document.getElementById("h").style.borderColor = keyDownColor;
			break;
		case 74: document.getElementById("j").style.borderColor = keyDownColor;
			break;
		case 75: document.getElementById("k").style.borderColor = keyDownColor;
			break;
		case 76: document.getElementById("l").style.borderColor = keyDownColor;
			break;
		//rowZ
		case 90: document.getElementById("z").style.borderColor = keyDownColor;
			break;
		case 88: document.getElementById("x").style.borderColor = keyDownColor;
			break;
		case 67: document.getElementById("c").style.borderColor = keyDownColor;
			break;
		case 86: document.getElementById("v").style.borderColor = keyDownColor;
			break;
		case 66: document.getElementById("b").style.borderColor = keyDownColor;
			break;
		case 78: document.getElementById("n").style.borderColor = keyDownColor;
			break;
		case 77: document.getElementById("m").style.borderColor = keyDownColor;
			break;
	}
}
	
//Keyup Event
document.addEventListener("keyup", keyUnpressed, false);

function keyUnpressed(e, script) {

	var script = script;

	if (e > 47) {var keyCode = e;} 
	else {var keyCode = e.keyCode;}	
	
	switch(keyCode) {
		//row1
		case 49: document.getElementById("1").style.borderColor = keyUpColor;
			keyUp(key1, script);
			break;
		case 50: document.getElementById("2").style.borderColor = keyUpColor;
			keyUp(key2, script);
			break;
		case 51: document.getElementById("3").style.borderColor = keyUpColor;
			keyUp(key3, script);
			break;
		case 52: document.getElementById("4").style.borderColor = keyUpColor;
			keyUp(key4, script);
			break;
		case 53: document.getElementById("5").style.borderColor = keyUpColor;
			keyUp(key5, script);
			break;
		case 54: document.getElementById("6").style.borderColor = keyUpColor;
			keyUp(key6, script);
			break;
		case 55: document.getElementById("7").style.borderColor = keyUpColor;
			keyUp(key7, script);
			break;
		case 56: document.getElementById("8").style.borderColor = keyUpColor;
			keyUp(key8, script);
			break;
		case 57: document.getElementById("9").style.borderColor = keyUpColor;
			keyUp(key9, script);
			break;
		case 48: document.getElementById("0").style.borderColor = keyUpColor;
			keyUp(key0, script);
			break;
		//rowQ
		case 81: document.getElementById("q").style.borderColor = keyUpColor;
			keyUp(keyQ, script);
			break;
		case 87: document.getElementById("w").style.borderColor = keyUpColor;
			keyUp(keyW, script);
			break;
		case 69: document.getElementById("e").style.borderColor = keyUpColor;
			keyUp(keyE, script);
			break;
		case 82: document.getElementById("r").style.borderColor = keyUpColor;
			keyUp(keyR, script);
			break;
		case 84: document.getElementById("t").style.borderColor = keyUpColor;
			keyUp(keyT, script);
			break;
		case 89: document.getElementById("y").style.borderColor = keyUpColor;
			keyUp(keyY, script);
			break;
		case 85: document.getElementById("u").style.borderColor = keyUpColor;
			keyUp(keyU, script);
			break;
		case 73: document.getElementById("i").style.borderColor = keyUpColor;
			keyUp(keyI, script);
			break;
		case 79: document.getElementById("o").style.borderColor = keyUpColor;
			keyUp(keyO, script);
			break;
		case 80: document.getElementById("p").style.borderColor = keyUpColor;
			keyUp(keyP, script);
			break;
		//rowA
		case 65: document.getElementById("a").style.borderColor = keyUpColor;
			keyUp(keyA, script);
			break;
		case 83: document.getElementById("s").style.borderColor = keyUpColor;
			keyUp(keyS, script);
			break;
		case 68: document.getElementById("d").style.borderColor = keyUpColor;
			keyUp(keyD, script);
			break;
		case 70: document.getElementById("f").style.borderColor = keyUpColor;
			keyUp(keyF, script);
			break;
		case 71: document.getElementById("g").style.borderColor = keyUpColor;
			keyUp(keyG, script);
			break;
		case 72: document.getElementById("h").style.borderColor = keyUpColor;
			keyUp(keyH, script);
			break;
		case 74: document.getElementById("j").style.borderColor = keyUpColor;
			keyUp(keyJ, script);
			break;
		case 75: document.getElementById("k").style.borderColor = keyUpColor;
			keyUp(keyK, script);
			break;
		case 76: document.getElementById("l").style.borderColor = keyUpColor;
			keyUp(keyL, script);
			break;
		//rowZ
		case 90: document.getElementById("z").style.borderColor = keyUpColor;
			keyUp(keyZ, script);
			break;
		case 88: document.getElementById("x").style.borderColor = keyUpColor;
			keyUp(keyX, script);
			break;
		case 67: document.getElementById("c").style.borderColor = keyUpColor;
			keyUp(keyC, script);
			break;
		case 86: document.getElementById("v").style.borderColor = keyUpColor;
			keyUp(keyV, script);
			break;
		case 66: document.getElementById("b").style.borderColor = keyUpColor;
			keyUp(keyB, script);
			break;
		case 78: document.getElementById("n").style.borderColor = keyUpColor;
			keyUp(keyN, script);
			break;
		case 77: document.getElementById("m").style.borderColor = keyUpColor;
			keyUp(keyM, script);
			break;
	}	
}

function keyUp(key, script) {
	//Increment Key Count Via Script
	if (script == "yes") {
		key.count += 1;
		keyCount += 1;
		keyCarton += 1;
		script = "";	
	//Increment Key Count Via Manual Press
	} else if (script == "load"){} 
	else {
		key.count += manualKeyPress;		
		keyCount += manualKeyPress;
		keyCarton += manualKeyPress;					
	}

	document.getElementById(key.countID).innerHTML = formatNum(key.count);
		
	//Change Key to Next Level
	if (key.count >= yellowBeltReq) {
		document.getElementById(key.spanID).style.backgroundColor = "#F3F781";
		document.getElementById("legendGold").style.visibility = "visible";
		key.belt = "yellow";
	}
	if (key.count >= goldBeltReq) {
		document.getElementById(key.spanID).style.backgroundColor = "#FACC2E";
		document.getElementById("legendOrange").style.visibility = "visible";
		key.belt = "gold";
	}
	if (key.count >= orangeBeltReq) {
		document.getElementById(key.spanID).style.backgroundColor = "#FE9A2E";
		document.getElementById("legendGreen").style.visibility = "visible";
		key.belt = "orange";
	}
	if (key.count >= greenBeltReq) {
		document.getElementById(key.spanID).style.backgroundColor = "#01DF01";
		document.getElementById("legendBlue").style.visibility = "visible";
		key.belt = "green";
	}
	if (key.count >= blueBeltReq) {
		document.getElementById(key.spanID).style.backgroundColor = "#00BFFF";
		document.getElementById("legendPurple").style.visibility = "visible";
		key.belt = "blue";
	}
	if (key.count >= purpleBeltReq) {
		document.getElementById(key.spanID).style.backgroundColor = "#9F81F7";
		document.getElementById("legendBrown").style.visibility = "visible";
		key.belt = "purple";
	}
	if (key.count >= brownBeltReq) {
		document.getElementById(key.spanID).style.backgroundColor = "#8A4B08";
		document.getElementById(key.spanID).style.color = "#ffffff";
		document.getElementById(key.countID).style.color = "#dedede";
		document.getElementById("legendRed").style.visibility = "visible";
		key.belt = "brown";
	}
	if (key.count >= redBeltReq) {
		document.getElementById(key.spanID).style.backgroundColor = "#DF0101";
		document.getElementById("legendBlack").style.visibility = "visible";
		key.belt = "red";
	}
	if (key.count >= blackBeltReq) {
		document.getElementById(key.spanID).style.backgroundColor = "#000000";
				document.getElementById(key.countID).style.color = "#787878";
		document.getElementById("legendMBlack").style.visibility = "visible";
		key.belt = "black";
	}
	if (key.count >= mBlackBeltReq) {
		document.getElementById(key.spanID).style.fontWeight = "bold";
		document.getElementById(key.spanID).style.color = "gold";
		key.belt = "mBlack";
	}

	document.getElementById("keyCarton").innerHTML = formatNum(keyCarton);	
}

//Activate Script
function timerStartBot(script) {
	switch(script){
		//Script 1
		case 1:
			if (script1Cost <= keyCarton) {
				keyCarton -= script1Cost;
				scriptAutoCount += 1;
				script1Count += 1;
				script1Cost *= 2.25;
				document.getElementById("script1Count").innerHTML = script1Count;
				document.getElementById("script1Cost").innerHTML = formatNum(script1Cost);
			}
			break;
		//Script 2
		case 2:
			if (script2Cost <= keyCarton) {
				keyCarton -= script2Cost;
				scriptAutoCount += 5;
				script2Count += 1;
				script2Cost *= 2.25;
				document.getElementById("script2Count").innerHTML = script2Count;
				document.getElementById("script2Cost").innerHTML = formatNum(script2Cost);
			}
			break;
		//Script 3
		case 3:
			if (script3Cost <= keyCarton) {
				keyCarton -= script3Cost;
				scriptAutoCount += 10;
				script3Count += 1;
				script3Cost *= 2.25;
				document.getElementById("script3Count").innerHTML = script3Count;
				document.getElementById("script3Cost").innerHTML = formatNum(script3Cost);
			}
			break;
	}
		
		document.getElementById("keyCarton").innerHTML = formatNum(keyCarton);
		document.getElementById("keyBotRate").innerHTML = scriptAutoCount + "/s";
		
		if (scriptActive == false) {timerSB = setInterval(runScript,1000);}
		scriptActive = true;
}

function runScript() {	
	for (i=0; i<scriptAutoCount; i++) {
		do {randomKey = Math.floor(Math.random() * (max + 1 - min) + min);}
		while (randomKey == 58 || randomKey == 59 || randomKey == 60 || randomKey == 61 || randomKey == 62 || randomKey == 63 || randomKey == 64);
		keyUnpressed(randomKey, "yes");
	}
	
	document.getElementById("keyCarton").innerHTML = formatNum(keyCarton);
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

//Tab DISPLAY
function tabDisplay(tab) {
	document.getElementById("achMnts").style.display = "none";
	document.getElementById("legend").style.display = "none";
	document.getElementById("information").style.display = "none";
	document.getElementById("options").style.display = "none";
	document.getElementById("subtitleA").style.backgroundColor = "white";
	document.getElementById("subtitleI").style.backgroundColor = "white";
	document.getElementById("subtitleL").style.backgroundColor = "white";
	document.getElementById("subtitleO").style.backgroundColor = "white";
	
	switch(tab) {
		case 1:
			document.getElementById("achMnts").style.display = "block";
			document.getElementById("subtitleA").style.backgroundColor = "#ADD8E6";
			break;
		case 2:
			document.getElementById("legend").style.display = "block";
			document.getElementById("subtitleL").style.backgroundColor = "#ADD8E6";
			break;
		case 3:
			document.getElementById("information").style.display = "block";
			document.getElementById("subtitleI").style.backgroundColor = "#ADD8E6";
			break;
		case 4:
			document.getElementById("options").style.display = "block";
			document.getElementById("subtitleO").style.backgroundColor = "#ADD8E6";
			break;
	}
}
