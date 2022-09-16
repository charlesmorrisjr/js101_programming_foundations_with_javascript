const readline = require('readline-sync');

const suits = ['H', 'S', 'C', 'D'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const MAX_HAND_VALUE = 21;
const DEALER_MAX = 17;

let deck = [];
let playerCards = [];
let dealerCards = [];

function prompt(text) {
  console.log(`=> ${text}`);
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function initializeCards() {
  for (let suit of suits) {
    values.forEach(value => deck.push([suit, value]));
  }

  shuffle(deck);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function total(cards){
  let values = cards.map(card => card[1]);

  let sum = 0;
  
  values.forEach(value => {
    if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else if (value === 'A') {
      sum += 11;
    } else {
      sum += Number(value);
    }
  });

  // Correct for aces
  values.filter(value => value === 'A').forEach(_ => {
    if (sum > MAX_HAND_VALUE) sum -= 10;
  });

  return sum;
}

function drawCard(player) {
  let cardIndex = 0;

  player.push(deck[cardIndex]);

  deck.splice(cardIndex, 1);
}

function busted(player) {
  if (total(player) > MAX_HAND_VALUE){
    return true;
  }
}

function playersTurn() {
  while (true) {
    console.log();
    prompt('Hit (h) or stay (s)?');
    let input = readline.question().toLowerCase();
    if (input === 'hit' || input === 'h') {
      drawCard(playerCards);
      break;
    } else if (input === 'stay' || input === 's' || busted(playerCards)) {
      prompt('You chose to stay.');
      break;
    } else {
      prompt('That is not a valid choice.')
    }
  }
}

function dealersTurn() {
  if (total(dealerCards) < DEALER_MAX) {
    drawCard(dealerCards);
  } else {
    prompt('Dealer stays.')
  }
}

function displayHands() {
  console.clear();
  console.log();
  
  console.log(`Dealer's hand: ${displayOneCard()}`);
  console.log(`Your hand: ${displayCards(playerCards)}`);
}

function drawTwoCards(cardDeck) {
  drawCard(cardDeck);
  drawCard(cardDeck);
}

function clearDeck(cardDeck) {
  cardDeck.length = 0;
}

function displayCards (cardDeck) {
  let cards = [];
  
  if (cardDeck.length) {
    cards = getCardValues(cardDeck);  

    cards = `${joinOr(cards, ', ', 'and')}`;
  } else {
    cards = 'Nothing'
  }
  
  return cards;
}

function displayOneCard () {
  let cards;
  
  if (dealerCards.length) {
    cards = getCardValues(dealerCards);

    if (dealerCards.length === 2) {
      cards = `${cards[0]} and unknown card`;
    } else if (dealerCards.length > 2) {
      cards = `${cards[0]} and ${dealerCards.length - 1} unknown cards`;
    }
  } else {
    cards = 'Nothing'
  }
  
  return cards;
}

function getCardValues(cardDeck) {
  cards = cardDeck.map(card => {
    if (card[1] === 'J') {
      return 'Jack';
    } else if (card[1] === 'Q') {
      return 'Queen';
    } else if (card[1] === 'K') {
      return 'King';
    } else if (card[1] === 'A') {
      return 'Ace';
    } else {
      return card[1];
    }
  });

  return cards;
}

function whoWon (winner) {  
  if (busted(playerCards) === true || winner === 'dealer') {
    displayHands();
    prompt('You busted! The dealer wins. Game over!')
    return true;
  } else if (busted(dealerCards) === true || winner === 'player') {
    displayHands();
    prompt('Dealer busted! You win!')
    return true;
  }
  
  return false;
}

function checkIfBothStay() {
  if (oldPlayerTotal === total(playerCards) && oldDealerTotal === total(dealerCards)) {
    if (total(playerCards) > total(dealerCards)) {
      whoWon('player');
      return true;
    } else if (total(playerCards) < total(dealerCards)) {
      whoWon('dealer');
      return true;
    } else if (total(playerCards) === total(dealerCards) && total(playerCards) > 0) {
      prompt("It's a tie!");
      return true;
    }
  }
  return false;
}

function displayResults() {
  console.log('');
  console.log('-------------------------');
  console.log(`Dealer has: ${displayCards(dealerCards)} for a total of: ${total(dealerCards)}`);
  console.log(`You have: ${displayCards(playerCards)} for a total of: ${total(playerCards)}`);
  console.log('-------------------------');
  console.log('');
}

function playAgain() {
  prompt('Play again? (y/n)');
  
  while (true) {
    let input = readline.question().toLowerCase();
    
    if (input === 'y') {
      return true;
    } else if (input === 'n') {
      return false;
    } else {
      prompt('That choice is not valid.');
    }
  }
}

let oldPlayerTotal = 0;
let oldDealerTotal = 0;

// Main loop
while (true) {  
  
  console.log();
  console.log('Welcome to Twenty-One!')
  
  initializeCards();
  
  clearDeck(playerCards);
  clearDeck(dealerCards);
  
  oldPlayerTotal = 0;
  oldDealerTotal = 0;
  
  while (true) {
    if (checkIfBothStay()) break;
    
    displayHands();

    oldPlayerTotal = total(playerCards);
    oldDealerTotal = total(dealerCards);
    
    playersTurn();
    if (whoWon()) break;

    dealersTurn();
    if (whoWon()) break;
  }
  
  displayResults();

  if (!playAgain()) break;
}

console.log('Thanks for playing!');
