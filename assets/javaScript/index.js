class Game {
  constructor(wins, losses, guessesRemaining, guessedLetters) {
    this.wins = wins;
    this.losses = losses;
    this.guessesRemaining = guessesRemaining;
    this.guessedLetters = guessedLetters;
    this.letterToBeGuessed = this.generateRandomLetter();

    document.addEventListener("keyup", (e) => {
      this.collectGuesses(e.key);
      if (e.key === this.letterToBeGuessed) {
        this.manageWin();
      } else {
        this.manageGuessesRemaining();
      }
      if (this.guessesRemaining === 0) {
        this.manageLoss();
      }
    });
  }

  collectGuesses(guess) {
    this.guessedLetters.push(guess);
    document.querySelector("#guessesSoFar").innerText = this.guessedLetters
      .join(" ")
      .toUpperCase();
  }
  newLetterToGuess() {
    this.guessedLetters = [];
    document.querySelector("#guessesSoFar").innerText = this.guessedLetters;
    this.guessesRemaining = 10;
    document.querySelector("#guessesLeft").innerText = this.guessesRemaining;
    this.letterToBeGuessed = this.generateRandomLetter();
  }
  generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  manageLoss() {
    this.losses++;
    document.querySelector("#losses").innerText = this.losses;
    this.newLetterToGuess();
  }
  manageWin() {
    this.wins++;
    document.querySelector("#wins").innerText = this.wins;
    this.newLetterToGuess();
  }
  manageGuessesRemaining() {
    this.guessesRemaining--;
    document.querySelector("#guessesLeft").innerText = this.guessesRemaining;
  }
}

const startGame = () => new Game(0, 0, 10, []);

document.getElementById("startBtn").addEventListener("click", startGame);

const quit = () => {

}
document.getElementById("quitBtn").addEventListener("click", quit);

