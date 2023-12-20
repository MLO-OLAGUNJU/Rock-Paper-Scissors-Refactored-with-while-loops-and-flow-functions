// Rock, Paper, Scissors: Refactored with while Loop and an Array
let playGame = confirm("Shall we play rock, paper, or scissors");
if (playGame) {
  while (playGame) {
    const playerChoice = prompt("Please enter rock, paper, scissors");
    if (playerChoice || playerChoice === "") {
      const playerChoice = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random());
      }
    }
  }
}
