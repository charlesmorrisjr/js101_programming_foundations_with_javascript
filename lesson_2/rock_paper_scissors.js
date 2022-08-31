/* eslint-disable key-spacing */
const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const SHORT_CHOICES = ['r', 'p', 'sc', 'l', 'sp'];
const MAX_ROUNDS = 5;

const WINNING_COMBOS = {
  rock:     ['scissors',  'lizard'],
  paper:    ['rock',      'spock'],
  scissors: ['paper',     'lizard'],
  lizard:   ['paper',     'spock'],
  spock:    ['rock',      'scissors'],
};

let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function tallyScore(winner) {
  if (winner === 'player') {
    playerScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. The computer chose ${computerChoice}.`);

  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
    tallyScore('player');
  } else if (choice === computerChoice) {
    prompt("It's a tie.");
  } else {
    prompt('You lose!');
    tallyScore('computer');
  }
}

function displayGrandWinner() {
  prompt('\nFinal Score:');
  prompt(`Player: ${playerScore}, Computer: ${computerScore}\n`);

  if (playerScore > computerScore) {
    prompt('You win!');
  } else if (playerScore < computerScore) {
    prompt('You lose!');
  } else {
    prompt("It's a tie.");
  }
}

for (let currentRound = 1; currentRound <= MAX_ROUNDS; currentRound++) {
  prompt(`Player: ${playerScore}, Computer: ${computerScore}\n`);

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt(`You can enter the full name, or used shortened input: ${SHORT_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!(VALID_CHOICES.includes(choice) || SHORT_CHOICES.includes(choice))) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  // If player inputs a short-form choice, change it to the equivalent choice in the full list
  if (SHORT_CHOICES.includes(choice)) {
    choice = VALID_CHOICES[SHORT_CHOICES.indexOf(choice)];
  }

  const randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  const computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  if (currentRound < MAX_ROUNDS) {
    prompt('Do you want to play again? (y/n)');
    let playAgain = readline.question().toLowerCase();
    while (playAgain !== 'y' && playAgain !== 'n') {
      prompt('Please enter "y" or "n".');
      playAgain = readline.question().toLowerCase();
    }

    if (playAgain === 'n') break;
  }
}

displayGrandWinner();
