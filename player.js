class Player {
  constructor(id) {
    this.id = `player-${id}`;
    this.wins = 0;
    this.hand = [];
    this.isTurn = false;
    this.game = new Game();
    this.timesWNoCard = 0;
    // this.validKeys = [];
  }

  playCard() {
    this.game.pile.unshift(this.hand[0]);
  }

  saveWinsToStorage() {

  }
}
