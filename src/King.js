import Piece from "./Piece.js";

class King extends Piece {
  constructor(owner, img) {
    super(owner, img);
    this.name = "king";
  }
}

export default King;
