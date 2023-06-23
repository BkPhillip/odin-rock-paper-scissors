const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    const gameResults = playRound(playerSelection, computerSelection);
    game(gameResults);
  })
})

const gameRounds = 5;
let currentRound = 0;
let playerWins = 0;
let computerWins = 0;

function game(gameResults) {
  
  //Check if return string contains the word win or lose
  if (gameResults.split(" ").includes("Win!")) {
    playerWins += 1;
    currentRound += 1;
  } else if (gameResults.split(" ").includes("Lose!")) {
    computerWins += 1;
    currentRound += 1;
  } 

  // Update results display on Webpage
  const resultsDisplay = document.querySelector('#results');
  resultsDisplay.setAttribute('style', 'white-space: pre');

  //Display  final results
  if (playerWins >= 5 || computerWins >= 5) {
    if ( playerWins === 5) {
      resultsDisplay.textContent = "You win! \r\nFinal Score: Player " + playerWins + " | Computer " + computerWins;
    } else {
      resultsDisplay.textContent = "You Lose! \r\nFinal Score: Player " + playerWins + " | Computer " + computerWins;
    }

    buttons.forEach(button => button.remove());  // Remove buttons
    

  } else {
    resultsDisplay.textContent = `${gameResults} \r\nPlayer: ${playerWins}  Computer: ${computerWins}`;
  }
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
