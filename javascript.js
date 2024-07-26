//Computer Choice
function getComputerChoice(x,y) {
 let result= Math.floor(Math.random()*(y-x)+x);
if (result===1) {
    return "rock";
} else if (result===2) {
    return "paper";
} else if (result===3) {
    return "scissors";
}
 return "";
}

//console.log(getComputerChoice(1,4))

//Human Choice
function getHumanChoice() {
   let myresult= prompt("Rock, Paper, Scissors?");
   myresult=myresult.toLowerCase();
   return myresult;
}

//console.log(getHumanChoice());


//Score Variables
let humanScore=0;
let computerScore=0;

humanScore;
computerScore;


//Single Round
function playRound(humanChoice, computerChoice) {
        if (humanChoice==="rock") {
            if (computerChoice==="paper") {
                console.log("You lose! Paper beats rock.");
                computerScore++;
            } else if (computerChoice==="scissors") {
                console.log("You win! Rock beats scissors.");
                humanScore++;
            } else {     //if computer also chooses rock;
                console.log("Draw!");
            }
        } else if (humanChoice==="paper") {
            if (computerChoice==="rock") {
                console.log("You win! Paper beats rock.");
                humanScore++;
            } else if (computerChoice==="scissors") {
                console.log("You lose! Scissors beats paper.");
                computerScore++;
            } else {     //if computer also chooses paper;
                console.log("Draw!")
            }
        } else if (humanChoice==="scissors") {
            if (computerChoice==="rock") {
                console.log("You lose! Rock beats scissors.");
                computerScore++;
            } else if (computerChoice==="paper") {
                console.log("You win! Scissors beats paper");
                humanScore++;
            } else {     //if computer also chooses scissors;
                console.log("Draw!")
            }
        }
        return;
        } 
    

    const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice(1,4);

playRound(humanSelection, computerSelection);
console.log(computerSelection)