function getComputerChoice() {
  const gameArray = ['rock', 'paper', 'scissors'];
  const randomElement = gameArray[Math.floor(Math.random() * gameArray.length)];
  return randomElement;
}