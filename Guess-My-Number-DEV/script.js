'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.score').textContent);
document.querySelector('.score').textContent = 13;
console.log(document.querySelector('.score').textContent);

document.querySelector('.guess').value = 69;
console.log(document.querySelector('.guess').value);
*/

    let secretNum = Math.trunc(Math.random() * 20 ) + 1;
    console.log(secretNum);
    document.querySelector('.number').value = secretNum;
   
    let score = 20;
    let highscore = 0;

    const displayMessage = function (message) {
        document.querySelector('.message').textContent = message;
    }

document.querySelector('.check').addEventListener('click', function () {
    const myGuess = Number(document.querySelector('.guess').value);
    
    //No input or input == 0
    if (!myGuess) {
       displayMessage('No number');
    } 
    // Player wins
    else if (myGuess === secretNum && score > 1){
       displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } 


    // Guess too high or too low
    else if (myGuess !== secretNum) {
        if (score > 1) {
           displayMessage(myGuess > secretNum ?  'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            score = 0;
           displayMessage('You lost!  :(');
            document.querySelector('.score').textContent = score;
            document.querySelector('.number').textContent = 'X';
            document.querySelector('body').style.backgroundColor = 'red';
        }
        
    } 

})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNum = Math.trunc(Math.random() * 20 ) + 1;
   displayMessage('Start guessing...');
    console.log(secretNum);
    document.querySelector('.number').value = secretNum;
    document.querySelector('.score').textContent = score;
            document.querySelector('.number').textContent = '?';
            document.querySelector('.guess').value = '';
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';
})