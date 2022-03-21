// // set letterToGuess span

// // startBtn.addEventListener("click", setLetterToGuess);

// // 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// // if statement : if player.status === "win" or if === "loss" then invoke restartGame()
// // restartGame will set guessedLettersArray to empty
// // restartGame will set a new letterToGuess
// // restartGame will set guessesLeft to 10
// // restartGame will increment win or loss

// // 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

// class Game {
//   constructor(wins, losses, guessesLeft, guessesSoFar) {
//     this.wins = wins;
//     this.losses = losses;
//     this.guessesLeft = guessesLeft;
//     this.guessesSoFar = guessesSoFar;
//   }

//   resetStats() {
//     this.wins = 0;
//     this.losses = 0;
//     this.guessesLeft = 10;
//     this.guessesSoFar = [];
//   }

//   displayGame() {
//     winsEl.innerText = this.wins;
//     lossesEl.innerText = this.losses;
//     guessesLeftEl.innerText = this.guessesLeft;
//   }

//   getRandomLetterToBeGuessed() {
//     // get random letter
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";

//     return alphabet[Math.floor(Math.random() * alphabet.length)];
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

//   gameOver() {
//     document.removeEventListener("keyup", listenForLetterToBeGuessed);
//     // this.gameOverModal();
//     console.log(this.gameOverModal());
//   }

//   gameOverModal() {
//     return `
//     <div>
//     <h1>Game Over</h1>
//    <h4> You are out guesses! </h4>
//    <h2> Wins: ${this.wins} Losses: ${this.losses} </h2>
//    <button id = "startOver"> New Game </button>
//    <button id = "quit"> Quit </button>
//    </div>
//    `;
//   }
// }

// const guessesSoFarEl = document.getElementById("guessesSoFar");
// const guessesLeftEl = document.getElementById("guessesLeft");
// const letterToGuessEl = document.getElementById("letterToGuess");
// const winsEl = document.getElementById("wins");
// const lossesEl = document.getElementById("losses");
// const startBtn = document.getElementById("start");
// const quitBtn = document.getElementById("quit");
// let letterToBeGuessed;

// startBtn.addEventListener("click", () => {
//   const newGame = new Game(0, 0, 10, []);
//   document.getElementById("modal").innerHTML = null;
//   letterToBeGuessed = newGame.getRandomLetterToBeGuessed();
//   console.log(letterToBeGuessed);
//   newGame.displayGame();
//   document.addEventListener("keyup", listenForLetterToBeGuessed(e, newGame));
// });
// quitBtn.addEventListener("click", () => {
//   newGame.gameOver();
//   newGame.resetStats();
//   winsEl.innerText = "";
//   guessesLeftEl.innerText = "";
//   guessesSoFarEl.innerText = "";
//   lossesEl.innerText = "";
// });
// const listenForLetterToBeGuessed = (e, newGame) => {
//   console.log(letterToBeGuessed);
//   if (e.key === letterToBeGuessed) {
//     newGame.incrementWins();
//     winsEl.innerText = newGame.wins;
//     letterToBeGuessed = newGame.getRandomLetterToBeGuessed();
//     console.log(letterToBeGuessed);
//     newGame.guessesLeft = 10;
//     guessesLeftEl.innerText = newGame.guessesLeft;
//     newGame.guessesSoFar = [];
//     guessesSoFarEl.innerText = newGame.guessesSoFar;
//   } else {
//     newGame.decrementGuessesLeft();
//     guessesLeftEl.innerText = newGame.guessesLeft;

//     newGame.guessesSoFar.push(e.key.toUpperCase());
//     guessesSoFarEl.innerText = newGame.guessesSoFar.join(" ");
//   }

//   if (newGame.guessesLeft === 0) {
//     newGame.incrementLosses();
//     lossesEl.innerText = newGame.losses;

//     letterToBeGuessed = newGame.getRandomLetterToBeGuessed();
//     console.log(letterToBeGuessed);
//     newGame.guessesLeft = 10;
//     guessesLeftEl.innerText = newGame.guessesLeft;

//     newGame.guessesSoFar = [];
//     guessesSoFarEl.innerText = newGame.guessesSoFar;
//   }
//   if (newGame.losses === 5) {
//     newGame.gameOver();
//     document.getElementById("modal").innerHTML = newGame.gameOverModal();
//   }
// };

// document.addEventListener("keyup", listenForLetterToBeGuessed);
