function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
    // The maximum is inclusive and the minimum is inclusive
  }
function getComputerChoice(){
    let randomNum=getRandomIntInclusive(1,3);
    if(randomNum===1){
        return "Rock";
    }
    else if(randomNum===2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
let playerScore=0;
let computerScore=0;
function playRound(playerSelection, computerSelection) {
    if(playerSelection==="rock"){
        if(computerSelection==="paper"){
            computerScore++;
            return "You Lose! Paper beats Rock";
        }
        else if(computerSelection==="scissors"){
            playerScore++;
            return "You Win! Rock beats Scissors";
        }
        else{
            return "It's a tie";
        }
    }
    else if(playerSelection==="paper"){
        if(computerSelection==="scissors"){
            computerScore++;
            return "You Lose! Scissors beats Paper";
        }
        else if(computerSelection==="rock"){
            playerScore++;
            return "You Win! Paper beats Rock";
        }
        else{
            return "It's a tie";
        }
    }
    else if(playerSelection==="scissors"){
        if(computerSelection==="rock"){
            computerScore++;
            return "You Lose! Rock beats Scissors";
        }
        else if(computerSelection==="paper"){
            playerScore++;
            return "You Win! Scissors beats Paper";
        }
        else{
            return "It's a tie";
        }
    }
    else{
        return "not a valid input, please try again!";
    }
}
function game(){
    for(let i=0;i<5;i++){
        let playerSelection=prompt("Enter your selection here :").toLowerCase();
        let computerSelection=getComputerChoice().toLowerCase();
        let resultOfGame=playRound(playerSelection,computerSelection);
        console.log(resultOfGame);
    }
    if(playerScore>computerScore){
        console.log("You Won!");
    }
    else if(computerScore>playerScore){
        console.log("You Lost!");
    }
    else{
        console.log("It's a tie!");
    }
}
game();