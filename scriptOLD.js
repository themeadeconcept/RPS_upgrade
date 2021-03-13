const container = document.querySelector("#container");
const content = document.createElement("div");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let playerCount = 0;
let compCount = 0;
let computerSelection = "";
let playerSelection = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win!  Paper stays wrapping up rocks!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose!  Computer Scissors chopped you up!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Tie...";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win!  Rocks always crushing scissors!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose!  That paper got you wrapped up!";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "Tie...";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win!  Scissors choppin' up paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose!  Rocks always crushing scissors!";
  } else {
    return "Tie...";
  }
}

//Computer Choice Sequence
function computerPlay() {
  let compTurn = Math.floor(Math.random() * 3);

  if (compTurn === 0) {
    return "rock";
  } else if (compTurn === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

rock.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = computerPlay();
  result = playRound(playerSelection, computerSelection);

  if (result.includes("Win") === true) {
    playerCount++;
  } else if (result.includes("Lose") === true) {
    compCount++;
  }
  content.classList.remove("content");
  content.textContent =
    result +
    "  Player score is " +
    playerCount +
    ".  Computer score is " +
    compCount +
    "!";
  content.classList.add("content");
  container.insertBefore(content, container.firstChild);
});

paper.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = computerPlay();
  result = playRound(playerSelection, computerSelection);

  if (result.includes("Win") === true) {
    playerCount++;
  } else if (result.includes("Lose") === true) {
    compCount++;
  }
  content.classList.remove("content");
  content.textContent =
    result +
    "  Player score is " +
    playerCount +
    ".  Computer score is " +
    compCount +
    "!";
  content.classList.add("content");
  container.insertBefore(content, container.firstChild);
});

scissors.addEventListener("click", () => {
  playerSelection = "scissors";
  computerSelection = computerPlay();
  result = playRound(playerSelection, computerSelection);

  if (result.includes("Win") === true) {
    playerCount++;
  } else if (result.includes("Lose") === true) {
    compCount++;
  }
  content.classList.remove("content");
  content.textContent =
    result +
    "  Player score is " +
    playerCount +
    ".  Computer score is " +
    compCount +
    "!";
  content.classList.add("content");
  container.insertBefore(content, container.firstChild);
});
