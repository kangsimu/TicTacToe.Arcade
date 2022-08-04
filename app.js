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
//attaching event listener to all cells 
    cells.forEach( (cell, index) => {
        cell.addEventListener('click', () => userAction(cell, index));
    });

//implenting the user action function
    const userAction = (cell, index) => {
        if(isValidAction(cell) && isGameActive) {
            cell.innerText = currentPlayer;
            cell.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }
//changing player turns and displaying current player 
    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

//checking whether the cell has a value already so the player can only play on empty cels
    const isValidAction = (cell) => {
        if (cell.innerText === 'X' || cell.innerText === 'O'){
            return false;
        }
        return true;
    };

//let's go ahead and announce the winner now 
    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };

//checking if the game has a winner or not, go through win condition array
    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
        } if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        } if (!board.includes(''))
            announce(TIE);
    }

//updating the board function    
const updateBoard =  (index) => {
    board[index] = currentPlayer;
}

//restarting the board/game






//event listener
    resetButton.addEventListener('click', resetBoard);
});

