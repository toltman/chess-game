class Player {
  constructor(color) {
    this.color = color;
    this.pieces = this.createPieces();
  }

  createPieces() {
    console.log("creating pieces...");
    const darkBishop = new Bishop();
  }
}
