const readline = require('readline-sync');
const pressAnyKey = require('press-any-key-sync');

const suits = ['H', 'S', 'C', 'D'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const MAX_HAND_VALUE = 21;
const DEALER_MAX = 17;
const MAX_POINTS = 5;

let deck = [];
let playerCards = [];
let dealerCards = [];
let playerTotal;
let dealerTotal;
let playerScore;
let dealerScore;

function prompt(text) {
  console.log(`\n=> ${text}`);
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

function initializeDeck() {
  // Create the deck of 52 cards from its individual components and shuffle them

  deck.length = 0;

  for (let suit of suits) {
    values.forEach(value => deck.push([suit, value]));
  }

  shuffle(deck);
}

function shuffle(array) {
  // Randomize the cards in the deck
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function total(cards) {
  // Calculate the total value of the cards

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
  // Draw one card from the deck
  player.push(deck.pop());
}

function busted(total) {
  // Check if value of the cards exceeds 21 (MAX_HAND_VALUE)
  return total > MAX_HAND_VALUE;
}

function playersTurn() {
  // Loop that handles the player's turn

  do {
    console.clear();
    displayStats();

    prompt('Hit (h) or stay (s)?');

    while (true) {
      let input = readline.question().toLowerCase();

      if (input === 'hit' || input === 'h') {
        drawCard(playerCards);
        break;
      } else if (input === 'stay' || input === 's') {
        return;
      } else {
        prompt('That is not a valid choice.');
      }
    }
    playerTotal = total(playerCards);

  } while (!busted(playerTotal));
}

function dealersTurn() {
  // Loop that handles the dealer's turn

  do {
    if (dealerTotal < DEALER_MAX) {
      drawCard(dealerCards);
      prompt('Dealer hits!');
      prompt(`Dealer's cards are now: ${displayCards(dealerCards)}`);
    } else {
      prompt('Dealer stays.');
      break;
    }

    dealerTotal = total(dealerCards);

  } while (!busted(dealerTotal));
}

function displayStats() {
  // Display the scores and the cards in each player's hand

  console.log();
  console.log('Welcome to Twenty-One!');
  console.log();
  console.log(`Dealer's Score: ${dealerScore}`);
  console.log(`Your Score: ${playerScore}`);
  console.log();
  console.log(`First player to reach ${MAX_POINTS} wins.`);
  console.log();
  console.log('-------------------------');
  console.log(`Dealer's hand: ${displayOneCard()}`);
  console.log();
  console.log(`Your hand: ${displayCards(playerCards)}`);
  console.log('-------------------------');
  console.log();
  console.log(`Your total card value is: ${playerTotal}`);
}

function drawTwoCards(cardDeck) {
  // Draw two cards from the deck from the beginning of the game

  cardDeck.push(...[deck.pop(), deck.pop()]);
}

function clearHands() {
  // Clear both players' hands

  playerCards.length = 0;
  dealerCards.length = 0;
}

function displayCards(cardDeck) {
  // Display the cards in the player's hand

  let cards = getCardValues(cardDeck);

  cards = `${joinOr(cards, ', ', 'and')}`;

  return cards;
}

function displayOneCard () {
  // Display one card in the dealer's hand. Don't reveal the other card

  let cards = getCardValues(dealerCards);

  return `${cards[0]} and unknown card`;
}

function getCardValues(cardDeck) {
  // Convert the names of cards into their full names

  let cards = cardDeck.map(card => {
    let name = '';

    if (card[1] === 'J') {
      name = 'Jack';
    } else if (card[1] === 'Q') {
      name = 'Queen';
    } else if (card[1] === 'K') {
      name = 'King';
    } else if (card[1] === 'A') {
      name = 'Ace';
    } else {
      name = card[1];
    }

    name = name.concat(getCardSuit(card[0]));

    return name;
  });

  return cards;
}

function getCardSuit(suit) {
  // Convert the suits of cards into their full names

  let name;

  if (suit === 'H') {
    name = ' of Hearts';
  } else if (suit === 'S') {
    name = ' of Spades';
  } else if (suit === 'C') {
    name = ' of Clubs';
  } else if (suit === 'D') {
    name = ' of Diamonds';
  }
  return name;
}

function whoWon () {
  // Check who won the game

  if (busted(playerTotal)) {
    prompt('You busted! The dealer wins.');
    dealerScore += 1;
  } else if (busted(dealerTotal)) {
    prompt('Dealer busted! You win!');
    playerScore += 1;
  } else if (playerTotal > dealerTotal) {
    prompt('You win!');
    playerScore += 1;
  } else if (playerTotal < dealerTotal) {
    prompt('You lose!');
    dealerScore += 1;
  } else if (playerTotal === dealerTotal) {
    prompt("It's a tie!");
  }
}

function displayResults() {
  // Display the results of each round

  console.log();
  console.log('-------------------------');
  console.log(`Dealer has: ${displayCards(dealerCards)}`);
  console.log(`Total: ${dealerTotal}`);
  console.log();
  console.log(`You have: ${displayCards(playerCards)}`);
  console.log(`Total: ${playerTotal}`);
  console.log('-------------------------');
}

function playAgain() {
  // Ask the player if they want to play again

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

function displayFinalResults() {
  // Display the final scores

  console.log();
  console.log('=========================');
  console.log('Final Score');
  console.log('-------------------------');
  console.log(`Dealer: ${dealerScore}`);
  console.log(`You: ${playerScore}`);
  console.log('=========================');
}

// Main loop
do {
  playerScore = 0;
  dealerScore = 0;

  while (true) {
    initializeDeck();

    clearHands();

    // Initial deal
    drawTwoCards(playerCards);
    drawTwoCards(dealerCards);

    playerTotal = total(playerCards);
    dealerTotal = total(dealerCards);

    playersTurn();

    if (!busted(playerTotal)) {
      prompt(`You stayed at: ${playerTotal}`);

      dealersTurn();

      if (!busted(dealerTotal)) {
        prompt(`Dealer stayed at: ${dealerTotal}`);
      }
    }

    displayResults();
    whoWon();

    if (playerScore === MAX_POINTS || dealerScore === MAX_POINTS) break;

    console.log();
    pressAnyKey('Press any key for the next round...');
  }
  displayFinalResults();

} while (playAgain());

console.log('\nThanks for playing!');