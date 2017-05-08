//GLOBAL VARIABLES

//GRAB HTML ELEMENTS

var winsDisplay = $('#winsDisplay')[0];
console.log(winsDisplay);

var lossesDisplay = $('#lossesDisplay')[0];
console.log(lossesDisplay);

var randomNumberDisplay = $('#randomNumberDisplay')[0];

var sumOfCrystals = $('#sumOfCrystals')[0];
console.log(sumOfCrystals);

var crystalImages = $('.crystalImg');
console.log(crystalImages);

var randomNumber = randomNumberGenerator(19,120);
var winsCounter = 0;
var lossesCounter = 0;
var userScore = 0;

//-----------------------------------------------
//FUNCTIONS 

//generates random number
function randomNumberGenerator(min, max){
   return Math.floor(Math.random()* max + min) 
}

function crystalImagesScores(){
    //loops through all the elements that the user will click on. 
for (var i =0; i<crystalImages.length; i++){
    //invoke the randomNumberGenerator function with min1-max12. 
    crystalImages[i].value = randomNumberGenerator(1,12)
    }
}

//print all values to the screen when the game starts
function startGame(){
    $(winsDisplay).html(winsCounter);
    $(lossesDisplay).html(lossesCounter);
    $(sumOfCrystals).html(userScore);
    $(randomNumberDisplay).html(randomNumber);
    crystalImagesScores();
}

function winLoseLogic(){
    if(userScore === randomNumber){
        alert("WINNERRRRRRRRR");
        winsCounter++;
        $(winsDisplay).html(winsCounter);
        resetGame();

    }else if (userScore > randomNumber) {
        alert("LOOSERRRRRR");
        lossesCounter++;
        $(lossesDisplay).html(lossesCounter);
        resetGame();
    }
}

function resetGame(){
userScore = 0;
randomNumber = randomNumberGenerator(19,120);
crystalImagesScores();
$(randomNumberDisplay).html(randomNumber);
$(sumOfCrystals).html(userScore);



}

//---------------------------------------------

startGame();
//create event listener for click 
$(crystalImages).on('click', function(event){
    //create local variable, set it equal to the value of the event listener.
    var crystalsValue = this.value;
    //calculate userScore by using value assigned  to each image
    userScore = userScore + crystalsValue;
    //display score on screen 
    $(sumOfCrystals).html(userScore);
    winLoseLogic();
})

