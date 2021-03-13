const squirtle = document.getElementById("squirtle");
const charmander = document.getElementById("charmander");
const bulbasaur = document.getElementById("bulbasaur");

squirtle.addEventListener("click", playerSelection);
charmander.addEventListener("click", playerSelection);
bulbasaur.addEventListener("click", playerSelection);

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

function playRound(playerSelection) {
  let computerSelection = computerPlay();

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
    return "Charmander uses Flamethrower!  That Bulbasaur is done!";
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
