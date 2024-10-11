// Wait for the DOM to finish loading before running the game
// Get the option elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
  // Select all game option buttons(rock, paper, scissors, lizard, spock)
  let options = document.querySelectorAll(".option");

  // Add elent listeners to all buttons
  for (let option of options) {
    option.addEventListener("click", function () {
      let playerChoice = this.getAttribute("data-choice");
      let computerChoice = getComputerChoice();
      // Logging both player's and computer's choice for debugging
      console.log(`Player chose: ${playerChoice}, Computer chose: ${computerChoice}`);
    });
  }

  // Function to generate the computers choice random
  function getComputerChoice() {
    // Using "const" as choices won't change
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

});

