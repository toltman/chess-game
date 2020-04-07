import Pawn from "./Pawn.js";
import Bishop from "./Bishop.js";
import Knight from "./Knight.js";
import Rook from "./Rook.js";
import Queen from "./Queen.js";
import King from "./King.js";

class Player {
  constructor(color) {
    this.color = color;
    this.pawns = this.createPawns();
    this.bishops = this.createBishops();
    this.knights = this.createKnights();
    this.rooks = this.createRooks();
    this.queens = this.createQueen();
    this.king = new King();
  }

  createPawns() {
    const pawns = [];
    for (let i = 0; i < 8; i++) {
      const pawn = new Pawn();
      pawns.push(pawn);
    }
    return pawns;
  }

  createBishops() {
    const bishops = [];
    for (let i = 0; i < 2; i++) {
      const bishop = new Bishop();
      bishops.push(bishop);
    }
    return bishops;
  }

  createKnights() {
    const knights = [];
    for (let i = 0; i < 2; i++) {
      const knight = new Knight();
      knights.push(knight);
    }
    return knights;
  }

  createRooks() {
    const rooks = [];
    for (let i = 0; i < 2; i++) {
      const rook = new Rook();
      rooks.push(rook);
    }
    return rooks;
  }

  createQueen() {
    const queens = [];
    const queen = new Queen();
    queens.push(queen);
    return queens;
  }
}

export default Player;
