var pile = document.querySelector(".game__card-stack");
var currentGame;
var topMessage = document.querySelector(".message")

window.onload = startGame();
window.addEventListener("keydown", updateGame);

function startGame() {
  currentGame = new Game();
  //invoke an updateWins();
  currentGame.shuffleCards(currentGame.cards);
  currentGame.playerTurn();
  displayMessage();
}

function displayMessage() {
  if (currentGame.player1.isTurn === true) {
     topMessage.innerText = "It's player 1's turn. Press \'Q' to play card.";
  }
  if (currentGame.player2.isTurn === true) {
    topMessage.innerText = "It's player 2's turn. Press \'P' to play card.";
  }
}

function updateGame() {
  play();
  if (pile.classList.contains("new-card") === false) {
    console.log("HEYYYYYYY");
    pile.innerHTML = `<img class="new-card card" src="${currentGame.pile[0].source}" alt="pile">`
  }
  //else {
  //   clearPile();
  // }

  // play();
  // if (pile.classList.contains("new-card") === false) {
  //   pile.innerHTML = `<img class="new-card card" src="${currentGame.pile[0].src}" alt="pile">`
  // } else {
  //   console.log("HEYYYYYYY");
  //   clearPile();
  // }
}

function clearPile() {
  pile.innerHTML = `<div class="game__card-stack card"></div>`;
}

function play() {
  if (event.key === "q") {
    console.log(event.target);
    currentGame.playPlayerCard(currentGame.player1);
    currentGame.playerTurn();
    displayMessage()
  } else if (event.key === "f") {
      slap();
      currentGame.playerTurn();
  }
  if (event.key === "p") {
    currentGame.playPlayerCard(currentGame.player2);
    currentGame.playerTurn();
    displayMessage();
  } else if (event.key === "j") {
    slap();
    currentGame.playerTurn();
  }
  console.log(currentGame.pile[0]);
}

function slap() {
  if (event.key === "f") {
    currentGame.attemptSlap(currentGame.player1);
    clearPile();
    topMessage.innerText = "SLAPJACK! Player 1 takes the pile!\n Player 2, press \'P' to play next card.";

  }
if (event.key === "j") {
    currentGame.attemptSlap(currentGame.player2);
    clearPile();
    topMessage.innerText = "SLAPJACK! Player 2 takes the pile!\n Player 1, press \'Q' to play next card.";
  }
}

function addWin() {
  //invoke checkForWin()
}
