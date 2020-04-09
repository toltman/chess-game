import Piece from "./Piece.js";

class Pawn extends Piece {
  constructor(owner, img) {
    super(owner, img);
    this.name = "pawn";
  }
}

export default Pawn;
