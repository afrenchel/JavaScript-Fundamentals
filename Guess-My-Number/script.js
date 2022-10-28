'use strict';
//How to manipulate DOM elements
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number😍';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1; //random numbers until 20
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number⛔'; //if we click the check button without putting a number
    displayMessage('No number⛔'); //function created above
  } else if (guess === secretNumber) {
    displayMessage('Correct number🏆!');
    // document.querySelector('.message').textContent = 'Correct number🏆!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; //if we guess the secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high📈!' : 'Too low📉!';
      displayMessage(guess > secretNumber ? 'Too high📈!' : 'Too low📉!');

      score = score - 1; //score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!💣');
      // document.querySelector('.message').textContent = 'You lost the game!💣';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; //value of a input is always a string
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
