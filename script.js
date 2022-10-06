// Defining the three options players can play in rock, paper and scissors
const options = ["Rock", "Paper", "Scissors"];

// Function for the computer to draw rock, paper or scissor
function getComputerChoice() {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

//here we take the player and computer input, compare them and output the outcome.
function round(playerSelection, computerSelection) {
  if (computerSelection.toUpperCase() === playerSelection.toUpperCase()) {
    return "WOW A TIE!?!??!!? GO AGAIN!!!";
  } else if (
    (playerSelection.toUpperCase() === "ROCK" &&
      computerSelection.toUpperCase() === "SCISSORS") ||
    (playerSelection.toUpperCase() === "PAPER" &&
      computerSelection.toUpperCase() === "ROCK") ||
    (playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection.toUpperCase() === "PAPER")
  ) {
    return "YOU ARE THE WINNER!!!!!";
  } else {
    return "THE COMPUTER BEAT YOU AHHAHAHA!!!!!";
  }
}

function game() {}

/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(round(playerSelection, computerSelection));
*/
