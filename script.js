function getComputerChoice(){
    let randomChoiceOfComputer = Math.floor(Math.random() * 3 + 1);
    let TheChoice=null;
    if(randomChoiceOfComputer==1){
        TheChoice = "rock"
    }
   else if (randomChoiceOfComputer == 2) {
        TheChoice = "paper"
    }
   else if (randomChoiceOfComputer == 3) {
        TheChoice = "scissors"
    }
    return TheChoice;
}
function getHumanChoice(){
    let humanCoice= prompt("enter ur choice : ")
    humanCoice = humanCoice.toLowerCase();
    return humanCoice;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanCoice, computerChoice){
    if(humanCoice==computerChoice){
        return `its draw!  ${humanCoice} beats ${computerChoice}`;
    }

    else if (humanCoice === "paper" && computerChoice === "rock" || humanCoice === "rock" && computerChoice === "scissors" || humanCoice === "scissors" && computerChoice === "paper"  ) {
        humanScore++;
        return `You win! ${humanCoice} beats ${computerChoice}.`
    }
    else {
        computerScore++;
        return `You lose! ${humanCoice} beats ${computerChoice}.`
    }

}
function playGame(){
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i} : `+playRound(getHumanChoice(), getComputerChoice())+`(-Your score: ${humanScore} , -Computer score: ${computerScore})`)
    }
    if(humanScore>computerScore){
        console.log(`you are the wiiner (the total score : your score is (${humanScore})  computer score (${computerScore}))`)
    }
    else if(humanScore<computerScore){
        console.log(`you are the lose (the total score : your score is (${humanScore})  computer score (${computerScore}))`)
    }
    else {
        console.log(`the game is draw`)
    }
}
playGame()








