//Text-Based Game

var name = prompt('please enter your name');
alert(name);

alert('Attention! You are deserted on an island due to a plane crash. You wake up randomly and find yourself lost. There are wild animals and tribe-cannibals on the island and unfortunately you are helpless as you have no tools to survive. In order to get back home you would have to go through the jungle. So go roam around this dangerous island to look for other poeple, weapons and food to survive and finally find the boat to go back home!');

var yes = prompt('So do you want to enter the jungle?');
if (yes == "yes") {
  alert('You entered the jungle');
} else {
  alert('you just got chased and eaten by a jaguar, goodluck next time!');
}

alert('you see a knife');
var yes = prompt('Do you want to pick it up?');
if (yes == "yes") {
  alert('you just picked up a knife');
} else {
  alert('You just missed out on an essential surivival tool which means you are no more safe sorry, good luck next time!');
}

alert('You see a tribe-man')
var attack = prompt('Are you going to attack him or run away?');
if (attack == 'attack') {
  alert('Unfortunately the tribe-man was too strong and therefore he killed you and ate you, good luck next time!');
} else {
  alert('Welldone you made the right choice');
}

alert('you see a chicken')
var yes = prompt('Are you going to kill it?');
if (yes == 'yes') {
  alert('Congrats you just made some food and satisfied your hunger');
} else {
  alert('Unfortunately you starved yourself to death, good luck next time!');
}

alert('you just found another person')
var yes = prompt('Are you going to talk to that person?');
if (yes == 'yes') {
  alert('You just made a friend');
} else {
  alert('Unfortunatley you missed out on a helping hand and you lost the game. good luck next time!');
}

alert('you finally found a boat')
var yes = prompt('are you going to get on it?');
if (yes == 'yes') {
  alert('Congrats! you found your home back and completed this game!');
} else {
  alert('Unfortunatley you missed the boat, GAME OVER!');
}










