// Wait for the DOM to finish loading before running the game
// Get the option elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
  // Score variables
  let playerScore = 0;
  let computerScore = 0;
  let playerWin = 0;
  let computerWin = 0;
  // Variable to check if the game is over
  let gameOver = false;

  // Select all game option buttons(rock, paper, scissors, lizard, spock)
  const options = document.querySelectorAll(".option");

  // Add event listeners to all buttons
  for (let option of options) {
    option.addEventListener("click", function () {
      try {
        // No more click if the game is over
        if (gameOver) return;

        let playerChoice = this.getAttribute("data-choice");
        let computerChoice = getComputerChoice();
        // Decide the winner
        let result = decideWinner(playerChoice, computerChoice);

        // Update scores
        if (result === "win") {
          // Increment player score by 1
          playerScore++;
          // Increment player wins by 1
          playerWin++;
        } else if (result === "lose") {
          // Increment computer score by 1
          computerScore++;
          // Increment computer wins by 1
          computerWin++;
        }

        // Update the Scoreboard
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;

        // Display message with game result
        showMessage(playerChoice, computerChoice, result);

        bestOutOfFive();
      } catch (err) {
        console.log("Error in playerChoice", err.message);
        return null;
      }
    });

    // Add event listener to restart button
    document
      .getElementById("restart-btn")
      .addEventListener("click", restartGame);

    // Function to generate the computers choice random
    function getComputerChoice() {
      try {
        // Using "const" as choices won't change
        const choices = ["rock", "paper", "scissors", "lizard", "spock"];
        let randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
      } catch (err) {
        console.log("Error in getComputerChoice ", err.message);
        return null;
      }
    }
  }

  // Function to display the result in the message area
  function showMessage(playerChoice, computerChoice, result) {
    let gameMessage = document.getElementById("game-message");

    if (result === "win") {
      gameMessage.innerText = `WINNER! ${playerChoice} beats ${computerChoice}`;
    } else if (result === "lose") {
      gameMessage.innerText = `LOSER! ${computerChoice} beats ${playerChoice}`;
    } else {
      gameMessage.innerText = `Ohh! It's a Tie! You both selected ${computerChoice}`;
    }
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
      spock: ["scissors", "rock"],
    };

    if (playerChoice === computerChoice) {
      return "tie";
    } else if (winRules[playerChoice].includes(computerChoice)) {
      return "win";
    } else {
      return "lose";
    }
  }

  // Function to display the overall winner in a best out of 5
  function bestOutOfFive() {
    let gameMessage = document.getElementById("game-message");

    if (playerWin === 3) {
      gameMessage.innerText = "Congratulations! You won the best out of 5!";
      // Stop the game
      gameOver = true;
    } else if (computerWin === 3) {
      gameMessage.innerText = "Oh no! You lost the best out of 5!";
      // Stop the game
      gameOver = true;
    }
  }

  // Function to restart the game by resetting the score and wins
  function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerWin = 0;
    computerWin = 0;
    gameOver = false;

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("game-message").textContent =
      "New Game! Make your move!";
  }
});
