/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his overall score. After that, it's the next player's turn
- The first player to reach 100 points on overall score wins the game

*/
var scores, roundScore, activePlayer;
var gamePlaying = true;

// We initiate the game with the basic variables
init();

// Clicking the button to roll the dice
document.querySelector(".btn-roll").addEventListener("click", function(){
    if(gamePlaying) {
        // 1. Get the random number
        var dice = Math.floor((Math.random() * 6)) + 1;


        // 2. Display the result
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";


        // 3. Update the roundScore, but only if that's not 1
        if(dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;

        } else {
            // Next player
            nextPlayer()
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function(){
    if(gamePlaying){
        // Add currentScore to globalScore
        scores[activePlayer] += roundScore;

        // Update the UI to show the globalScore
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if(scores[activePlayer] >= 100){
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        } else {
            nextPlayer()
        }
    }
})

function nextPlayer() {
    //Next player with ternary operator
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

    // document.querySelector("#current-" + activePlayer).textContent = dice;
    document.querySelector(".dice").style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.add("active");;
}

// Clicking for instructions
document.querySelector(".instructions").addEventListener("click", function(){
        document.querySelector(".modal").classList.add("show");
        document.querySelector(".close").addEventListener("click", function(){
            document.querySelector(".modal").classList.remove("show");
    });
});
