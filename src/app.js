import Game from "./Game.js";

// const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
const board = document.getElementById("chess-board");

// Maps letters onto numbers
// const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1;

// Get square color
const getSquareColor = (row, col) =>
  (row + col + 1) % 2 == 0 ? "white" : "black";

for (let row = 0; row < 8; row++) {
  let rowDiv = document.createElement("div");
  rowDiv.setAttribute("class", "row");
  board.appendChild(rowDiv);

  for (let col = 0; col < 8; col++) {
    let htmlSquare = document.createElement("div");
    htmlSquare.id = `${col}-${row}`;
    htmlSquare.className = `square ${getSquareColor(row, col)}`;
    rowDiv.appendChild(htmlSquare);
  }
}

const game = new Game();
console.log(game);

game.setUpPieces();
game.board.renderPieces();
