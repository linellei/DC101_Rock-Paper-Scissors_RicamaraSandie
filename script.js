// Rock Paper Scissors Game Logic

function playGame(playerChoice) {
    // Possible choices
    const choices = ["rock", "paper", "scissors"];

    // Random computer choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display choices
    document.getElementById("player-choice").textContent = "You chose: " + playerChoice;
    document.getElementById("computer-choice").textContent = "Computer chose: " + computerChoice;

    // Determine winner
    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    // Show result
    document.getElementById("winner").textContent = result;
}