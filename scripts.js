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

var keyPowerAvail = false;
var keyPowerActive = false;
var keyBotAvail = false;
var script1Active = false;
var script1Cost = 10;
var script1Count = 0;
var script2Cost = 250;
var script2Count = 0;
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

//Array for key counts
var keys = [];
for(i=0;i<36;i++) {keys.push(0);}

var beltReq = 10;
var yellowBeltReq = 10;
var goldBeltReq = 25;
var orangeBeltReq = 75;
var greenBeltReq = 150;
var blueBeltReq = 400;
var purpleBeltReq = 1000;
var brownBeltReq = 2500;
var redBeltReq = 5000;
var blackBeltReq = 7500;
var mBlackBeltReq = 10000;

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
		script1Cost: script1Cost,
		script1Count: script1Count,
		manualKeyPress: manualKeyPress,
		scriptAutoCount: scriptAutoCount,
		keys1: keys[0],
		keys2: keys[1],
		keys3: keys[2],
		keys4: keys[3],
		keys5: keys[4],
		keys6: keys[5],
		keys7: keys[6],
		keys8: keys[7],
		keys9: keys[8],
		keys0: keys[9]
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
	script1Cost = saveObj.script1Cost;
	script1Count = saveObj.script1Count;
	manualKeyPress = saveObj.manualKeyPress;
	scriptAutoCount = saveObj.scriptAutoCount;
	keys[0] = saveObj.keys1;
	keys[1] = saveObj.keys2;
	keys[2] = saveObj.keys3;
	keys[3] = saveObj.keys4;
	keys[4] = saveObj.keys5;
	keys[5] = saveObj.keys6;
	keys[6] = saveObj.keys7;
	keys[7] = saveObj.keys8;
	keys[8] = saveObj.keys9;
	keys[9] = saveObj.keys0;
	
	var saveString = JSON.parse(localStorage.getItem("saveStrings"));
	currentBelt = saveString.currentBelt;
	
	displayData();
}

//HARD RESET
function deleteData() {
	keyCarton = 0;
	keyCount = 0;
	script1Cost = 10;
	script1Count = 0;
	manualKeyPress = 1;
	scriptAutoCount = 0;
	for(i=0;i<36;i++) {keys[i] = 0;}
	
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
	
	//Hide Legend
	document.getElementById("legendGold").style.visibility = "hidden";
	
	displayData();
}

//DISPLAY DATA
function displayData() {
	document.getElementById("keyCarton").innerHTML = Math.ceil(keyCarton * 100) / 100;
	document.getElementById("totalKeys").innerHTML = keyCount;
	document.getElementById("script1Count").innerHTML = script1Count;
	document.getElementById("script1Cost").innerHTML = script1Cost;
	document.getElementById("keysPerPress").innerHTML = manualKeyPress;	
	document.getElementById("keyBotRate").innerHTML = scriptAutoCount + "/s";
	document.getElementById("key1Count").innerHTML = keys[0];
	document.getElementById("key2Count").innerHTML = keys[1];
	document.getElementById("key3Count").innerHTML = keys[2];
	document.getElementById("key4Count").innerHTML = keys[3];
	document.getElementById("key5Count").innerHTML = keys[4];
	document.getElementById("key6Count").innerHTML = keys[5];
	document.getElementById("key7Count").innerHTML = keys[6];
	document.getElementById("key8Count").innerHTML = keys[7];
	document.getElementById("key9Count").innerHTML = keys[8];
	document.getElementById("key0Count").innerHTML = keys[9];
	
	if (currentBelt == "white") {
		document.getElementById("belt").innerHTML = "White Belt";
	}
}

function oneM() {
		
	document.getElementById("totalKeys").innerHTML = keyCount;
	
	//Script 1 Available
	if (keyCarton >= script1Cost) {
		keyBotAvail = true;
		document.getElementById("hireRobot").style.color = "black";
		document.getElementById("hireRobot").style.backgroundColor = "#BEF781";
	}
	else {
		keyBotAvail = false;
		document.getElementById("hireRobot").style.color = "#ababab";
		document.getElementById("hireRobot").style.backgroundColor = "#ffffff";
	}
	
	//10 Key Presses
	if (keyCount >= 10) {document.getElementById("keyCount10").style.visibility = "visible";}
		else {document.getElementById("keyCount10").style.visibility = "hidden";}
	
	//100 Key Presses
	if (keyCount >= 100){document.getElementById("keyCount100").style.visibility = "visible";}
		else {document.getElementById("keyCount100").style.visibility = "hidden";}

	//1K Key Presses
	if (keyCount >= 1000){document.getElementById("keyCount1K").style.visibility = "visible";}	
		else {document.getElementById("keyCount1K").style.visibility = "hidden";}
	
	//10K Key Presses
	if (keyCount >= 10000){document.getElementById("keyCount10K").style.visibility = "visible";}
		else {document.getElementById("keyCount10K").style.visibility = "hidden";}
	
	//Numbers1 Achievement
	for (n=0; n<10; n++) {
		if (keys[n] == 0) {
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
		if (keys[l] == 0) {
			letterAchievement = false;
			break;
		} else {
			letterAchievement = true;
		}
	}
	if (letterAchievement == true) {document.getElementById("letters1").style.visibility = "visible";}
		else {document.getElementById("letters1").style.visibility = "hidden";}
	
	//Deployed 10 Simple Scripts
	if (script1Count >= 10) {document.getElementById("script1x10").style.visibility = "visible";}
		else {document.getElementById("script1x10").style.visibility = "hidden";}
	
	//Check Keys for Belt Upgrade
	for (i=0; i<36; i++) {
		if (keys[i] >= beltReq) {
			keyBeltUp += 1;
		} else {
			keyBeltUp = 0;
		}
		//If All Keys Meet Required Belt
		if (keyBeltUp == 36) {
			keyBeltUp = 0;
			switch(currentBelt){
				case "white": 
					//Activate Yellow Belt
					beltReq = goldBeltReq;
					currentBelt = "yellow";
					manualKeyPress = 2;
					document.getElementById("keysPerPress").innerHTML = manualKeyPress;
					document.getElementById("yellowBelt").style.visibility = "visible";
					document.getElementById("belt").innerHTML = "Yellow Belt";
					document.getElementById("belt").style.backgroundColor = "#F3F781";
					document.getElementById("topBelt").style.backgroundColor = "#F3F781";
					break;
				case "yellow": 
					//Activate Gold Belt
					beltReq = orangeBeltReq;
					currentBelt = "gold";
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
					manualKeyPress = 8;
					document.getElementById("keysPerPress").innerHTML = manualKeyPress;
					document.getElementById("brownBelt").style.visibility = "visible";
					document.getElementById("belt").innerHTML = "Brown Belt";
					document.getElementById("belt").style.backgroundColor = "#8A4B08";
					document.getElementById("topBelt").style.backgroundColor = "#8A4B08";					
					break;
				case "brown":
					//Activate Red Belt
					beltReq = blackBeltReq;
					currentBelt = "red";
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
	}
	
	//Master Key Achievement
	//if (key1 >= 50 || key2 >= 50 || key3 >= 50 || key4 >= 50 || key5 >= 50 || key6 >= 50 || key7 >= 50 || key8 >= 50 || key9 >= 50 || key0 >= 50 || keyA >= 50 || keyB >= 50 || keyC >= 50 || keyD >= 50 || keyE >= 50 || keyF >= 50 || keyG >= 50 || keyH >= 50 || keyI >= 50 || keyJ >= 50 || keyK >= 50 || keyL >= 50 || keyM >= 50 || keyN >= 50 || keyO >= 50 || keyP >= 50 || keyQ >= 50 || keyR >= 50 || keyS >= 50 || keyT >= 50 || keyU >= 50 || keyV >= 50 || keyW >= 50 || keyX >= 50 || keyY >= 50 || keyZ >= 50) {
	//	document.getElementById("masterKey").style.visibility = "visible";	
	//}	
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
			keyUp(0, "key1Count", "1", script);
			break;
		case 50: document.getElementById("2").style.borderColor = keyUpColor;
			keyUp(1, "key2Count", "2", script);
			break;
		case 51: document.getElementById("3").style.borderColor = keyUpColor;
			keyUp(2, "key3Count", "3", script);
			break;
		case 52: document.getElementById("4").style.borderColor = keyUpColor;
			keyUp(3, "key4Count", "4", script);
			break;
		case 53: document.getElementById("5").style.borderColor = keyUpColor;
			keyUp(4, "key5Count", "5", script);
			break;
		case 54: document.getElementById("6").style.borderColor = keyUpColor;
			keyUp(5, "key6Count", "6", script);
			break;
		case 55: document.getElementById("7").style.borderColor = keyUpColor;
			keyUp(6, "key7Count", "7", script);
			break;
		case 56: document.getElementById("8").style.borderColor = keyUpColor;
			keyUp(7, "key8Count", "8", script);
			break;
		case 57: document.getElementById("9").style.borderColor = keyUpColor;
			keyUp(8, "key9Count", "9", script);
			break;
		case 48: document.getElementById("0").style.borderColor = keyUpColor;
			keyUp(9, "key0Count", "0", script);
			break;
		//rowQ
		case 81: document.getElementById("q").style.borderColor = keyUpColor;
			keyUp(10, "keyQCount", "q", script);
			break;
		case 87: document.getElementById("w").style.borderColor = keyUpColor;
			keyUp(11, "keyWCount", "w", script);
			break;
		case 69: document.getElementById("e").style.borderColor = keyUpColor;
			keyUp(12, "keyECount", "e", script);
			break;
		case 82: document.getElementById("r").style.borderColor = keyUpColor;
			keyUp(13, "keyRCount", "r", script);
			break;
		case 84: document.getElementById("t").style.borderColor = keyUpColor;
			keyUp(14, "keyTCount", "t", script);
			break;
		case 89: document.getElementById("y").style.borderColor = keyUpColor;
			keyUp(15, "keyYCount", "y", script);
			break;
		case 85: document.getElementById("u").style.borderColor = keyUpColor;
			keyUp(16, "keyUCount", "u", script);
			break;
		case 73: document.getElementById("i").style.borderColor = keyUpColor;
			keyUp(17, "keyICount", "i", script);
			break;
		case 79: document.getElementById("o").style.borderColor = keyUpColor;
			keyUp(18, "keyOCount", "o", script);
			break;
		case 80: document.getElementById("p").style.borderColor = keyUpColor;
			keyUp(19, "keyPCount", "p", script);
			break;
		//rowA
		case 65: document.getElementById("a").style.borderColor = keyUpColor;
			keyUp(20, "keyACount", "a", script);
			break;
		case 83: document.getElementById("s").style.borderColor = keyUpColor;
			keyUp(21, "keySCount", "s", script);
			break;
		case 68: document.getElementById("d").style.borderColor = keyUpColor;
			keyUp(22, "keyDCount", "d", script);
			break;
		case 70: document.getElementById("f").style.borderColor = keyUpColor;
			keyUp(23, "keyFCount", "f", script);
			break;
		case 71: document.getElementById("g").style.borderColor = keyUpColor;
			keyUp(24, "keyGCount", "g", script);
			break;
		case 72: document.getElementById("h").style.borderColor = keyUpColor;
			keyUp(25, "keyHCount", "h", script);
			break;
		case 74: document.getElementById("j").style.borderColor = keyUpColor;
			keyUp(26, "keyJCount", "j", script);
			break;
		case 75: document.getElementById("k").style.borderColor = keyUpColor;
			keyUp(27, "keyKCount", "k", script);
			break;
		case 76: document.getElementById("l").style.borderColor = keyUpColor;
			keyUp(28, "keyLCount", "l", script);
			break;
		//rowZ
		case 90: document.getElementById("z").style.borderColor = keyUpColor;
			keyUp(29, "keyZCount", "z", script);
			break;
		case 88: document.getElementById("x").style.borderColor = keyUpColor;
			keyUp(30, "keyXCount", "x", script);
			break;
		case 67: document.getElementById("c").style.borderColor = keyUpColor;
			keyUp(31, "keyCCount", "c", script);
			break;
		case 86: document.getElementById("v").style.borderColor = keyUpColor;
			keyUp(32, "keyVCount", "v", script);
			break;
		case 66: document.getElementById("b").style.borderColor = keyUpColor;
			keyUp(33, "keyBCount", "b", script);
			break;
		case 78: document.getElementById("n").style.borderColor = keyUpColor;
			keyUp(34, "keyNCount", "n", script);
			break;
		case 77: document.getElementById("m").style.borderColor = keyUpColor;
			keyUp(35, "keyMCount", "m", script);
			break;
	}	
}

function keyUp(keyVar, keySpan, key, script) {
	//Increment Key Count Via Script
	if (script == "yes") {
		keys[keyVar] += 1;
		keyCount += 1;
		keyCarton += 1;
		script = "";	
	//Increment Key Count Via Manual Press
	} else {
		keys[keyVar] += manualKeyPress;		
		keyCount += manualKeyPress;
		keyCarton += manualKeyPress;					
	}

	//Format Key Counts to "K" at 1,000
	if (keys[keyVar] >= 1000) {
		keysFormat = Math.ceil((keys[keyVar]/1000) * 100) / 100;
		document.getElementById(keySpan).innerHTML = keysFormat + "K";
	}
		
	//Change Key to Next Level
	if (keys[keyVar] >= yellowBeltReq) {
		document.getElementById(key).style.backgroundColor = "#F3F781";
		document.getElementById("legendGold").style.visibility = "visible";
	}
	if (keys[keyVar] >= goldBeltReq) {document.getElementById(key).style.backgroundColor = "#FACC2E";}
	if (keys[keyVar] >= orangeBeltReq) {document.getElementById(key).style.backgroundColor = "#FE9A2E";}
	if (keys[keyVar] >= greenBeltReq) {document.getElementById(key).style.backgroundColor = "#01DF01";}
	if (keys[keyVar] >= blueBeltReq) {document.getElementById(key).style.backgroundColor = "#00BFFF";}
	if (keys[keyVar] >= purpleBeltReq) {document.getElementById(key).style.backgroundColor = "#9F81F7";}
	if (keys[keyVar] >= brownBeltReq) {
		document.getElementById(key).style.backgroundColor = "#8A4B08";
		document.getElementById(key).style.color = "#ffffff";
	}
	if (keys[keyVar] >= redBeltReq) {document.getElementById(key).style.backgroundColor = "#DF0101";}
	if (keys[keyVar] >= blackBeltReq) {document.getElementById(key).style.backgroundColor = "#000000";}
	if (keys[keyVar] >= mBlackBeltReq) {
		document.getElementById(key).style.fontWeight = "bold"
		document.getElementById(key).style.color = "gold";
	}
	
	document.getElementById(keySpan).innerHTML = keys[keyVar];
	document.getElementById("keyCarton").innerHTML = Math.ceil(keyCarton * 100) / 100;
}

//Activate Script
function timerStartBot() {
	if (keyBotAvail == true) {
		//Update Key Bin
		keyCarton -= script1Cost;
		document.getElementById("keyCarton").innerHTML = Math.ceil(keyCarton * 100) / 100;
		
		//Update Scripts Per Second
		scriptAutoCount += 1;
		document.getElementById("keyBotRate").innerHTML = scriptAutoCount + "/s";
		
		if (scriptAutoCount == 3) {
			document.getElementById("hireRobot2").style.visibility = "visible";
			document.getElementById("script2Count").style.visibility = "visible";
		}
		
		//Update Number of Scripts Active and Cost
		script1Count += 1;
		document.getElementById("script1Count").innerHTML = script1Count;
		script1Cost *= 2.25;
		document.getElementById("script1Cost").innerHTML = Math.ceil(script1Cost * 100) / 100;
		
		if (script1Active == false) {
			timerSB = setInterval(runScript,1000);
		}
		script1Active = true;
	}
}

function runScript() {	
	for (i=0; i<scriptAutoCount; i++) {
		do {randomKey = Math.floor(Math.random() * (max + 1 - min) + min);}
		while (randomKey == 58 || randomKey == 59 || randomKey == 60 || randomKey == 61 || randomKey == 62 || randomKey == 63 || randomKey == 64);
		keyUnpressed(randomKey, "yes");
	}
	
	document.getElementById("keyCarton").innerHTML = Math.ceil(keyCarton * 100) / 100;
}
//End Activate Script
