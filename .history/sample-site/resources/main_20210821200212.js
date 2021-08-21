let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh'); 

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if(guessCount === 1) guesses.textContent = '上次猜的数';
    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber) {
        lastResult.textContent = '恭喜你, 猜对了!';
        lastResult.getElementsByClassName.backgroundcolor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    }
}