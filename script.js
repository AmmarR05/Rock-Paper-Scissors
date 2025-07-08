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
    if (humanCoice == "rock" && computerChoice =="paper"){
        computerScore++;
        return "You lose! Paper beats Rock."
    }
    else if (humanCoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return "You win! Paper beats Rock."
    }
    else if (humanCoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return "You win! rock beats scissors."
    }
    else if (humanCoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return "You lose! scissors beats Rock."
    }
    else if (humanCoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return "You lose! scissors beats paper."
    }
    else if (humanCoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return "You win! scissors beats paper."
    }
    else if (humanCoice == computerChoice){
        return "its draw."
    }
    else {
        return "plz coice (rock or scissors or paper)"
    }
}
function playGame(){
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i} : `+playRound(getHumanChoice(), getComputerChoice())+`(-Your score: ${humanScore} , -Computer score: ${computerScore})`)
    }
    if(humanScore>computerScore){
        console.log(`you are the wiiner (the total score(${humanScore}) computer score (${computerScore}))`)
    }
    else if(humanScore<computerScore){
        console.log(`you are the lose (the total score : your score is (${humanScore})  computer score (${computerScore}))`)
    }
    else {
        console.log(`the game is draw`)
    }
}
playGame()








