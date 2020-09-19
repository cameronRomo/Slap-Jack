class Player {
  constructor(id) {
    this.id = `player-${id}`;
    this.wins = 0;
    this.hand = [];
    this.isTurn = false;
    this.timesWNoCard = 0;
  }

  saveWinsToStorage() {

  }
}
