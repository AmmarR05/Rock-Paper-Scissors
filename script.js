function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1)
        return "rock";
    if (random === 2)
        return "paper";
    return "scissors";
}


function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
        humanChoice = humanChoice.toLowerCase();
        if (["rock", "paper", "scissors"].includes(humanChoice)) {
            return humanChoice;
        }
        alert("Invalid input. Please choose only: rock, paper, or scissors.");
    }
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a draw! ${humanChoice} equals ${computerChoice}.`;
    } else if (
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}


function playGame() {
    humanScore = 0;
    computerScore = 0;
    let numberOfRound;
        while(true){
             numberOfRound = +prompt("Please enter how many rounds you'd like to play.")
            if (numberOfRound < 0 || isNaN(numberOfRound)) {
                alert("Oops! Thats not a valid number. Try again with a positive number.")
            }
            else {
                break;
            }
        }
    let i = 1 ;
    while(i <= numberOfRound) {
        console.log(`Round ${i}: ` + playRound(getHumanChoice(), getComputerChoice()) + ` (Your score: ${humanScore}, Computer score: ${computerScore})`);
        if (humanScore === Math.floor((numberOfRound / 2)) + 1 || computerScore === Math.floor((numberOfRound / 2)) + 1) {
            break;
        }
        i++;
    }
    if (humanScore > computerScore) {
        console.log(`You are the winner! Final score: You (${humanScore}) - Computer (${computerScore})`);
    } else if (humanScore < computerScore) {
        console.log(`You lost! Final score: You (${humanScore}) - Computer (${computerScore})`);
    } else {
        console.log(`The game is a draw. Final score: You (${humanScore}) - Computer (${computerScore})`);
    }
    
}

playGame();
