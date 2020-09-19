var currentGame;

window.addEventListener("keydown", updateGame);

function startGame() {
  currentGame = new Game();
  //invoke an updateWins();
  currentGame.shuffleCards(currentGame.cards);
  currentGame.playerTurn();
}
function updateGame() {
  if (event.key === "q") {
    currentGame.playPlayerCard(currentGame.player1);
  }
  if (event.key === "p") {
    currentGame.playPlayerCard(currentGame.player2);
  }
  currentGame.playerTurn();
}
