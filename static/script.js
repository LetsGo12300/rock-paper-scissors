document.addEventListener('DOMContentLoaded', function(){
    let tally = [0, 0]; // [player tally, computer tally]

    for (let i = 0; i < 5; i++){
        game(tally);
    }
    console.log(tally);
});

function game(currentTally){
    let player = prompt("Please enter player choice:");
    let computer = computerPlay();
    let gameResult = playRound(player,computer);
    currentTally[0]+=gameResult[0]; //update player tally
    currentTally[1]+=gameResult[1]; //update computer tally
    console.log(gameResult[2]);
}

function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    let playerSelected = capitalizeFirstLetter(playerSelection);
    let computerSelected = capitalizeFirstLetter(computerSelection);

    if (playerSelected === computerSelected){
        return [0,0,"Draw."]
    }
    else if (playerSelected === "Rock"){
        if (computerSelected === "Scissors")
            return [1,0,`You win! ${playerSelected} beats ${computerSelected}`]
        else return [0,1,`You lose! ${computerSelected} beats ${playerSelected}`]
    } 
    else if (playerSelected === "Paper"){
        if (computerSelected === "Rock")
            return [1,0,`You win! ${playerSelected} beats ${computerSelected}`]
        else return [0,1,`You lose! ${computerSelected} beats ${playerSelected}`]
    }
    else if (playerSelected === "Scissors"){
        if (computerSelected === "Paper")
            return [1,0,`You win! ${playerSelected} beats ${computerSelected}`]
        else return [0,1,`You lose! ${computerSelected} beats ${playerSelected}`]
    }
}

function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}