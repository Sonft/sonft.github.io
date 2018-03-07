let squares;
let blackWhite;
let inPlay;
let piecePositionX, piecePositionY;

function setup() {
  piecePositionX = 50;
  piecePositionY = 50;
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  squares = width / 8;
  blackWhite = false;
}

function draw() {
  background(255);
  drawBoard(); //This is the chessboard code that we got shown in class
  defaultPositions();
}

function defaultPositions() {
  pawns();
  kings();
}

function pawns() {
  ellipse(piecePositionX, piecePositionY, 50);
  if (piecePositionX - 10 < mouseX < piecePositionX + 10 && piecePositionY - 10 < mouseY < piecePositionY + 10) {
    if (mouseIsPressed) {
      ellipse(mouseX,mouseY, 50);
    }
  }
}
function kings() {

}

function drawBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (blackWhite) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(squares * j, squares * i, squares, squares);
      blackWhite = !blackWhite;
    }
    blackWhite = !blackWhite;
  }
}









// let state;
// let square1;
// let square2;
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   if (windowWidth > windowHeight) {
//     square1 = windowHeight/2;
//     square2 = windowHeight/4;
//   }
//   else {
//     square1 = windowWidth/2;
//     square2 = windowHeight/4;
//   }
// }
//
// function draw() {
//   background(255);
//   noFill();
//   stroke(0);
//   board();
// }
//
// function board() {
//   for (let b = 0; b < 2; b++) {
//     for (let k = 0; k < 2; k++) {
//       rect(square1 * b, square1 * k, square1, square1);
//     }
//   }
//   for (let b = 0; b < 2; b++) {
//     for (let k = 0; k < 2; k++) {
//       rect(square2 * b, square2 * k, square1/2, square1/2);
//     }
//   }
// }

//Nine man morris
//Pieces
//Sense mouse
