var pile = document.querySelector(".game__card-stack");
var currentGame;
var topMessageParent = document.querySelector(".body")

window.onload = startGame();
window.addEventListener("keydown", updateGame);

function startGame() {
  currentGame = new Game();
  //invoke an updateWins();
  currentGame.shuffleCards(currentGame.cards);
  currentGame.playerTurn();
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
  // var topMessageParent = document.querySelector(".body")
  pile.innerHTML = `<div class="game__card-stack card"></div>`;
//   topMessageParent.insertAdjacentHTML('afterbegin',
// `<h2 class="winning-message">SLAPJACK! `
// )
}

function play() {
  if (event.key === "q") {
    console.log(event.target);
    currentGame.playPlayerCard(currentGame.player1);
    currentGame.playerTurn();
  } else if (event.key === "f") {
      // currentGame.attemptSlap(currentGame.player1);
      slap();
      clearPile();
  }
  if (event.key === "p") {
    currentGame.playPlayerCard(currentGame.player2);
    currentGame.playerTurn();
  } else if (event.key === "j") {
    // currentGame.attemptSlap(currentGame.player2);
    slap();
    clearPile();
  }
  console.log(currentGame.pile[0]);
}

function slap() {
  var winningMesg;
  if (event.key === "f") {
    currentGame.attemptSlap(currentGame.player1);
    clearPile();
    winningMesg = topMessageParent.insertAdjacentHTML('afterbegin',
  `<h1 class="winning-message">SLAPJACK! Player 1 takes the pile!</h1>`)
  }
if (event.key === "j") {
    currentGame.attemptSlap(currentGame.player2);
    clearPile();
    topMessageParent.classList.add("--win")
    winningMesg = topMessageParent.insertAdjacentHTML('afterbegin',
  `<h1 class="winning-message">SLAPJACK! Player 2 takes the pile!</h1>`)
  }
}

// function removeWiningMesg() {
//   topMessageParent.classList.remove("--win")
// }

function addWin() {
  //invoke checkForWin()
}
