//Computer Choice
function getComputerChoice(x,y) {
 let result= Math.floor(Math.random()*(y-x)+x);

if (result==1) {
    return "Rock"
} else if (result==2) {
    return "Paper"
} else if (result==3) {
    return "Scissors"
}

 return result;
}

//console.log(getComputerChoice(1,4))

//Human Choice
function getHumanChoice() {
   let myresult= prompt("Rock, Paper, Scissors?")
   myresult=myresult.charAt(0).toUpperCase() + myresult.slice(1).toLowerCase();
   return myresult
}

//console.log(getHumanChoice());

//Score Variables
const humanScore=0;
const computerScore=0;

humanScore;
computerScore;

