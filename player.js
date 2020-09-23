class Player {
  constructor(id) {
    this.id = `player-${id}`;
    this.wins = JSON.parse(localStorage.getItem(this.id)) || 0;
    this.hand = [];
    this.isTurn = false;
    this.timesWNoCard = 0;
    this.slappedJack = false;
    this.slappedDouble = false;
    this.slappedSandwich = false;
    this.playerMessage;
  }

  playerSlapedJack() {
    if (this.slappedJack === true) {
      this.playerMessage = "SLAPJACK!";
    }
  }

  playerSlapedDouble() {
    if (this.slappedDouble === true) {
      this.playerMessage = "DOUBLE!";
    }
  }

  playerSlapedSandwich() {
    if (this.slappedSandwich === true) {
      this.playerMessage = "SANDWICH!";
    }
  }

  addToStorage() {
    var stringyPlayerWins = JSON.stringify(this.wins);
    localStorage.setItem(this.id, stringyPlayerWins);
  }
}
