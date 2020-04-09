import Piece from "./Piece.js";

class Bishop extends Piece {
  constructor(owner, img) {
    super(owner, img);
    this.name = "bishop";
  }
}

export default Bishop;
