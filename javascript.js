//will return a random integer
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive
}


//will return choice of comp
function getComputerChoice() {
    let randomNum = getRandomIntInclusive(1, 3);
    if (randomNum === 1) {
        return "Rock";
    }
    else if (randomNum === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    document.querySelector('.playerScore').textContent = `Your Score : 0`;
    document.querySelector('.compScore').textContent = `Computer Score : 0`;
    document.querySelector('.tie').textContent = `Ties : 0`;
    document.querySelector('.secondary').textContent=`Choose your Weapon!`;
    document.querySelector('.compChoice').textContent=`Computer Choice : not selected`;
    document.querySelector('.explain').textContent=``;
    document.querySelector('.reset').style.display='none';
}

let playerScore = 0;
let computerScore = 0;
let ties = 0;

function playRound(playerSelection) {
        if(playerScore<5 && computerScore<5){
       let computerSelection=getComputerChoice().toLowerCase();
       document.querySelector('.compChoice').textContent=`Computer Choice : ${computerSelection}`;
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                computerScore++;
                return "You Lose! Paper beats Rock";
            }
            else if (computerSelection === "scissors") {
                playerScore++;
                return "You Win! Rock beats Scissors";
            }
            else {
                ties++;
                return "It's a tie";
            }
        }
        else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                computerScore++;
                return "You Lose! Scissors beats Paper";
            }
            else if (computerSelection === "rock") {
                playerScore++;
                return "You Win! Paper beats Rock";
            }
            else {
                ties++;
                return "It's a tie";
            }
        }
        else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                computerScore++;
                return "You Lose! Rock beats Scissors";
            }
            else if (computerSelection === "paper") {
                playerScore++;
                return "You Win! Scissors beats Paper";
            }
            else {
                ties++;
                return "It's a tie";
            }
        }
    }
    else{
        return "This game is over! please click on play again!"
    }

    
}
function game() {
   
    let imgs = document.querySelectorAll('img');
    let resultOfGame;
    imgs.forEach(img => img.addEventListener('click', () => {
        if (img.id) {
            
            resultOfGame = playRound(img.id);
            document.querySelector(`#${img.id}`).classList.add('active');
            setTimeout(()=>{
                document.querySelector(`#${img.id}`).classList.remove('active');
            },200);
            document.querySelector('.compChoice').classList.add('action');
            setTimeout(()=>{
                document.querySelector(`.compChoice`).classList.remove('action');
                document.querySelector('.compChoice').textContent=`Computer Choice : not selected`;
            },700);
            document.querySelector('.playerScore').textContent = `Your Score : ${playerScore}`;
            document.querySelector('.compScore').textContent = `Computer Score : ${computerScore}`;
            document.querySelector('.tie').textContent = `Ties : ${ties}`;

            let result=document.querySelector('.explain');
            let para=document.createElement('p');
            let newText=document.createTextNode(resultOfGame);
            para.appendChild(newText);
            result.appendChild(para);
            
            if(playerScore===5){
                document.querySelector('.secondary').textContent=`Congratulations! You Won five times!!!`;
                document.querySelector('.reset').style.display='flex';
                document.querySelector('.main').style.height='650px';
            }
            if(computerScore===5){
                document.querySelector('.secondary').textContent=`Sorry! Computer Won five times!!!`;
                document.querySelector('.reset').style.display='flex';
                document.querySelector('.main').style.height='650px';
            }
        }
    }));




    // if(playerScore>computerScore){
    //     console.log("You Won!");
    // }
    // else if(computerScore>playerScore){
    //     console.log("You Lost!");
    // }
    // else{
    //     console.log("It's a tie!");
    // }
    
}
game();