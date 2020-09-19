class Player {
  constructor(id) {
    this.id = `player-${id}`;
    this.wins = 0;
    this.hand = [];
    this.isTurn = false;
    this.timesWNoCard = 0;
  }

  playCard(game) {
    var cardInPlay = this.hand[0]
    game.pile.splice(0, 0, cardInPlay);
    this.hand.splice(0, 1);
    // currentGame.pile.unshift(this.hand[0]);
  }

  saveWinsToStorage() {

  }
}
