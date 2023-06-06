function getComputerChoice() {
  const gameArray = ['rock', 'paper', 'scissors'];
  const randomElement = gameArray[Math.floor(Math.random() * gameArray.length)];
  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  //First check if the two selections are identical to check for tie
  //If selections not identical, then compare the players selection with the computer selection in switch case
  const upperPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  const upperComputerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
  let playerWin = false;

  if (playerSelection === computerSelection) {
    return "Tie. Both players choose " + upperPlayerSelection;
  }
  
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        playerWin = true;
        break;
      } 
      break;
    case "paper":
      if (computerSelection === "rock") {
        playerWin = true;
        break;
      }
      break;
    case "scissors":
      if (computerSelection === "paper") {
        playerWin = true;
        break;
      }
      break;
  }

  if (playerWin) {
    return "You Win! " + upperPlayerSelection + " beats " + upperComputerSelection;
  } else {
    return "You Lose! " + upperComputerSelection + " beats " + upperPlayerSelection;
  }
}
