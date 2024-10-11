// Wait for the DOM to finish loading before running the game
// Get the option elements and add event listeners to them
document. addEventListener("DOMContentLoaded", function() {
    // Select all game option buttons(rock, paper, scissors, lizard, spock)
    let options = document.querySelectorAll(".option");

    // Add elent listeners to all buttons
    for (let option of options) {
        option.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-choice");
            console.log(`Player chose: ${playerChoice}`);
        })
    }

    console.log("DOM fully loaded");
    // Verify that we selected the correct buttons
    console.log(options);
});



