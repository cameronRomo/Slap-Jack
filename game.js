class Game {
  constructor() {
    this.player1 = new Player('1');
    this.player2 = new Player('2');
    this.gameTurns = 0;
    this.cards = [
      './assets/blue-01.png',
      './assets/blue-02.png',
      './assets/blue-03.png',
      './assets/blue-04.png',
      './assets/blue-05.png',
      './assets/blue-06.png',
      './assets/blue-07.png',
      './assets/blue-08.png',
      './assets/blue-09.png',
      './assets/blue-10.png',
      './assets/blue-jack.png',
      './assets/blue-king.png',
      './assets/blue-queen.png',
      './assets/gold-01.png',
      './assets/gold-02.png',
      './assets/gold-03.png',
      './assets/gold-04.png',
      './assets/gold-05.png',
      './assets/gold-06.png',
      './assets/gold-07.png',
      './assets/gold-08.png',
      './assets/gold-09.png',
      './assets/gold-10.png',
      './assets/gold-jack.png',
      './assets/gold-king.png',
      './assets/gold-queen.png',
      './assets/green-01.png',
      './assets/green-02.png',
      './assets/green-03.png',
      './assets/green-04.png',
      './assets/green-05.png',
      './assets/green-06.png',
      './assets/green-07.png',
      './assets/green-08.png',
      './assets/green-09.png',
      './assets/green-10.png',
      './assets/green-jack.png',
      './assets/green-king.png',
      './assets/green-queen.png',
      './assets/red-01.png',
      './assets/red-02.png',
      './assets/red-03.png',
      './assets/red-04.png',
      './assets/red-05.png',
      './assets/red-06.png',
      './assets/red-07.png',
      './assets/red-08.png',
      './assets/red-09.png',
      './assets/red-10.png',
      './assets/red-jack.png',
      './assets/red-king.png',
      './assets/red-queen.png',
    ];
    this.pile = [];
    this.winningJacks = [
      './assets/blue-jack.png',
      './assets/gold-jack.png',
      './assets/green-jack.png',
      './assets/red-jack.png',
    ]
    this.intervalID;
  }

  shuffleCards(array) {
    this.intervalID = setInterval(this.addCards.bind(this), 100);
  }

  addCards() {
    var randomCard = this.cards[Math.floor(Math.random() * this.cards.length)];
    this.dealCards(randomCard);
  }

  dealCards(card) {
    if (this.player1.hand.length < 26) {
      this.player1.hand.unshift(card);
    } else {
      this.player2.hand.unshift(card);
    }
    if (this.player2.hand.length === 26) {
      clearInterval(this.intervalID);
    }
  }

  playerTurn() {
    if (this.gameTurns % 2 === 0) {
      this.player1.isTurn = true;
      this.player2.isTurn = false;
    } else {
      this.player2.isTurn = true;
      this.player1.isTurn = false;
    }
  }

  playPlayerCard(currentPlayer) {
    if (currentPlayer.hand.length > 0 && currentPlayer.isTurn === true) {
      var cardInPlay = currentPlayer.hand[0]
      this.pile.splice(0, 0, cardInPlay);
      currentPlayer.hand.splice(0, 1);
      this.gameTurns += 1;
    }
    return
  }

  attemptSlap(currentPlayer) {
    for (var i = 0; i < this.winningJacks.length; i++) {
      if (this.pile[0] === this.winningJacks[i]) {
        for (var j = 0; j < this.pile.length; j++) {
          currentPlayer.hand.push(this.pile[j])
        }
      }
    }
    if (this.pile[0] === this.pile[1] || this.pile[0] === this.pile[2]) {
      for (var k = 0; k < this.pile.length; k++) {
        currentPlayer.hand.push(this.pile[k])
      }
    }
    // return this.pile;
  }

  checkForWin(currentPlayer) {
    if (currentPlayer.isTurn === false) {
      var oppositePlayer = currentPlayer;
    }
    if (oppositePlayer.timesWNoCard === 2) {
      currentPlayer.wins += 1;
    }
  }

  resetGame() {
    location.reload();
    // this.pile = [];
    // this.player1.hand = [];
    // this.player2.hand = [];
    // this.player1.wins = 0;
    // this.player2.wins = 0;
  }
}
