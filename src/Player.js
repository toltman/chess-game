import Pawn from "./Pawn.js";
import Bishop from "./Bishop.js";
import Knight from "./Knight.js";
import Rook from "./Rook.js";
import Queen from "./Queen.js";
import King from "./King.js";
import images from "./images/*.png";

class Player {
  constructor(color) {
    this.color = color;
    this.pawns = this.createPawns();
    this.bishops = this.createBishops();
    this.knights = this.createKnights();
    this.rooks = this.createRooks();
    this.queens = this.createQueen();
    this.king = this.createKing();
  }

  createPawns() {
    const pawns = [];
    const pawn_img =
      this.color === "white" ? images.Chess_plt60 : images.Chess_pdt60;

    for (let i = 0; i < 8; i++) {
      const pawn = new Pawn(this, pawn_img);
      pawns.push(pawn);
    }
    return pawns;
  }

  createBishops() {
    const bishops = [];
    const bishop_img =
      this.color === "white" ? images.Chess_blt60 : images.Chess_bdt60;
    for (let i = 0; i < 2; i++) {
      const bishop = new Bishop(this, bishop_img);
      bishops.push(bishop);
    }
    return bishops;
  }

  createKnights() {
    const knights = [];
    const knight_img =
      this.color === "white" ? images.Chess_nlt60 : images.Chess_ndt60;
    for (let i = 0; i < 2; i++) {
      const knight = new Knight(this, knight_img);
      knights.push(knight);
    }
    return knights;
  }

  createRooks() {
    const rooks = [];
    const rook_img =
      this.color === "white" ? images.Chess_rlt60 : images.Chess_rdt60;
    for (let i = 0; i < 2; i++) {
      const rook = new Rook(this, rook_img);
      rooks.push(rook);
    }
    return rooks;
  }

  createQueen() {
    const queens = [];
    const queen_img =
      this.color === "white" ? images.Chess_qlt60 : images.Chess_qdt60;
    const queen = new Queen(this, queen_img);
    queens.push(queen);
    return queens;
  }

  createKing() {
    const king_img =
      this.color === "white" ? images.Chess_klt60 : images.Chess_kdt60;
    const king = new King(this, king_img);
    return king;
  }
}
export default Player;
