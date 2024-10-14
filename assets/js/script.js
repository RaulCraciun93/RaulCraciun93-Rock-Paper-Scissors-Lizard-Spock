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
      // Decide the winner
      let result = decideWinner(playerChoice, computerChoice);
      // Logging player's and computer's choice and result for debugging
      console.log(`Player chose: ${playerChoice}, Computer chose: ${computerChoice}, Result: ${result}`);

      //Display message with the game result
    if (result === "win") {
      alert(`Winner! ${playerChoice} beats ${computerChoice}`);
    } else if (result === "lose") {
      alert(`Loser! ${computerChoice} beats ${playerChoice}`);
    } else {
      alert(`Ohh! It's a Tie!`);
    }
  })

  // Function to generate the computers choice random
  function getComputerChoice() {
    // Using "const" as choices won't change
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  /**
   * Function to decide the winner comparing playerChoice adn computerChoice
   * Returns "win", "lose" or "tie"
   */
  function decideWinner(playerChoice, computerChoice) {
    // Using "const" as rules won't change
    const winRules = {
      rock: ["scissors", "lizard"],
      paper: ["rock", "spock"],
      scissors: ["paper", "lizard"],
      lizard: ["spock", "paper"],
      spock: ["scissors", "rock"]
    };

    if (playerChoice === computerChoice) {
      return "tie";
    } else if (winRules[playerChoice].includes(computerChoice)) {
      return "win";
    } else {
      return "lose";
    }
  }  
}

});

