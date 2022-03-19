// set letterToGuess span

// startBtn.addEventListener("click", setLetterToGuess);

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// if statement : if player.status === "win" or if === "loss" then invoke restartGame()
// restartGame will set guessedLettersArray to empty
// restartGame will set a new letterToGuess
// restartGame will set guessesLeft to 10
// restartGame will increment win or loss

// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

class Game {
  constructor(wins, losses, guessesLeft, guessesSoFar) {
    this.wins = wins;
    this.losses = losses;
    this.guessesLeft = guessesLeft;
    this.guessesSoFar = guessesSoFar;
  }

  resetStats() {
    this.wins = 0;
    this.losses = 0;
    this.guessesLeft = 10;
    this.guessesSoFar = [];
  }

  displayGame() {
    winsEl.innerText = this.wins;
    lossesEl.innerText = this.losses;
    guessesLeftEl.innerText = this.guessesLeft;
  }

  getRandomLetterToBeGuessed() {
    // get random letter
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return alphabet[Math.floor(Math.random() * alphabet.length)];
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
}

const newGame = new Game(0, 0, 10, []);
const guessesSoFarEl = document.getElementById("guessesSoFar");
const guessesLeftEl = document.getElementById("guessesLeft");
const letterToGuessEl = document.getElementById("letterToGuess");
const letterToBeGuessed = newGame.getRandomLetterToBeGuessed();
const winsEl = document.getElementById("wins");
const lossesEl = document.getElementById("losses");

document.addEventListener("keyup", (e) => {
  if (e.key === letterToBeGuessed) {
    newGame.incrementWins();
    winsEl.innerText = newGame.wins;
  } else {
    newGame.decrementGuessesLeft();
    guessesLeftEl.innerText = newGame.guessesLeft;

    newGame.guessesSoFar.push(e.key);
    guessesSoFarEl.innerText = newGame.guessesSoFar.join(" ");
  }
});

console.log(letterToBeGuessed);
const startBtn = document.getElementById("start");

startBtn.addEventListener("click", () => {
  newGame.getRandomLetterToBeGuessed();
  newGame.displayGame();
});
