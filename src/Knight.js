import Piece from "./Piece.js";

class Knight extends Piece {
  constructor(owner, img) {
    super(owner, img);
    this.name = "knight";
  }
}

export default Knight;
