// this js file will hold our main game logic
// each Game should have the following props:
// letterToBeGuessed, wins, losses, guessesLeft, guessesSoFar

// user clicks start button
// new game is displayed to dom
// user can click keys to guess letter
// every wrong guess decrements guessesLeft and push guess to guessesSoFar
// if guessesLeft === 0 then losses is incremenented, guessesSoFar is emptied, guessesLeft = 10, create new LetterToBeGuessed
// if losses === 5 then game is over, gameOver template displayed, options for New Game or Quit is presented
// new game button will generate a new Game Object.
// quit button will display start button
// start button will generate a new game, display new game to DOM, listen for User guesses

// first step create game object
class Game {
  // second add properties
  constructor() {
    this.wins = 0;
    this.losses = 0;
    this.guessesLeft = 10;
    this.guessesSoFar = [];
    this.letterToBeGuessed;
  }
  // third add methods
  // each Game should be  have the following methods:
  // startGame, getLetterToBeGuessed, incrementWins, incrementLosses, decerementGuessesLeft, saveGuessesSoFar, newGame, quitGame
  gameLogic(e) {
    game.saveGuesses(e);

    if (game.letterToBeGuessed === e.key) {
      game.incrementWins();
      document.getElementById("wins").innerText = game.wins;
      game.newRound();
    } else {
      game.decrementGuessesLeft();
      document.getElementById("guessesLeft").innerText = game.guessesLeft;
    }

    if (game.guessesLeft === 0) {
      game.incrementLosses();
      document.getElementById("losses").innerText = game.losses;
      game.newRound();
    }

    if (game.losses === 5) {
      console.log(game.gameOver());
    }
  }

  startGame() {
    document.addEventListener("keyup", this.gameLogic);
    this.displayGame();
  }

  displayGame() {
    document.getElementById("wins").innerText = this.wins;
    document.getElementById("losses").innerText = this.losses;
    document.getElementById("guessesLeft").innerText = this.guessesLeft;
    document.getElementById("guessesSoFar").innerText = this.guessesSoFar;
    this.getLetterToBeGuessed();
    console.log(
      `Starting New Game. First letter to be guessed: ${this.letterToBeGuessed}`
    );
  }

  getLetterToBeGuessed() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return (this.letterToBeGuessed =
      alphabet[Math.floor(Math.random() * alphabet.length)]);
  }

  incrementWins() {
    return this.wins++;
  }

  incrementLosses() {
    return this.losses++;
  }

  decrementGuessesLeft() {
    return this.guessesLeft--;
  }

  saveGuesses(e) {
    this.guessesSoFar.push(e.key);
    return (document.getElementById("guessesSoFar").innerText =
      this.guessesSoFar.join(" ").toUpperCase());
  }

  quitGame() {
    console.log("Quit Game :(");
  }

  gameOver() {
    document.removeEventListener("keyup", this.gameLogic);
    document.getElementById("modal").innerHTML = this.gameOverModal();
    document.getElementById("newGame").addEventListener("click", () => {
      game = new Game();
      game.startGame();
    });
    document.getElementById("quitGame").addEventListener("click", () => {
      console.log("Display only start button AKA home screen");
    });

    return `Game Over! 5 Losses reached.`;
  }

  gameOverModal() {
    return `
    <div>
        <h1>Game Over</h1>
        </br>
        <h2> Wins: ${this.wins} Losses: ${this.losses} </h2>
        <button id = "newGame"> New Game </button>
        <button id = "quitGame"> Quit </button>
   </div>
   `;
  }

  newRound() {
    this.guessesLeft = 10;
    this.guessesSoFar = [];
    document.getElementById("guessesLeft").innerText = this.guessesLeft;
    document.getElementById("guessesSoFar").innerText = this.guessesSoFar;
    this.getLetterToBeGuessed();
    console.log(
      `Starting New Round. New letter to be guessed: ${this.letterToBeGuessed}`
    );
  }
}

// use event listeners to play game

let game;

document.getElementById("start").addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

document.getElementById("quit").addEventListener("click", () => {
  game.gameOver();
});
