const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
const board = document.getElementById("chess-board");

// Maps letters onto numbers
const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1;

// Get square color
const getSquareColor = (row, col) =>
  (row + alphaVal(col)) % 2 == 0 ? "white" : "black";

for (let row = 0; row < 8; row++) {
  let rowDiv = document.createElement("div");
  rowDiv.setAttribute("class", "row");
  board.appendChild(rowDiv);

  for (let col of cols) {
    let htmlSquare = document.createElement("div");
    htmlSquare.id = `${col}${row + 1}`;
    htmlSquare.className = `square ${getSquareColor(row, col)}`;
    rowDiv.appendChild(htmlSquare);
  }
}

imgWhiteKing = document.createElement("img");
imgWhiteKing.src = require("../images/Chess_klt60.png");
imgWhiteKing.className = "src";
imgWhiteKing.alt = "White King";
imgWhiteKing.width = "60";

document.getElementById("e1").appendChild(imgWhiteKing);
