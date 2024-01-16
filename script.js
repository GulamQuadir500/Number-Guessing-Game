'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highSCore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// When Players Click on 'Check' Button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No Number!');

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highSCore) {
            highSCore = score;
            document.querySelector('.highscore').textContent = highSCore;
        }


        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// When Players clicks on 'Again' Button
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');

});