import Player from "./Player.js";
import Board from "./Board.js";

class Game {
  constructor() {
    this.playerWhite = new Player();
    this.playerBlack = new Player();
    this.board = new Board();
    //setUpPieces();
  }

  setUpPieces() {}
}

export default Game;
