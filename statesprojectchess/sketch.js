let squares;
let blackWhite;
let inPlay;
let piecePositionX, piecePositionY;
let turns;

function setup() {
  piecePositionX = 50;
  piecePositionY = 50;
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  turns === 1;
  inPlay = false;
  squares = width / 8;
  blackWhite = false;
  background(255);
  drawBoard(); //This is the chessboard code that we got shown in class
  // defaultPositions();
}

function draw() {
  eachSquare();


}

function defaultPositions() {
  pawns();
  kings();
}

function eachSquare() { // have it so that each square has it's own state and value. If state is empty, have it be filled. Otherwise, have it count
  // when it is clicked and then place the piece that was just clicked into the piece as well as the other square that just left turns empty.
  a1();
}

function a1() {
  inPlay === true;
  if (mouseIsPressed && mouseX < squares && mouseY < squares && inPlay === true) {
    pawns();
  }
  else {
    inPlay = !inPlay;
  }
}

function pawns() {
  ellipse(piecePositionX, piecePositionY, 50);

}

function kings() {
  rect(piecePositionX + 100, piecePositionY + 100, 60, 60);
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
