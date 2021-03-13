const squirtle = document.getElementById("squirtle");
const charmander = document.getElementById("charmander");
const bulbasaur = document.getElementById("bulbasaur");
const content = document.querySelector(".results-container");

let playerCount = 0;
let compCount = 0;

squirtle.addEventListener("click", () => {
  playerSelection = "squirtle";
  computerSelection = computerPlay();
  result = playRound(playerSelection, computerSelection);

  results();
});

charmander.addEventListener("click", () => {
  playerSelection = "charmander";
  computerSelection = computerPlay();
  result = playRound(playerSelection, computerSelection);

  results();
});

bulbasaur.addEventListener("click", () => {
  playerSelection = "bulbasaur";
  computerSelection = computerPlay();
  result = playRound(playerSelection, computerSelection);

  results();
});

function results() {
  if (result.includes("win") === true) {
    playerCount++;
  } else if (result.includes("lose") === true) {
    compCount++;
  }

  content.innerHTML = `
      <h1>${result}</h1>
      <h2>Player score is ${playerCount}.  Computer score is ${compCount}!</h2>
    `;

  if (playerCount === 10) {
    alert("FIRST TO 10!  YOU ARE THE POKEMON MASTER!");
  }

  if (compCount === 10) {
    alert("Team ROCKET strikes AGAIN!  You are NOT a Pokemon master");
  }
}

// Computer Choice Sequence
function computerPlay() {
  let compTurn = Math.floor(Math.random() * 3);

  if (compTurn === 0) {
    return "squirtle";
  } else if (compTurn === 1) {
    return "charmander";
  } else {
    return "bulbasaur";
  }
}

// Plays a round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "squirtle" && computerSelection === "charmander") {
    return "Squirtle uses Bubble!  You win!";
  } else if (
    playerSelection === "squirtle" &&
    computerSelection === "bulbasaur"
  ) {
    return "Bulbasaur's Vine Whip is too much!  You lose!";
  } else if (
    playerSelection === "squirtle" &&
    computerSelection === "squirtle"
  ) {
    return "It's not very effective...";
  } else if (
    playerSelection === "charmander" &&
    computerSelection === "bulbasaur"
  ) {
    return "Charmander uses Flamethrower!  That Bulbasaur is done!  You win!";
  } else if (
    playerSelection === "charmander" &&
    computerSelection === "squirtle"
  ) {
    return "Squirtle counterattacks with Water Gun!  You lose!";
  } else if (
    playerSelection === "charmander" &&
    computerSelection === "charmander"
  ) {
    return "It's not very effective...";
  } else if (
    playerSelection === "bulbasaur" &&
    computerSelection === "squirtle"
  ) {
    return "Bulbasaur used Razor Leaf!  Squirtle faints and you win!";
  } else if (
    playerSelection === "bulbasaur" &&
    computerSelection === "charmander"
  ) {
    return "Charmander counters with Ember!  You lose!";
  } else {
    return "It's not very effective...";
  }
}
