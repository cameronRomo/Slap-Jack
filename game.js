class Game {
  constructor() {
    this.player1 = new Player('1');
    this.player2 = new Player('2');
    this.gameTurns = 0;
    this.cards = [
      {suit: "blue", number: 1, source: './assets/blue-01.png'},
      {suit: "blue", number: 2, source: './assets/blue-02.png'},
      {suit: "blue", number: 3, source: './assets/blue-03.png'},
      {suit: "blue", number: 4, source: './assets/blue-04.png'},
      {suit: "blue", number: 5, source: './assets/blue-05.png'},
      {suit: "blue", number: 6, source: './assets/blue-06.png'},
      {suit: "blue", number: 7, source: './assets/blue-07.png'},
      {suit: "blue", number: 8, source: './assets/blue-08.png'},
      {suit: "blue", number: 9, source: './assets/blue-09.png'},
      {suit: "blue", number: 10, source: './assets/blue-10.png'},
      {suit: "blue", number: 11, source: './assets/blue-jack.png'},
      {suit: "blue", number: 13, source: './assets/blue-king.png'},
      {suit: "blue", number: 12, source: './assets/blue-queen.png'},
      {suit: "gold", number: 1, source: './assets/gold-01.png'},
      {suit: "gold", number: 2, source: './assets/gold-02.png'},
      {suit: "gold", number: 3, source: './assets/gold-03.png'},
      {suit: "gold", number: 4, source: './assets/gold-04.png'},
      {suit: "gold", number: 5, source: './assets/gold-05.png'},
      {suit: "gold", number: 6, source: './assets/gold-06.png'},
      {suit: "gold", number: 7, source: './assets/gold-07.png'},
      {suit: "gold", number: 8, source: './assets/gold-08.png'},
      {suit: "gold", number: 9, source: './assets/gold-09.png'},
      {suit: "gold", number: 10, source: './assets/gold-10.png'},
      {suit: "gold", number: 11, source: './assets/gold-jack.png'},
      {suit: "gold", number: 13, source: './assets/gold-king.png'},
      {suit: "gold", number: 12, source: './assets/gold-queen.png'},
      {suit: "green", number: 1, source: './assets/green-01.png'},
      {suit: "green", number: 2, source: './assets/green-02.png'},
      {suit: "green", number: 3, source: './assets/green-03.png'},
      {suit: "green", number: 4, source: './assets/green-04.png'},
      {suit: "green", number: 5, source: './assets/green-05.png'},
      {suit: "green", number: 6, source: './assets/green-06.png'},
      {suit: "green", number: 7, source: './assets/green-07.png'},
      {suit: "green", number: 8, source: './assets/green-08.png'},
      {suit: "green", number: 9, source: './assets/green-09.png'},
      {suit: "green", number: 10, source: './assets/green-10.png'},
      {suit: "green", number: 11, source: './assets/green-jack.png'},
      {suit: "green", number: 13, source: './assets/green-king.png'},
      {suit: "green", number: 12, source: './assets/green-queen.png'},
      {suit: "red", number: 1, source: './assets/red-01.png'},
      {suit: "red", number: 2, source: './assets/red-02.png'},
      {suit: "red", number: 3, source: './assets/red-03.png'},
      {suit: "red", number: 4, source: './assets/red-04.png'},
      {suit: "red", number: 5, source: './assets/red-05.png'},
      {suit: "red", number: 6, source: './assets/red-06.png'},
      {suit: "red", number: 7, source: './assets/red-07.png'},
      {suit: "red", number: 8, source: './assets/red-08.png'},
      {suit: "red", number: 9, source: './assets/red-09.png'},
      {suit: "red", number: 10, source: './assets/red-10.png'},
      {suit: "red", number: 11, source: './assets/red-jack.png'},
      {suit: "red", number: 13, source: './assets/red-king.png'},
      {suit: "red", number: 12, source: './assets/red-queen.png'},
    ];
    this.pile = [];
    this.winningJacks = [
      {suit: "blue", number: 11, source: './assets/blue-jack.png'},
      {suit: "gold", number: 11, source: './assets/gold-jack.png'},
      {suit: "green", number: 11, source: './assets/green-jack.png'},
      {suit: "red", number: 11, source: './assets/red-jack.png'},
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
    this.checkHand();
  }

  checkHand() {
    if (this.player1.hand.length === 0 && this.gameTurns > 1) {
      console.log("Player 2 turn");
      this.player1.isTurn = false;
      this.player2.isTurn = true;
    } else if (this.player2.hand.length === 0 && this.gameTurns > 1) {
      this.player2.isTurn = false;
      this.player1.isTurn = true;
    } else {
      this.checkGameTurns()
    }
  }

  checkGameTurns() {
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
      currentPlayer.hand.splice(0, 1);
      this.pile.splice(0, 0, cardInPlay);
      this.gameTurns += 1;
    }
    return
  }

  attemptSlap(currentPlayer) {
    this.slapJack(currentPlayer)
    this.double(currentPlayer)
    this.sandwich(currentPlayer)
    return this.pile = [];
}

  slapJack(currentPlayer) {
    for (var i = 0; i < this.winningJacks.length; i++) {
      if (this.pile[0].source === this.winningJacks[i].source) {
        currentPlayer.slappedJack = true;
        currentPlayer.playerSlapedJack();
        this.pile.forEach(function(card) {
          currentPlayer.hand.push(card);
        })
      }
    }
  }

 double(currentPlayer) {
  if (this.pile.length < 2) {
    return;
  } else if (this.pile[0].number === this.pile[1].number) {
    currentPlayer.slappedDouble = true;
    currentPlayer.playerSlapedDouble();
    this.pile.forEach(function(card) {
      currentPlayer.hand.push(card);
    })
  }
}

 sandwich(currentPlayer) {
  if (this.pile.length < 3) {
    return;
  } else if (this.pile[0].number === this.pile[2].number) {
    currentPlayer.slappedSandwich = true;
    currentPlayer.playerSlapedSandwich();
    this.pile.forEach(function(card) {
      currentPlayer.hand.push(card);
    })
  }
}

  addWin(currentPlayer) {
    currentPlayer.wins += 1;
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
