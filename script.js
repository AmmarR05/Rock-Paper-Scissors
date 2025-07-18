function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1)
        return "rock";
    if (random === 2)
        return "paper";
    return "scissors";
}

let btuR = document.querySelector(".bt1");
let btuP = document.querySelector(".bt2");
let btuS = document.querySelector(".bt3");
btuR.addEventListener("click", () => playGame("rock"));
btuP.addEventListener("click", () => playGame("paper"));
btuS.addEventListener("click", () => playGame("scissors"));


let humanS = 0;
let computetS = 0;
let p = document.querySelector('p');
let div = document.querySelector(".div1")
function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            p.textContent = `It's a draw! ${humanChoice} equals ${computerChoice}.`;
            div.appendChild(p);
        } else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper") {
            computetS++;
            p.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            div.appendChild(p);
        }

        else {
            p.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;;
            div.appendChild(p);


        }
    

}

let numOFRound = 5;
let numOfClick = 0;

let rem = document.querySelector(".reset-btn")
rem.addEventListener("click", () => { numOfClick = 0, p.textContent ="Play smart! 5 rounds of Rock, Paper, Scissors ahead."}) 

function playGame(choice) {
    
    if (numOFRound > numOfClick){
        numOfClick++;
        playRound(choice, getComputerChoice());
    }
    else {
        if(humanS>computetS)
            p.textContent = `you win. the finle score (your score ${humanS} , coumputer score ${computetS}) `;
        else if(computetS>humanS)
            p.textContent = `you lose. the finle score (your score ${humanS} , coumputer score ${computetS}) `;
        else 
            p.textContent = `its draw . the finle score (your score ${humanS} , coumputer score ${computetS}) `;
    }

}
