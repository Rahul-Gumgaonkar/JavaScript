let randomNumber = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const input = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

// Check the value is between 1 to 100 or not
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1 || guess > 100) {
    input.value = "";
    alert("Please Enter a Number Between 1 to 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame(guess);
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Check the guess that the value is correctly guess or not
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your guessed is right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  input.value = "";
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = Math.round(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    input.removeAttribute("disabled");
    startOver.removeChild(p);
    lowOrHi.innerHTML = "";
    playGame = true;
  });
}

function endGame() {
  input.value = "";
  input.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
