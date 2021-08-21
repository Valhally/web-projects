let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh'); 

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    let userGuess = Number(guessField.value);
    if(guessCount === 1) guesses.textContent = '上次猜的数: ';
    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber) {
        lastResult.textContent = '恭喜你, 猜对了!';
        //lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    } else if(guessCount === 10) {
        lastResult.textContent = '!!!Game Over!!!';
        setGameOver();
    } else {
        lastResult.textContent = '你猜错了!';
        //lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) 
            lowOrHigh.textContent = '你猜低了!';
        else
            lowOrHigh.textContent = '你猜高了!';
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0; i < resetParas.length; ++i) 
    resetParas[i].textContent = '';

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}