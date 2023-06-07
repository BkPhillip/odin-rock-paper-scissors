game();

function game() {
  const gameRounds = 5;
  let currentRound = 0;
  let playerWins = 0;
  let computerWins = 0;
  
  // Play 5 rounds of game. Ties are not counted as rounds. Game will not end if player or computer reach 3 wins despite game results being determined
  do {
    const playerSelection = prompt("Rock, paper, or scissors? Which do you choose?");
    const computerSelection = getComputerChoice();
    
    const gameResults = playRound(playerSelection, computerSelection);
    console.log(gameResults);
    //Check if return string contains the word win or lose
    if (gameResults.split(" ").includes("Win!")) {
      playerWins += 1;
      currentRound += 1;
    } else if (gameResults.split(" ").includes("Lose!")) {
      computerWins += 1;
      currentRound += 1;
    } 
    console.log("Player: " + playerWins + " Computer: " + computerWins)
  } while (currentRound < gameRounds);
  //Display  final results
  if (playerWins > computerWins) {
    console.log("You Win!");
  } else {
    console.log("You Lose!")
  }
  console.log("Final Score: Player " + playerWins + " | Computer " + computerWins);
}

function getComputerChoice() {
  const gameArray = ['rock', 'paper', 'scissors'];
  const randomElement = gameArray[Math.floor(Math.random() * gameArray.length)];
  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  //Change user entered text to lowercase for comparison
  playerSelection = playerSelection.toLowerCase();

  const upperPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  const upperComputerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
  let playerWin = false;
  
  //Check for tie
  if (playerSelection === computerSelection) {
    return "Tie. Both players choose " + upperPlayerSelection;
  }
  
  //Check for player win
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        playerWin = true;
      } 
      break;
    case "paper":
      if (computerSelection === "rock") {
        playerWin = true;
      }
      break;
    case "scissors":
      if (computerSelection === "paper") {
        playerWin = true;
      }
      break;
  }

  if (playerWin) {
    return "You Win! " + upperPlayerSelection + " beats " + upperComputerSelection;
  } else {
    return "You Lose! " + upperComputerSelection + " beats " + upperPlayerSelection;
  }
}
