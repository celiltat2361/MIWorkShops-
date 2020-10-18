const game = () => {
  let guesses = 0;
  let number = 0;
  let newHighScore;
  // let scores = [];
  let highScore = 0;
  let theSecretNumber = Math.floor(Math.random() * 10 + 1);
 
  while (true) {
    number = prompt(`Please enter a number between 1 and 10`);
    guesses++;

    newHighScore = guesses;
    if (number == theSecretNumber) {
      if (highScore === 0) {
        highScore = guesses;
      }
      if (newHighScore < highScore) {
        highScore = newHighScore;
      }

      alert(
        `Congratulations! ${guesses}. guess. Your High Score is ${highScore}!!!`
      );
      theSecretNumber = Math.floor(Math.random() * 10 + 1);
      guesses = 0;
    } else if (number > theSecretNumber) {
      alert("Should be less than " + number);
    } else if (number < theSecretNumber && number != 0) {
      alert("Should be greater than " + number);
    }
    if (number == 0) {
      alert("Thanks, your high score is: " + highScore);
      break;
    }
  }
};

game();
