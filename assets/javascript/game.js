var startGame;
var wins = 0;
var gameWin;
var losses = 0;
var gameLose;
var totalScore = 0; 

var randNumber = randomNumber();
console.log ("var randomGem " + randNumber);

var redGem = randRedGem();
console.log ("var redGem " + redGem);

var blueGem = randBlueGem();
console.log ("var blueGem " + blueGem);

var yellowGem = randYellowGem();
console.log ("var yellowGem " + yellowGem);

var greenGem = randGreenGem();
console.log ("var greenGem " + greenGem);


function randRedGem(){
    return Math.floor(Math.random() * 12) + 1;
    
};
function randBlueGem(){
    return Math.floor(Math.random() * 12) + 1;
    

};
function randYellowGem(){
    return Math.floor(Math.random() * 12) + 1;
   

};
function randGreenGem(){
    return Math.floor(Math.random() * 12) + 1;


};
function randomNumber(){
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    
};
function gameWin(){
    alert("You Win!");
    wins++;
    randNumber = randomNumber();
    $("#randomNumber").text(randNumber);
    redGem = randRedGem();
    blueGem = randBlueGem();
    yellowGem = randYellowGem();
    greenGem = randGreenGem();
    totalScore = 0;
    $("#totalScore").text(totalScore)

}
function gameLose(){
    alert("You Lose.");
    losses++;
    randNumber = randomNumber();
    $("#randomNumber").text(randNumber);
    redGem = randRedGem();
    blueGem = randBlueGem();
    yellowGem = randYellowGem();
    greenGem = randGreenGem();
    totalScore = 0;
    $("#totalScore").text(totalScore)

}

//get the game ready
$(window).on("load", function() {
    randomNumber();
    console.log(randNumber);
    $("#randomNumber").text(randNumber);
    
    $("#wins").text(wins);
    console.log(wins);

    $("#losses").text(losses);
    console.log(losses);

    randRedGem();
    console.log(redGem);

    randBlueGem();
    console.log(blueGem);

    randYellowGem();
    console.log(yellowGem);

    randGreenGem();
    console.log(greenGem);

    console.log("test " + (parseInt(redGem) + parseInt(blueGem)));

    $("#totalScore").text(totalScore)
});

$(document).ready(function(){
    console.log("ready!");

    $("#redGem").click(function(event){
        totalScore = (parseInt(totalScore) + parseInt(redGem)); 
        $("#totalScore").html(totalScore);
        if (totalScore === randNumber){
            gameWin();
          
        }    
        else if (totalScore > randNumber){
            gameLose();
        }    
        

    });

    
    $("#blueGem").click(function(event){
         totalScore = (parseInt(totalScore) + parseInt(blueGem)); 
        $("#totalScore").html(totalScore);
        if (totalScore === randNumber){
            gameWin();
          
        }    
        else if (totalScore > randNumber){
            gameLose();
        }    
        


    });

    
    $("#yellowGem").click(function(event){
         totalScore = (parseInt(totalScore) + parseInt(yellowGem)); 
        $("#totalScore").html(totalScore);
        if (totalScore === randNumber){
            gameWin();
          
        }    
        else if (totalScore > randNumber){
            gameLose();
        }    
        

    });

    
    $("#greenGem").click(function(event){
         totalScore = (parseInt(totalScore) + parseInt(greenGem)); 
        $("#totalScore").html(totalScore);
        if (totalScore === randNumber){
            gameWin();
          
        }    
        else if (totalScore > randNumber){
            gameLose();
        }    
        

    });


});