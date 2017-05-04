$(document).ready(function() {
//::::::::::::
// global variables
//::::::::::::

var wins;
var losses;
//randomly generated number for the computer
var selectedNumber;
//randomly generated number for each of the 4 crystals
var crystalNumvar;
var sumOfCrystals;

var winsCounter = 0;
var lossesCounter = 0;
//array for randomly generated 4 crystal numbers
var crystalNumbers = [];
//array for randomly generated computer number
var randomNumber = [];

//:::::::::::::::
//:: functions ::
//:::::::::::::::
function startGame() {
	winsCounter = 0;
	lossesCounter = 0;
	sumOfCrystals = 0;
	//debugs startGame()
	
}

//generates random number between 19 and 120
function getRandomNumber(min, max){
	selectedNumber = Math.floor(Math.random()*102)+19;
	randomNumber.push(selectedNumber);

//debugs getRandomNumber function	
	console.log(selectedNumber);
}

//generates 4 random numbers and pushes them into an array 
function generateCrystalNumber(){
	for (var i = 0; i<4; i++){

	crystalNumvar = Math.floor(Math.random()*12) + 1;
	crystalNumbers.push(crystalNumvar);

	}
console.log(crystalNumbers);
}
	


//::::::::::::
// main code
//::::::::::::
//function calls
startGame();
getRandomNumber();
generateCrystalNumber();

//if sumOfCrystals === selectedNumber { wins++; call startGame();
//else losses++call startGame(); call generateCrystalNumber;
// call getRandomNumber}

});