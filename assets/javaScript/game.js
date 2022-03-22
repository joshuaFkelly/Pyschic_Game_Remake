// class Game {
//   constructor() {
//     this.wins = 0;
//     this.losses = 0;
//     this.guessesLeft = 10;
//     this.guessesSoFar = [];
//     this.letterToBeGuessed;
//   }
//   gameLogic(e) {
//     game.saveGuesses(e);

//     if (game.letterToBeGuessed === e.key) {
//       game.incrementWins();
//       document.getElementById("wins").innerText = game.wins;
//       game.newRound();
//     } else {
//       game.decrementGuessesLeft();
//       document.getElementById("guessesLeft").innerText = game.guessesLeft;
//     }

//     if (game.guessesLeft === 0) {
//       game.incrementLosses();
//       document.getElementById("losses").innerText = game.losses;
//       game.newRound();
//     }

//     if (game.losses === 5) {
//       game.gameOver();
//     }
//   }

//   startGame() {
//     document.addEventListener("keyup", this.gameLogic);
//     this.displayGame();
//   }

//   displayGame() {
//     document.getElementById("wins").innerText = this.wins;
//     document.getElementById("losses").innerText = this.losses;
//     document.getElementById("guessesLeft").innerText = this.guessesLeft;
//     document.getElementById("guessesSoFar").innerText = this.guessesSoFar;
//     this.getLetterToBeGuessed();
//     console.log(`letter to be guessed: ${this.letterToBeGuessed}`);
//   }

//   getLetterToBeGuessed() {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     return (this.letterToBeGuessed =
//       alphabet[Math.floor(Math.random() * alphabet.length)]);
//   }

//   incrementWins() {
//     return this.wins++;
//   }

//   incrementLosses() {
//     return this.losses++;
//   }

//   decrementGuessesLeft() {
//     return this.guessesLeft--;
//   }

//   saveGuesses(e) {
//     this.guessesSoFar.push(e.key);
//     return (document.getElementById("guessesSoFar").innerText =
//       this.guessesSoFar.join(" ").toUpperCase());
//   }

//   quitGame() {
//     document.getElementById("modal").hidden = true;
//     document.getElementById("start").hidden = false;
//     document.getElementById("main").hidden = true;
//   }

//   newGame() {
//     game = new Game();
//     game.startGame();
//     document.getElementById("modal").hidden = true;
//   }

//   gameOver() {
//     document.getElementById("modal").innerHTML = this.gameOverModal();
//     document.getElementById("modal").hidden = false;
//     document.removeEventListener("keyup", this.gameLogic);
//     document.getElementById("newGame").addEventListener("click", () => {
//       this.newGame();
//     });
//     document.getElementById("quitGame").addEventListener("click", () => {
//       this.quitGame();
//     });
//   }

//   gameOverModal() {
//     return `
//     <div>
//         <h1>Game Over</h1>
//         </br>
//         <h2> Wins: ${this.wins} Losses: ${this.losses} </h2>
//         <button id = "newGame"> New Game </button>
//         <button id = "quitGame"> Quit </button>
//    </div>
//    `;
//   }

//   newRound() {
//     this.guessesLeft = 10;
//     this.guessesSoFar = [];
//     document.getElementById("guessesLeft").innerText = this.guessesLeft;
//     document.getElementById("guessesSoFar").innerText = this.guessesSoFar;
//     this.getLetterToBeGuessed();
//     console.log(
//       `Starting New Round. New letter to be guessed: ${this.letterToBeGuessed}`
//     );
//   }
// }

// let game;
// document.getElementById("main").hidden = true;

// document.getElementById("start").addEventListener("click", () => {
//   game = new Game();
//   game.startGame();
//   document.getElementById("main").hidden = false;
//   document.getElementById("start").hidden = true;
// });
