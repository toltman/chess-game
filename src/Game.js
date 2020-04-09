import Player from "./Player.js";
import Board from "./Board.js";

class Game {
  constructor() {
    this.playerWhite = new Player("white");
    this.playerBlack = new Player("black");
    this.board = new Board();
  }

  setUpPieces() {
    for (let i = 0; i < 8; i++) {
      this.board.squares[1][i].piece = this.playerWhite.pawns[i];
    }

    for (let i = 0; i < 8; i++) {
      this.board.squares[6][i].piece = this.playerBlack.pawns[i];
    }

    this.board.getSquare("a1").piece = this.playerWhite.rooks[0];
    this.board.getSquare("b1").piece = this.playerWhite.knights[0];
    this.board.getSquare("c1").piece = this.playerWhite.bishops[0];
    this.board.getSquare("d1").piece = this.playerWhite.queens[0];
    this.board.getSquare("e1").piece = this.playerWhite.king;
    this.board.getSquare("f1").piece = this.playerWhite.bishops[1];
    this.board.getSquare("g1").piece = this.playerWhite.knights[1];
    this.board.getSquare("h1").piece = this.playerWhite.rooks[1];
    this.board.getSquare("a8").piece = this.playerBlack.rooks[0];
    this.board.getSquare("b8").piece = this.playerBlack.knights[0];
    this.board.getSquare("c8").piece = this.playerBlack.bishops[0];
    this.board.getSquare("d8").piece = this.playerBlack.queens[0];
    this.board.getSquare("e8").piece = this.playerBlack.king;
    this.board.getSquare("f8").piece = this.playerBlack.bishops[1];
    this.board.getSquare("g8").piece = this.playerBlack.knights[1];
    this.board.getSquare("h8").piece = this.playerBlack.rooks[1];
  }
}

export default Game;
