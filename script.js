
function playerPlay () {
    let playerPreChoice = prompt("Please select your weapon: Scissors, Paper, or Stone!");
    let playerChoice = playerPreChoice.toLowerCase();
    return playerChoice;
}


function computerPlay () {
    let spsChoice = ["scissors", "paper", "stone"];
    let computerChoice = (spsChoice[Math.floor(Math.random()*spsChoice.length)]);
    alert(computerChoice);
    return computerChoice;
}


function playRound (playerSelection, computerSelection) {
    

    if (computerSelection === "scissors" && playerSelection === "paper") {

        alert("You lose, scissors beats paper!");

    } else if (computerSelection === "paper" && playerSelection === "scissors") {

        alert("You win, scissors beats paper!");

    } else if (computerSelection === "scissors" && playerSelection === "stone") {

        alert("You win, stone beats scissors!");

    } else if (computerSelection === "stone" && playerSelection === "scissors") {

        alert("You lose, stone beats scissors!");

    } else if (computerSelection === "paper" && playerSelection === "stone") {

        alert("You lose, paper beats stone!");

    } else if (computerSelection === "stone" && playerSelection === "paper") {

        alert("You win, paper beats stone!");
        
    } else {
        alert("It's a tie!")
    } 

}


let computerScore;
let playerScore;



playRound(playerPlay(),computerPlay());





/* if (playerSelection !== "scissors" || playerSelection !== "paper" || playerSelection !== "stone") {
    prompt("Please enter only one of these three weapons","Scissors, Paper or Stone")
} */