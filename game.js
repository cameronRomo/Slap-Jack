class Game {
  constructor() {
    this.player1 = new Player('1');
    this.player2 = new Player('2');
    this.gameTurns = 0;
    this.cards = [
      {suit: "blue", number: 1, src: './assets/blue-01.png'},
      {suit: "blue", number: 2, src: './assets/blue-02.png'},
      {suit: "blue", number: 3, src: './assets/blue-03.png'},
      {suit: "blue", number: 4, src: './assets/blue-04.png'},
      {suit: "blue", number: 5, src: './assets/blue-05.png'},
      {suit: "blue", number: 6, src: './assets/blue-06.png'},
      {suit: "blue", number: 7, src: './assets/blue-07.png'},
      {suit: "blue", number: 8, src: './assets/blue-08.png'},
      {suit: "blue", number: 9, src: './assets/blue-09.png'},
      {suit: "blue", number: 10, src: './assets/blue-10.png'},
      {suit: "blue", number: 10, src: './assets/blue-jack.png'},
      {suit: "blue", number: 10, src: './assets/blue-king.png'},
      {suit: "blue", number: 10, src: './assets/blue-queen.png'},
      {suit: "gold", number: 1, src: './assets/gold-01.png'},
      {suit: "gold", number: 2, src: './assets/gold-02.png'},
      {suit: "gold", number: 3, src: './assets/gold-03.png'},
      {suit: "gold", number: 4, src: './assets/gold-04.png'},
      {suit: "gold", number: 5, src: './assets/gold-05.png'},
      {suit: "gold", number: 6, src: './assets/gold-06.png'},
      {suit: "gold", number: 7, src: './assets/gold-07.png'},
      {suit: "gold", number: 8, src: './assets/gold-08.png'},
      {suit: "gold", number: 9, src: './assets/gold-09.png'},
      {suit: "gold", number: 10, src: './assets/gold-10.png'},
      {suit: "gold", number: 10, src: './assets/gold-jack.png'},
      {suit: "gold", number: 10, src: './assets/gold-king.png'},
      {suit: "gold", number: 10, src: './assets/gold-queen.png'},
      {suit: "green", number: 1, src: './assets/green-01.png'},
      {suit: "green", number: 2, src: './assets/green-02.png'},
      {suit: "green", number: 3, src: './assets/green-03.png'},
      {suit: "green", number: 4, src: './assets/green-04.png'},
      {suit: "green", number: 5, src: './assets/green-05.png'},
      {suit: "green", number: 6, src: './assets/green-06.png'},
      {suit: "green", number: 7, src: './assets/green-07.png'},
      {suit: "green", number: 8, src: './assets/green-08.png'},
      {suit: "green", number: 9, src: './assets/green-09.png'},
      {suit: "green", number: 10, src: './assets/green-10.png'},
      {suit: "green", number: 10, src: './assets/green-jack.png'},
      {suit: "green", number: 10, src: './assets/green-king.png'},
      {suit: "green", number: 10, src: './assets/green-queen.png'},
      {suit: "red", number: 1, src: './assets/red-01.png'},
      {suit: "red", number: 2, src: './assets/red-02.png'},
      {suit: "red", number: 3, src: './assets/red-03.png'},
      {suit: "red", number: 4, src: './assets/red-04.png'},
      {suit: "red", number: 5, src: './assets/red-05.png'},
      {suit: "red", number: 6, src: './assets/red-06.png'},
      {suit: "red", number: 7, src: './assets/red-07.png'},
      {suit: "red", number: 8, src: './assets/red-08.png'},
      {suit: "red", number: 9, src: './assets/red-09.png'},
      {suit: "red", number: 10, src: './assets/red-10.png'},
      {suit: "red", number: 10, src: './assets/red-jack.png'},
      {suit: "red", number: 10, src: './assets/red-king.png'},
      {suit: "red", number: 10, src: './assets/red-queen.png'},
    ];
    this.pile = [];
    this.winningJacks = [
      {suit: "blue", number: 10, src: './assets/blue-jack.png'},
      {suit: "gold", number: 10, src: './assets/gold-jack.png'},
      {suit: "green", number: 10, src: './assets/green-jack.png'},
      {suit: "red", number: 10, src: './assets/red-jack.png'},
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
    if (this.pile[0].number === this.pile[1].number || this.pile[0].number === this.pile[2].number) {
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
