const container = document.querySelector('#container');
const results = document.querySelector('#results');
const para = document.createElement('p');


const scissorsBtn = document.querySelector('#scissors');
const paperBtn = document.querySelector('#paper');
const stoneBtn = document.querySelector('#stone');


scissorsBtn.addEventListener('click', () => playRound("scissors",computerPlay()));
paperBtn.addEventListener('click',() => playRound("paper",computerPlay()));
stoneBtn.addEventListener('click', () => playRound("stone",computerPlay()));



function computerPlay () {
    let spsChoice = ["scissors", "paper", "stone"];
    let computerChoice = (spsChoice[Math.floor(Math.random()*spsChoice.length)]);
    console.log(computerChoice);
    return computerChoice;
}

let compCumScore = 0;
let playerCumScore = 0;

function playRound (playerSelection, computerSelection) {
    if (computerSelection === "scissors" && playerSelection === "paper") {
        para.textContent="The Machine gains 1 point, and you gain nothing.";
        container.appendChild(para);
        compCumScore += 1;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        para.textContent="You gain 1 point, and the Machine gains nothing.";
        container.appendChild(para);
        playerCumScore += 1;
    } else if (computerSelection === "scissors" && playerSelection === "stone") {
        para.textContent="You gain 1 point, and the Machine gains nothing.";
        container.appendChild(para);
        playerCumScore += 1;
    } else if (computerSelection === "stone" && playerSelection === "scissors") {
        para.textContent="The Machine gains 1 point, and you gain nothing.";
        container.appendChild(para);
        compCumScore += 1;
    } else if (computerSelection === "paper" && playerSelection === "stone") {
        para.textContent="The Machine gains 1 point, and you gain nothing.";
        container.appendChild(para);
        compCumScore += 1;
    } else if (computerSelection === "stone" && playerSelection === "paper") {
        para.textContent="You gain 1 point, and the Machine gains nothing.";
        container.appendChild(para);
        playerCumScore += 1;
    } else {
        para.textContent="It's a tie! No one gets a point! Tough luck.";
        container.appendChild(para);
    } 
    console.log(compCumScore, playerCumScore);
    results.textContent=`The Machine: ${compCumScore} and You: ${playerCumScore}`;

    if (compCumScore === 5) {
        alert("Sorry, you lost to the Machine!");
        return;
    } else if (playerCumScore === 5) {
        alert("Congratulations, you beat the Machine!");
        return;
    }
}

