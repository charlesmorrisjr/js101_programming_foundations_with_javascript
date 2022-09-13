/* Tic-Tac-Toe text game

  Steps:

  1. Display empty 3 x 3 board
  2. Ask player to mark a square
  3. Computer marks a square
  4. Display updated board
  5. Determine if player or computer has won
  6. If so, display winner
  7. If not, check if board is full. If board is full, display tie
  8. If board is not full and neither player won yet, return to step 2
  9. Ask if player wants to play again
  10. If yes, return to step one.
  11. Goodbye!
*/

function displayBoard() {
  // Draw a text outline of the board with the elements of the board array

  console.clear();
  
  console.log('');
  console.log(`Player is ${playerMarker}. Computer is ${computerMarker}.`)
  console.log('');
  console.log(`First player to reach a score of ${SCORE_TO_WIN} wins.`)
  
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
  console.log('');
  console.log(`Player's Score: ${playerScore}`);
  console.log(`Computer's Score: ${computerScore}`);
  console.log('');
}

function initializeBoard() {
  board.forEach((_square, index) => board[index] = INITIAL_MARKER);
}

function welcomePlayer() {
  console.clear();
  
  console.log('\nWelcome to Tic-Tac-Toe!');
  console.log('\nWould you like to be X or O?')

  playerChooseMarker();
}

function playerChooseMarker() {
  while (true) {
    playerMarker = readline.question().toUpperCase();

    if (playerMarker === 'X') {
      computerMarker = 'O';
      return;
    } else if (playerMarker === 'O') {
      computerMarker = 'X';
      return;
    } else {
      console.log('Please enter "X" or "O".');
    }
  }
}

function endGame() {
  console.log('\nThanks for playing! See you again!');
}

function playerTurn() {
  console.log('Where would you like to place your mark? Enter a number from 1-9:');
  
  while (true) {
    let square = readline.question();

    if ((square.match(/[^1-9]/g) !== null) || square.length !== 1) {
      console.log('Please enter a number from 1-9: ')
    } else if (board[square - 1] !== INITIAL_MARKER) {
      console.log('That square is already taken. Please enter a different number: ')
    } else {
      board[square - 1] = playerMarker;
      return;
    }
  }
}

function computerTurn() {
  while (true) {
    let square = Math.floor(Math.random() * 9);

    if (board[square] === INITIAL_MARKER) {
      board[square] = computerMarker;
      return;
    }
  }
}

function chooseSquare(player) {
  if (player === playerMarker) {
    playerTurn();
  } else if (player === computerMarker) {
    computerTurn();
  }
}

function alternatePlayer(player) {
  if (player === playerMarker) {
    return computerMarker;
  } else if (player === computerMarker) {
    return playerMarker;
  }
}

function playAgain() {
  console.log('\nPlay again? (y/n)');

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
  // There are 8 possible winning combinations for each player
  // Each combo is stored in an array
  // Loop through the outermost array (each winning combo)
  // Loop through each array element. Each number represents a square on the board
  // If any of the squares in the combo do not match the player's mark, the player did not win
  // Check if the player has a winning combo
  // If not, move on to the next combo

  let playerWin;

  for (combo of WINNING_COMBOS) {
    playerWin = true;

    combo.forEach(square => {
      if (board[square - 1] !== player) {
        playerWin = false;
      };
    });

    if (playerWin) return true;
  };
  
  return false;
}

function checkScores(player) {
  if (playerScore === SCORE_TO_WIN) {
    console.log('Game set! You won!');
    return true;
  } else if (computerScore === SCORE_TO_WIN) {    
    console.log('Game set! You lost!');
    return true;
  }
}

function boardFull() {
  if (board.includes(INITIAL_MARKER)) {
    return false;
  } else {
    return true;
  }
}

const WINNING_COMBOS = [ [1, 2, 3],
                         [4, 5, 6],
                         [7, 8, 9],
                         [1, 4, 7],
                         [2, 5, 8],
                         [3, 6, 9],
                         [1, 5, 9],
                         [7, 5, 3] ]

const INITIAL_MARKER = ' ';
const SCORE_TO_WIN = 5;

const readline = require('readline-sync');
const pressAnyKey = require('press-any-key-sync');

let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
// let board = ['X', 'X', 'O', 'O', 'O', 'X', 'X', ' ', 'O'];

let playerMarker;
let computerMarker;
let playerScore;
let computerScore;

// Main loop
while (true) {
  welcomePlayer();

  playerScore = 0;
  computerScore = 0;

  while (true) {
    
    initializeBoard();
    let currentPlayer = playerMarker;
    
    while (true) {
      displayBoard();
      
      chooseSquare(currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);

      if (checkWinner(currentPlayer) || boardFull()) break;
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
  
  if (playAgain() === false) break;
}

endGame();
