// Wait for the DOM to finish loading before running the game
// Get the option elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
  // Score variables
  let playerScore = 0;
  let computerScore = 0;
  // Select all game option buttons(rock, paper, scissors, lizard, spock)
  const options = document.querySelectorAll(".option");

  // Add elent listeners to all buttons
  for (let option of options) {
    option.addEventListener("click", function () {
      let playerChoice = this.getAttribute("data-choice");
      let computerChoice = getComputerChoice();
      // Decide the winner
      let result = decideWinner(playerChoice, computerChoice);
      // Logging player's choice, computer's choice and result for debugging
      console.log(`Player chose: ${playerChoice}, Computer chose: ${computerChoice}, Result: ${result}`);

     //Display alert message with the game result
    if (result === "win") {
      alert(`Winner!👍🏼 ${playerChoice} beats ${computerChoice}`);
      // Increment player score by 1
      playerScore++;
    } else if (result === "lose") {
      alert(`Loser!👎🏼 ${computerChoice} beats ${playerChoice}`);
      // Increment computer score by 1
      computerScore++;
    } else {
      alert(`Ohh! It's a Tie! You both selected ${computerChoice}`);
    }
    
    //Update the Scoreboard
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

    // Display game result in the game section
    let gameMessage = document.getElementById(#game-message);
    if (result === "win") {
      gameMessage = `WINNER! ${playerChoice} beats ${computerChoice}`;
    } else if (result === "lose") {
      gameMessage = `LOSER! ${computerChoice} beats ${playerChoice}`;
    } else {
      gameMessage = `Ohh! It's a Tie! You both selected ${computerChoice}`;
    }
    console.log(gameMessage);

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
    // Lookup table
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

  function bestOutOfFive() {

  }

  function restartGame() {
    
  }
}

});

