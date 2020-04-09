import Game from "./Game.js";

const board = document.getElementById("chess-board");

const game = new Game();

game.board.renderBoard();
game.setUpPieces();
game.board.renderPieces();

document
  .getElementById("chess-board")
  .addEventListener("mousedown", function (e) {
    let div;
    if (e.target.nodeName === "IMG") {
      div = e.target.parentNode;
    } else {
      div = e.target;
    }
    console.log(game.board.getSquare(div.id).piece);
  });
