

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
      return 'rock'
    } else if (choice === 1) {
      return 'paper'
    } else {
      return 'scissors'
    }
  }

  function settleMatch(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "You lose! Paper beats Rock."
        } else {
            return "You win! Rock beats Scissors."
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return "You lose! Scissors beats Paper."
        } else {
            return "You win! Paper beats Rock."
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "You lose! Rock beats Scissors."
        } else {
            return "You win! Scissors beats Paper."
        }
    }
}

function game(){
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick your play!");
        console.log(settleMatch(playerSelection, getComputerChoice()));
    }
}

game();