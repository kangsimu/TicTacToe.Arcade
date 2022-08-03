//entering each player names before starting game
let player1Name = window.prompt("Enter Player 1's name!");
let player2Name = window.prompt("Enter Player 2's name!");

//changing player names on display
let player1 = document.getElementsByClassName("player1")[0];
player1.innerHTML = player1Name
let player2 = document.getElementsByClassName("player2")[0];
player2.innerHTML = player2Name

