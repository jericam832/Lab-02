'use strict'
var firstName = prompt('What is your name?');
// console.log('firstName: ', firstName);

alert('Hello ' + firstName + "!");
//Question 1
var stateQuestion= prompt('1. Am I from Florida?');
stateQuestion = stateQuestion.toLowerCase();

if (stateQuestion === 'y' || stateQuestion === 'yes') {
  alert('Ahh! Wrong! I am from the great state of Texas.');
} 
else if (stateQuestion === 'n' || stateQuestion === 'no') {
  alert('You are correct. Thank you.');
  // console.log("You are correct!");
}
 else {
  alert('I don\'t know what that means, but okay.');
}
//Question 2
var favoriteColor = prompt('2. Is my favorite color red?');
favoriteColor = favoriteColor.toUpperCase();

if (favoriteColor === 'Y' || favoriteColor === 'YES') {
  alert('You are correct!');
  // console.log('Correct!');
} else if (favoriteColor === 'N' || favoriteColor === 'NO') {
  alert('Um...wrong! I love the color red.');
} else {
  alert('Invalid response.');
}
//Question 3
var favoriteFood = prompt('3. Is my favorite food pizza?');
favoriteFood = favoriteFood.toLowerCase();

if (favoriteFood === 'n' || favoriteFood === 'no') {
  alert('4.Yep. You know me so well. I love burgers!');
  // console.log('Correct!');
} else if (favoriteFood === 'y' || favoriteFood === 'yes'){
  alert('Nope, but I do like pizza.');
} else {
  alert('Invalid response.');
}

//Question 4
var dogQuestion = prompt('4. Is my dog\'s name Polly?');
dogQuestion = dogQuestion.toLowerCase();

if (dogQuestion === 'n' || dogQuestion === 'no') {
  alert('Yes! You remembered that her name is Joy.');
  // console.log('Correct!');
} else if (dogQuestion === 'y' || dogQuestion === 'yes'){
  alert('Incorrect answer. Her name is Joy.');
} else {
  alert('You entered an invalid answer.');
}
//Question 5
var workBackground = prompt('5. Prior to coming to Code Fellows, did I work as a teacher?');
workBackground = workBackground.toLowerCase();

if (workBackground === 'n' || workBackground === 'no') {
  alert('Right. I worked in IT.');
  // console.log('Right!');
} else if (workBackground === 'y' || workBackground === 'yes') {
  alert('Wrong. I was never a teacher.');
} else {
  alert('It\'s a yes or no question.')
}

var secretNumber = 9;
// var userNumber = prompt(firstName + " please guess my secret number(1-10): ");

for (var guess = 0; guess < 4; guess++) {
  var userNumber = prompt(firstName + " please guess my secret number(1-10): ");

  if (userNumber == secretNumber) {
    alert("Correct! You did it!");
    break;
  }
  if (userNumber < secretNumber) {
    alert("Guess a higher number!");
  }
  if (userNumber > secretNumber) {
    alert("Guess a lower number!");
  }
  if (guess >= 3) {
    alert("Sorry the correct answer is " + secretNumber + "!");
  }
}

alert('That\'s it! Thank you for getting to know me, ' + firstName + '!!!');