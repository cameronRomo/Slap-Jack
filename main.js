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
//(currentGame.player2.isTurn === true)
function displayMessage() { //refactor
  if (currentGame.player1.isTurn === true) {
     topMessage.innerText = "It's player 1's turn. Press \'Q' to play card.";
  } else {
    topMessage.innerText = "It's player 2's turn. Press \'P' to play card.";
  }
}

function updateGame() {
  play(event);
  if (currentGame.pile[0] !== undefined) {
    pile.innerHTML = `<img class="new-card card" src="${currentGame.pile[0].source}" alt="pile">`
  }
}

function clearPile() {
  pile.innerHTML = `<div class="game__card-stack card"></div>`;
}

function play(event) {
  //var currentPlayer ... who is current player?
  console.log(event.key);
  if (event.key === "q") {
    // console.log(event.target);
    currentGame.playPlayerCard(currentGame.player1);
    currentGame.playerTurn();
    displayMessage()
  } else if (event.key === "f") {
      slap(event);
      updateWin()
  } else if (event.key === "p") {
    currentGame.playPlayerCard(currentGame.player2);
    currentGame.playerTurn();
    displayMessage();
  } else if (event.key === "j") {
    slap(event);
    updateWin()
  }
}

function slap(event) {
  if (event.key === "f") {
    currentGame.attemptSlap(currentGame.player1);
    clearPile();
    trackNoCards(currentGame.player2);
    topMessage.innerText = `${currentGame.player1.playerMessage} Player 1 takes the pile!\n Player 2, press \'P' to play next card.`;
    currentGame.playerTurn();
    return
  } else if (event.key === "j") {
      currentGame.attemptSlap(currentGame.player2);
      clearPile();
      trackNoCards(currentGame.player1);
      topMessage.innerText = `${currentGame.player2.playerMessage} Player 2 takes the pile!\n Player 1, press \'Q' to play next card.`;
      currentGame.playerTurn();
      return
    }
}

function updateWin() {
  var player1Score = document.querySelector(".game__player1-wins")
  var player2Score = document.querySelector(".game__player2-wins")
  if (currentGame.player1.hand.length === 0 && currentGame.player1.timesWNoCard === 2) {
  currentGame.addWin(currentGame.player2);
  player2Score.innerText = `${currentGame.player2.wins} Wins`
  nextRound()
} else if (currentGame.player2.hand.length === 0 && currentGame.player2.timesWNoCard === 2) {
  currentGame.addWin(currentGame.player1);
  player1Score.innerText = `${currentGame.player1.wins} Wins`
  nextRound()
} else {
  return
}
}

function nextRound() {
  currentGame.player1.hand = [];
  currentGame.player2.hand = [];
  currentGame.shuffleCards(currentGame.cards);
  currentGame.playerTurn();
  displayMessage();
}

function trackNoCards(player) {
  if (player.hand.length === 0) {
    player.timesWNoCard += 1;
  }
}
