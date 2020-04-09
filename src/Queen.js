import Piece from "./Piece.js";

class Queen extends Piece {
  constructor(owner, img) {
    super(owner, img);
    this.name = "queen";
  }
}

export default Queen;
