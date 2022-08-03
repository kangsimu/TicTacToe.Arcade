//entering each player names before starting game
let player1Name = window.prompt("Enter Player 1's name!");
let player2Name = window.prompt("Enter Player 2's name!");

//changing player names on display
let player1 = document.getElementsByClassName("player1")[0];
player1.innerHTML = player1Name
let player2 = document.getElementsByClassName("player2")[0];
player2.innerHTML = player2Name

//alright, let's go TicTacToe

//using an event listener for DOM content
window.addEventListener('DOMContentLoaded', () => {
    
//add the querys that will be used
    const cells = Array.from(document.querySelectorAll('.cell'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#restart');
    const announcer = document.querySelector('.announcer');

//creating variables needed for game 
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

//constant string values for endgame state
    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    
// Indexes within the board, starts with O remember that 
// [0] [1] [2]
// [3] [4] [5]
// [6] [7] [8]
    
//list the winning conditions
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

//attaching event listener to all cells 
    cells.forEach( (cell, index) => {
        cell.addEventListener('click', () => userAction(cell, index));
    });


//event listener
    resetButton.addEventListener('click', resetBoard);
});

