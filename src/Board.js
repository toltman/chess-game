import Square from "./Square.js";
const colNames = ["a", "b", "c", "d", "e", "f", "g", "h"];

class Board {
  constructor() {
    this.rows = 8;
    this.cols = 8;
    this.squares = this.createSquares();
  }

  /**
   * Gets the Square by the given name
   * @param {String} name - the name of the square in chess notation
   * @returns {Square} - the Square object at the specified location on the board
   */
  getSquare(name) {
    const column = name.charCodeAt(0) - 97;
    const row = name.charAt(1) - 1;
    return this.squares[row][column];
  }

  /**
   * Creates a 2D array of squares
   */
  createSquares() {
    const board = [];
    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let col of colNames) {
        const square = new Square(`${col + (i + 1)}`);
        row.push(square);
      }
      board.push(row);
    }
    return board;
  }

  renderBoard() {
    // Get square color
    const getSquareColor = (row, col) =>
      (row + col) % 2 == 0 ? "white" : "black";

    for (let row = 0; row < 8; row++) {
      let rowDiv = document.createElement("div");
      rowDiv.setAttribute("class", "row");
      document.getElementById("chess-board").appendChild(rowDiv);

      for (let col of colNames) {
        let htmlSquare = document.createElement("div");
        htmlSquare.id = `${col}${row + 1}`;
        htmlSquare.className = `square ${getSquareColor(
          row,
          col.charCodeAt(0)
        )}`;
        rowDiv.appendChild(htmlSquare);
      }
    }
  }

  renderPieces() {
    for (let row = 0; row < this.rows; row++) {
      for (let col of colNames) {
        const piece = this.getSquare(`${col}${row + 1}`).piece;

        if (piece) {
          const htmlPiece = document.createElement("img");
          htmlPiece.src = piece.image;
          htmlPiece.alt = piece.name;
          htmlPiece.draggable = true;
          document.getElementById(`${col}${row + 1}`).appendChild(htmlPiece);
        }
      }
    }
  }
}

export default Board;
