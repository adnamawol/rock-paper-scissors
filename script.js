const container = document.querySelector('#container');
const results = document.querySelector('#results');
const playerCumResult = document.querySelector('#player-result');
const compCumResult = document.querySelector('#comp-result');
const player = document.querySelector('#player');
const comp = document.querySelector('#comp')
const scissorsBtn = document.querySelector('#scissors');
const paperBtn = document.querySelector('#paper');
const stoneBtn = document.querySelector('#stone');


const para = document.createElement('p');
const playerResult = document.createElement('p');
const compResult = document.querySelector('p');
const resultPlayerPic = document.createElement('img');
const resultCompPic = document.createElement('img');


//play a round of RPS

let compCumScore = 0;
let playerCumScore = 0;

function computerPlay () {
    let spsChoice = ["scissors", "paper", "stone"];
    let computerChoice = (spsChoice[Math.floor(Math.random()*spsChoice.length)]);
    console.log(computerChoice);
    return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    if (computerSelection === "scissors" && playerSelection === "paper") {
        para.textContent="The Machine gains 1 point, and you gain nothing.";
        container.appendChild(para);

        resultPlayerPic.src='./photos/hand.png';
        player.appendChild(resultPlayerPic); 
        resultCompPic.src='./photos/victory.png';
        comp.appendChild(resultCompPic);

        compCumScore += 1;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        para.textContent="You gain 1 point, and the Machine gains nothing.";
        container.appendChild(para);

        resultPlayerPic.src='./photos/victory.png';
        player.appendChild(resultPlayerPic);
        resultCompPic.src='./photos/hand.png';
        comp.appendChild(resultCompPic);

        playerCumScore += 1;
    } else if (computerSelection === "scissors" && playerSelection === "stone") {
        para.textContent="You gain 1 point, and the Machine gains nothing.";
        container.appendChild(para);

        resultPlayerPic.src='./photos/rock.png';
        player.appendChild(resultPlayerPic);
        resultCompPic.src='./photos/victory.png';
        comp.appendChild(resultCompPic);

        playerCumScore += 1;
    } else if (computerSelection === "stone" && playerSelection === "scissors") {
        para.textContent="The Machine gains 1 point, and you gain nothing.";
        container.appendChild(para);

        resultPlayerPic.src='./photos/victory.png';
        player.appendChild(resultPlayerPic);
        resultCompPic.src='./photos/rock.png';
        comp.appendChild(resultCompPic);

        compCumScore += 1;
    } else if (computerSelection === "paper" && playerSelection === "stone") {
        para.textContent="The Machine gains 1 point, and you gain nothing.";
        container.appendChild(para);

        resultPlayerPic.src='./photos/rock.png';
        player.appendChild(resultPlayerPic);
        resultCompPic.src='./photos/hand.png';
        comp.appendChild(resultCompPic);

        compCumScore += 1;
    } else if (computerSelection === "stone" && playerSelection === "paper") {
        para.textContent="You gain 1 point, and the Machine gains nothing.";
        container.appendChild(para);

        resultPlayerPic.src='./photos/victory.png';
        player.appendChild(resultPlayerPic);
        resultCompPic.src='./photos/rock.png';
        comp.appendChild(resultCompPic);

        playerCumScore += 1;
    } else {
        para.textContent="It's a tie! No one gets a point! Tough luck.";
        container.appendChild(para);

        resultPlayerPic.src='./photos/dead.png';
        player.appendChild(resultPlayerPic);
        resultCompPic.src='./photos/dead.png';
        comp.appendChild(resultCompPic);

    } 

    if (compCumScore === 5) {
        alert("Sorry, you lost to the Machine!");
        reset();
        return;
        
    } else if (playerCumScore === 5) {
        alert("Congratulations, you beat the Machine!");
        reset();
        return;
    }

    playerCumResult.textContent=`You: ${playerCumScore}`;
    compCumResult.textContent=`The Machine: ${compCumScore}`;

}


scissorsBtn.addEventListener('click', () => playRound("scissors",computerPlay()));
paperBtn.addEventListener('click',() => playRound("paper",computerPlay()));
stoneBtn.addEventListener('click', () => playRound("stone",computerPlay()));


//restart
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', () => reset())

function reset () {
    compCumScore = 0;
    playerCumScore = 0;
    playerCumResult.textContent=`You: ${playerCumScore}`;
    compCumResult.textContent=`The Machine: ${compCumScore}`;
    player.removeChild(resultPlayerPic);
    comp.removeChild(resultCompPic);
    container.removeChild(para);
}

//audio on mouserover
const audioScissors = document.querySelector('.scissors-audio');
const audioPaper = document.querySelector('.paper-audio');
const audioStone = document.querySelector('.stone-audio')

scissorsBtn.addEventListener('mouseover', () => {
    audioScissors.play();
    audioScissors.currentTime = 0;
})
paperBtn.addEventListener('mouseover', () => {
    audioPaper.play();
    audioPaper.currentTime = 0;
})
stoneBtn.addEventListener('mouseover', () => {
    audioStone.play();
    audioStone.currentTime = 0;
} )

