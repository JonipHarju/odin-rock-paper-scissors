// call the dom elements to display the score
const winnerPlayer = document.querySelector("#playerWins");
const winnerComputer = document.querySelector("#computerWins");
const ties = document.querySelector("#ties");
// const winnerMessage = document.querySelector("#winnerMessage");

// define the variables when the game ends.
let playerWinCount = 0;
let computerWinCount = 0;

// defining the array where the computer can draw their weapon
const options = ["rock", "paper", "scissors"];

//player makes the choice what weapon to wield here, then we run the game with playround() and after that check the score with score()

// player choice  = rock
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  score();
});

//player choice = paper
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  score();
});

//player choice = scissors
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  score();
});

// options.forEach(element => {
//   document.querySelector(`#${element}`).addEventListener("click", () => {
//     playRound(element, getComputerChoice());
//     score();
// });

// here we generate the computer's weapon of choice
function getComputerChoice() {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}
// here we play the round and compare players and computers weapons and and also add points to them if they win.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    ties.textContent += " ⚔️ ";
  } else if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    winnerPlayer.textContent += " 💗 ";
    playerWinCount += 1;
  } else {
    computerWinCount += 1;
    winnerComputer.textContent += " 💀 ";
  }
}
// here we check if the player or computer win count === 5 and if it does send a alert message that they have won the game.
function score() {
  if (playerWinCount === 5) {
    alert("You have won and overthrown the evil super computer!");
    reset();
  } else if (computerWinCount === 5) {
    alert("The computer has bested you and the humanity is doomed");
    reset();
  }
}
// here we return all the values back to their original form and let the player play again
function reset() {
  playerWinCount = 0;
  computerWinCount = 0;
  winnerPlayer.textContent = "Player: ";
  winnerComputer.textContent = "Computer: ";
  ties.textContent = "Ties: ";
}
