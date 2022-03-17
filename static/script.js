document.addEventListener('DOMContentLoaded', function(){
    let tally = [0, 0]; // [player tally, computer tally]
    let tryButton = document.getElementById('try-again');

    document.querySelectorAll(".btn-plr").forEach(item => {
        item.addEventListener("click",() => {
            resetButtons();
            let player = item.id;
            let computer = computerPlay();
            let gameResult = playRound(player,computer);
            tally[0]+=gameResult[0]; //update player tally
            tally[1]+=gameResult[1]; //update computer tally

            document.getElementById('player-count').textContent = tally[0];
            document.getElementById('computer-count').textContent = tally[1];
            document.getElementById('result').textContent = gameResult[2];

            if (tally[0]===5){ // Player wins
                document.getElementById('result').textContent = 'YOU WIN!';
                document.getElementById('result').className = 'winner';
                tryButton.style.visibility = 'visible';
                disableButtons();
                resetButtons();
            }

            if (tally[1]===5){ // Player wins
                document.getElementById('result').textContent = 'YOU LOSE!';
                document.getElementById('result').className = 'loser';
                tryButton.style.visibility = 'visible';
                disableButtons();
                resetButtons();
            }
        });
    });

    tryButton.addEventListener("click", () => {
        tally = [0, 0]; 
        resetScore();
        tryButton.style.visibility = 'hidden';
    });
});

function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    let playerSelected = capitalizeFirstLetter(playerSelection.slice(0,-2));
    let computerSelected = capitalizeFirstLetter(computerSelection);
    highlightButton(computerSelection);

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

function highlightButton(selectedButton){
    let buttonToHighlight = document.getElementById(`${selectedButton}-c`);
    buttonToHighlight.classList.remove('btn-secondary');
    buttonToHighlight.classList.add('btn-warning');
}

function resetButtons(){
    document.querySelectorAll(".btn-comp").forEach(item => {
        item.classList.remove('btn-warning');
        item.classList.add('btn-secondary');
    });
}

function disableButtons(){
    document.querySelectorAll(".btn-plr").forEach(item => {
        item.disabled = true;
    });
}

function enableButtons(){
    document.querySelectorAll(".btn-plr").forEach(item => {
        item.disabled = false;
    });
}


function resetScore(){
    document.getElementById('player-count').textContent = '0';
    document.getElementById('computer-count').textContent = '0';
    document.getElementById('result').textContent ='';
    resetButtons();
    enableButtons();
    document.getElementById('result').className = '';
}