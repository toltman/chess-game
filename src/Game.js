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

    this.board.squares[0][0].piece = this.playerWhite.rooks[0];
    this.board.squares[0][1].piece = this.playerWhite.knights[0];
    this.board.squares[0][2].piece = this.playerWhite.bishops[0];
    this.board.squares[0][3].piece = this.playerWhite.queens[0];
    this.board.squares[0][4].piece = this.playerWhite.king;
    this.board.squares[0][5].piece = this.playerWhite.bishops[1];
    this.board.squares[0][6].piece = this.playerWhite.knights[1];
    this.board.squares[0][7].piece = this.playerWhite.rooks[1];

    this.board.squares[7][0].piece = this.playerBlack.rooks[0];
    this.board.squares[7][1].piece = this.playerBlack.knights[0];
    this.board.squares[7][2].piece = this.playerBlack.bishops[0];
    this.board.squares[7][3].piece = this.playerBlack.queens[0];
    this.board.squares[7][4].piece = this.playerBlack.king;
    this.board.squares[7][5].piece = this.playerBlack.bishops[1];
    this.board.squares[7][6].piece = this.playerBlack.knights[1];
    this.board.squares[7][7].piece = this.playerBlack.rooks[1];
  }
}

export default Game;
