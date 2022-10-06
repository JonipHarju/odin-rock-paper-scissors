console.log("Hi!");

const options = ["Rock", "Paper", "Scissors"];
// Function for the computer to draw rock, paper or scissor
function getComputerChoice() {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}
