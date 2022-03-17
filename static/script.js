document.addEventListener('DOMContentLoaded', function(){
    let tally = [0, 0]; // [player tally, computer tally]

    document.querySelectorAll(".btn").forEach(item => {
        item.addEventListener("click",()=>{
            let player = item.id;
            let computer = computerPlay();
            let gameResult = playRound(player,computer);
            tally[0]+=gameResult[0]; //update player tally
            tally[1]+=gameResult[1]; //update computer tally

            document.getElementById('player-count').textContent = tally[0];
            document.getElementById('computer-count').textContent = tally[1];
            document.getElementById('result').textContent = gameResult[2];

            if (tally[0]===5){ // Player wins
                document.getElementById('result').textContent = 'You win! Player wins.';
                document.getElementById('result').className = 'winner';
            }

            if (tally[1]===5){ // Player wins
                document.getElementById('result').textContent = 'You lose! Computer wins.';
                document.getElementById('result').className = 'loser';
            }
        });
    });
});

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