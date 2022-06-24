'use strict';
let randomNumber = Math.round(10*Math.random());
let userInput = Number(prompt("Guess a number between 0 and 10.")); //type should be same

switch (userInput) {
    case randomNumber:
        alert('You guessed it right!');
        break;

    default:
        alert(`You are wrong! The number was ${randomNumber}.`);
        break;
}