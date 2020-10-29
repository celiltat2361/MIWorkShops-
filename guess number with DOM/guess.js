const formGame = document.querySelector("#form-game");
//const controlBlog = true;
const resultEl = document.querySelector("#result");
const buttonLo = document.querySelector('#buttonLo')

const secretNumber = (max = 10) => {
  return Math.ceil(Math.random() * max);
};

let number;
let counter;

const newGame = function() {
  number = secretNumber();
  counter = 0;
  document.querySelector('#counter').innerHTML = `Guesses: <strong>${counter}</strong>`
  
  console.log(number);
}

newGame();

formGame.addEventListener("submit", function (e) {
  e.preventDefault();

  counter++;
  document.querySelector('#counter').innerHTML = `Guesses: <strong>${counter}</strong>`
  const guessNumber = Number(document.querySelector("#input-lines").value);

  if (guessNumber === number) {
    resultEl.innerHTML = 'Congratulations!';
  } else if (guessNumber > number) {
    resultEl.innerHTML ="Should be less than " + guessNumber;
  } else if (guessNumber < number) {
    resultEl.innerHTML ="Should be greater than " + guessNumber;
  }
});

buttonLo.addEventListener('click', function(){
  
  newGame();
})