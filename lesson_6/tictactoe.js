// Tic-Tac-Toe text game

const INITIAL_MARKER = ' ';
const SCORE_TO_WIN = 3;
const FIRST_TURN = 'choose';    //'player', 'computer', 'choose'

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2] ];

const readline = require('readline-sync');
const pressAnyKey = require('press-any-key-sync');

let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

let playerMarker;
let computerMarker;
let playerScore;
let computerScore;
let currentPlayer;

function prompt(text) {
  console.log(`=> ${text}`);
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  // Custom join function that adds a conjunction at the end

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

function displayGameHeader() {
  // Display the game header

  console.log('');
  console.log(`Player is ${playerMarker}. Computer is ${computerMarker}.`);
  console.log('');
  console.log(`First player to reach a score of ${SCORE_TO_WIN} wins.`);
}

function displayBoard() {
  // Display game information and draw a text outline of the board with the
  // elements of the board array

  console.clear();

  displayGameHeader();

  displayScores();

  console.log('(1)  | (2) |  (3)');
  console.log(`  ${board[0]}  |  ${board[1]}  |  ${board[2]}  `);
  console.log('     |     |     ');
  console.log('-----|-----|-----');
  console.log('(4)  | (5) |  (6)');
  console.log(`  ${board[3]}  |  ${board[4]}  |  ${board[5]}  `);
  console.log('     |     |     ');
  console.log('-----|-----|-----');
  console.log('(7)  | (8) |  (9)');
  console.log(`  ${board[6]}  |  ${board[7]}  |  ${board[8]}  `);
  console.log('     |     |     ');
}

function displayScores() {
  // Display the player's and computer's scores

  console.log('');
  console.log(`Player's Score: ${playerScore}`);
  console.log(`Computer's Score: ${computerScore}`);
  console.log('');
}

function initializeBoard() {
  // Reset all the squares in the board

  board.forEach((_square, index) => {
    board[index] = INITIAL_MARKER;
  });
}

function welcomePlayer() {
  // Welcome the player and begin the game

  console.clear();

  console.log('\nWelcome to Tic-Tac-Toe!\n');

  playerChooseMarker();
}

function whoGoesFirst() {
  // Decide who plays first: the player or the computer

  switch (FIRST_TURN) {
    case 'player':
      currentPlayer = playerMarker;
      break;
    case 'computer':
      currentPlayer = computerMarker;
      break;
    case 'choose':
      currentPlayer = promptWhoGoesFirst();
  }
}

function promptWhoGoesFirst() {
  console.log('');
  prompt("Who should play first? 'Player' or 'computer'?");

  while (true) {
    let choice = readline.question().toLowerCase();

    if (choice === 'player') {
      return playerMarker;
    } else if (choice === 'computer') {
      return computerMarker;
    } else {
      prompt("That is not a valid choice. Please enter 'player' or 'computer'.");
    }
  }
}

function playerChooseMarker() {
  // Ask the player if they want to play as 'X' or 'O'

  prompt('Would you like to be X or O?');

  while (true) {
    playerMarker = readline.question().toUpperCase();

    if (playerMarker === 'X') {
      computerMarker = 'O';
      return;
    } else if (playerMarker === 'O') {
      computerMarker = 'X';
      return;
    } else {
      prompt('Please enter "X" or "O".');
    }
  }
}

function endGame() {
  // Say goodbye and end the game

  console.log('\nThanks for playing! See you again!');
}

function playerTurn() {
  // Ask the player what square they want to place their mark on

  let square;
  let emptySquares = [];

  board.forEach((square, index) => {
    if (square === ' ') {
      emptySquares.push(index + 1);
    }
  });

  prompt(`Choose a square: (${joinOr(emptySquares)})`);

  while (true) {
    square = Number(readline.question().trim());

    if (emptySquares.includes(square)) break;

    prompt('Invalid choice. Please try again.');
  }

  board[square - 1] = playerMarker;
}

function computerTurn() {
  // Let the computer determine where to place its marker

  // First the computer will try to make a winning move
  // If it can't, it will see if it needs to block the player from winning
  // If defending is not necessary, the computer will check if it can mark
  // the middle square
  // Finally, if none of those options are possible, the computer will pick
  // a random square

  if (findAtRiskSquare(computerMarker) !== null) {                // Offense
    board[findAtRiskSquare(computerMarker)] = computerMarker;
  } else if (findAtRiskSquare(playerMarker) !== null) {           // Defense
    board[findAtRiskSquare(playerMarker)] = computerMarker;
  } else if (board[4] === INITIAL_MARKER) {                       // Pick middle square
    board[4] = computerMarker;
  } else {                                                        // Random square
    while (true) {
      let square = Math.floor(Math.random() * 9);

      if (board[square] === INITIAL_MARKER) {
        board[square] = computerMarker;
        return;
      }
    }
  }
}

function findAtRiskSquare(currentMarker) {
  // Find a square that could create a line of three in a row (a winning combo)

  // Loop through winning combos
  // If combo contains 2 of the passed marker and an empty space,
  // return the position of the empty space

  for (let combo of WINNING_COMBOS) {
    let currentCombo = combo.map(square => board[square]);

    if (
      currentCombo.filter(marker => marker === currentMarker).length === 2 &&
      currentCombo.includes(INITIAL_MARKER)
    ) {
      let emptySquare = combo.find(element =>
        board[element] === INITIAL_MARKER
      );

      return emptySquare;
    }
  }

  return null;
}

function chooseSquare(player) {
  // Determine whose turn it is

  if (player === playerMarker) {
    playerTurn();
  } else if (player === computerMarker) {
    computerTurn();
  }
}

function alternatePlayer(player) {
  // Swap the current player

  if (player === playerMarker) {
    return computerMarker;
  } else {
    return playerMarker;
  }
}

function playAgain() {
  // Ask the player if they want to begin a new match

  prompt('Play again? (y/n)');

  while (true) {
    let input = readline.question().toLowerCase();

    if (input === 'y') {
      return true;
    } else if (input === 'n') {
      return false;
    } else {
      console.log('Please input "y" or "n".');
    }
  }
}

function checkWinner(player) {
  // Check if the player or the computer got three in a row (a winning combo)

  // There are 8 possible winning combinations for each player
  // Each combo is stored in an array
  // Loop through the outermost array (each winning combo)
  // Loop through each array element. Each number represents a square on the
  // board
  // If any of the squares in the combo do not match the player's mark,
  // the player did not win
  // Check if the player has a winning combo
  // If not, move on to the next combo

  for (let combo of WINNING_COMBOS) {
    let playerWin = true;

    combo.forEach(square => {
      if (board[square] !== player) {
        playerWin = false;
      }
    });

    if (playerWin) return true;
  }

  return false;
}

function checkScores() {
  // Check if the player won or the computer won

  if (playerScore === SCORE_TO_WIN) {
    console.log('\nGame set! You won!');
    return true;
  } else if (computerScore === SCORE_TO_WIN) {
    console.log('\nGame set! You lost!');
    return true;
  } else {
    return false;
  }
}

function boardFull() {
  // Check if the board is full (game is a tie)

  if (board.includes(INITIAL_MARKER)) {
    return false;
  } else {
    return true;
  }
}

// Main loop
while (true) {
  welcomePlayer();

  playerScore = 0;
  computerScore = 0;

  while (true) {
    initializeBoard();

    whoGoesFirst();

    while (true) {
      displayBoard();

      chooseSquare(currentPlayer);

      if (checkWinner(currentPlayer) || boardFull()) break;

      currentPlayer = alternatePlayer(currentPlayer);
    }

    displayBoard();

    if (checkWinner(playerMarker)) {
      console.log('You won!');
      playerScore += 1;
    } else if (checkWinner(computerMarker)) {
      console.log('You lost!');
      computerScore += 1;
    } else if (boardFull()) {
      console.log("It's a tie!");
    }

    pressAnyKey();

    if (checkScores()) break;
  }

  displayScores();

  if (playAgain() === false) break;
}

endGame();
