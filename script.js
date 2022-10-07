// Defining the three options players can play in rock, paper and scissors
const options = ["rock", "paper", "scissors"];

// Function for the computer to draw rock, paper or scissor
function getComputerChoice() {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

//here we take the player and computer input, compare them and output the outcome.
function roundResult(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "draw";
  } else if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player wins";
  } else {
    return "Computer wins";
  }
}
// a function to play 1 round of rock paper scissors
function round(playerSelection, computerSelection) {
  let result = roundResult(playerSelection, computerSelection);
  if (result == "draw") {
    return "Wow! a draw!";
  } else if (result == "Player wins") {
    return "You are the winner of the round!";
  } else {
    return "The computer won the round!";
  }
}

function getPlayerChoice() {
  let playerInput = false;
  while (playerInput === false) {
    const playerChoice = prompt("rock, paper or scissors?");
    if (playerChoice == null) {
      continue;
    }
    const playerChoiceRightSyntax = playerChoice.toLowerCase();
    if (options.includes(playerChoiceRightSyntax)) {
      playerInput = true;
      return playerChoiceRightSyntax;
    }
  }
}
// here we execute the game to be played for 5 rounds :)
function game() {
  console.log("Let the games begin! :)");
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    // console log round function that takes the 2 functions above this line as variables
    console.log(round(playerSelection, computerSelection));
    // give +1 score depending who won
    if (roundResult(playerSelection, computerSelection) == "Player wins") {
      playerScore++;
    } else if (
      roundResult(playerSelection, computerSelection) == "Computer wins"
    ) {
      computerScore++;
    }
  }
  console.log("good game!!");
  if (playerScore > computerScore) {
    console.log("you won!");
  } else if (playerScore < computerScore) {
    console.log("Computer won and you lost!");
  } else {
    console.log("a tie... wow!");
  }
}

console.log(game());
