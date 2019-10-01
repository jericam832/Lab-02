'use strict'
var firstName = prompt('What is your name?');
console.log('firstName: ', firstName);

alert('Hello ' + firstName + "!");

var stateQuestion= prompt('Am I from Florida?');
stateQuestion = stateQuestion.toLowerCase();

if (stateQuestion === 'y' || stateQuestion === 'yes') {
  alert('Ahh! Wrong! I am from the great state of Texas.');
} 
if (stateQuestion === 'n' || stateQuestion === 'no') {
  alert('You are correct. Thank you.');
  console.log("You are correct!");
}
 else {
  alert('I don\'t know what that means, but okay.');
}
