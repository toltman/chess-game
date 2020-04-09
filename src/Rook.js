import Piece from "./Piece.js";

class Rook extends Piece {
  constructor(owner, img) {
    super(owner, img);
    this.name = "rook";
  }
}

export default Rook;
