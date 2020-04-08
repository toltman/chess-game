import Square from "./Square.js";
const colNames = ["a", "b", "c", "d", "e", "f", "g", "h"];

class Board {
  constructor() {
    this.rows = 8;
    this.cols = 8;
    this.squares = this.createSquares();
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

  renderPieces() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const piece = this.squares[row][col].piece;

        if (piece) {
          const htmlPiece = document.createElement("img");
          htmlPiece.src = piece.image;
          htmlPiece.alt = "img";
          document.getElementById(`${col}-${row}`).appendChild(htmlPiece);
        }
      }
    }
  }
}

export default Board;
