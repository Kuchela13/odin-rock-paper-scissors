//GAME START
alert(`Welcome to rock, paper, scissors by kuchela13!
The game will consist of 5 rounds. Let's go!`)

//GAME CODE:
//Computer Choice
function getComputerChoice(x, y) {
    let result = Math.floor(Math.random() * (y - x) + x);
    if (result === 1) {
        return "rock";
    } else if (result === 2) {
        return "paper";
    } else if (result === 3) {
        return "scissors";
    }
    return "";
}

//Human Choice
function getHumanChoice() {
    let myresult = prompt("Rock, Paper, Scissors?");
    myresult = myresult.toLowerCase();
    if (myresult !== "rock" && myresult !== "paper" && myresult !== "scissors") {
        alert("Invalid option, please try again.");
        return getHumanChoice();
    }
    return myresult;
}

//Entire Game
function playGame() {

    //Score Variables
    let humanScore = 0;
    let computerScore = 0;

    //Single Round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose! Paper beats rock.");
                computerScore++;
            } else if (computerChoice === "scissors") {
                console.log("You win! Rock beats scissors.");
                humanScore++;
            } else {     //if computer also chooses rock;
                console.log("Draw! Both players chose rock.");
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats rock.");
                humanScore++;
            } else if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats paper.");
                computerScore++;
            } else {     //if computer also chooses paper;
                console.log("Draw! Both players chose paper.")
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats scissors.");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win! Scissors beats paper");
                humanScore++;
            } else {     //if computer also chooses scissors;
                console.log("Draw! Both players chose scissors.")
            }
        }
        return;
    }

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(1, 4);
        playRound(humanSelection, computerSelection);
        console.log(`Your score= ${humanScore}. Computer score= ${computerScore}`)
    }
    if (humanScore > computerScore) {
        console.log(`You win! Final score= ${humanScore}:${computerScore}`)
    }
    else if (computerScore > humanScore) {
        console.log(`You lose! Final score= ${computerScore}:${humanScore}`)
    }
    else if (computerScore === humanScore) {
        console.log(`Game ends in a draw! ${humanScore}=${computerScore}`)
    }
}

playGame();