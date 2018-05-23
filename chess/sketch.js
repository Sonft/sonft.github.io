//In theory this should work, but I couldn't understand constructors in time to finish it
//I'm pretty sure there's a simple mistake I'm using but I can't seem to make properties right

let down, right, down1, right1; // the first one is the starting position, the second one is the ending position
let p0, p1, p01, p11; // just to remember the previous moves for en passent
let click; //first click select piece, second click moves piece
let WHITE = true;
let BLACK = false;
let turn; //turns white or black
let gameOver;
let check; //if in check
let promote;
let wKing, bKing, wPawn, bPawn;
let bKingMoved;
let board;


function setup() {
  createCanvas(640, 640);
  noStroke();
  textSize(width / 8);
  textAlign(CENTER);
  // Applying values for the global values
  int(down, right, down1, right1);
  down = right = down1 = right1 = -1;
  p0 = p1 = p01 = p11 = -1;
  click = false;
  turn = WHITE;
  gameOver = 1;
  check = false;
  promote = false;
  //Making images and setting them as variables
  wKing = loadImage("images/King.PNG");
  bKing = loadImage("images/King1.PNG");
  wPawn = loadImage("images/Pawn.png");
  bPawn = loadImage("images/Pawn1.png");
  // Just to make sure the values stay within the window
  wKing.resize(width / 8, height / 8);
  bKing.resize(width / 8, height / 8);
  wPawn.resize(width / 8, height / 8);
  bPawn.resize(width / 8, height / 8);

  startPosition();
}

function draw() {
  showBoard();
  if (gameOver === 2) {
    fill(0, 255, 0);
    if (check) {
      text("CHECKMATE", 0, height / 2, width, height);
    }
    else {
      text("STALEMATE", 0, height / 2, width, height);
    }
  }
}

function showBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        fill(255);
      }
      else {
        fill(209);
      }
      rect(i * width / 8, j * height / 8, width / 8, height / 8); //chessboard
      if (board[j][i] !== null) {
        image(board[j][i], i * width / 8, j * height / 8); //piece
      }
      if (click) {
        if (validMove(down, right, j, i, turn, board) && !incheck(down, right, j, i, turn)) {
          fill(255, 0, 0, 100); //highlight possible moves in red
          rect(i * width / 8, j * height / 8, width / 8, height / 8);
        }
        if (j === down && i === right && board[j][i] !== null) {
          fill(0, 0, 255, 100); //highlight piece in blue
          rect(i * width / 8, j * height / 8, width / 8, height / 8);
        }
      }
    }
    if (check && gameOver === 2 && !promote) {
      fill(0, 255, 0);
      text("CHECK", 0, height / 2, width, height);
      noStroke();
    }
  }
}

function mousePressed() {
  if (gameOver === 2) {
    startPosition();
    gameOver = 1;
  }
  if (promote) {
    let x = round(mouseX / (width / 4) - 0.5);
    promote = false;
    check = false;
    if (Check(turn, board)) { //king under attack
      check = true;
    }
    if (mate(turn)) { //no legal moves
      gameOver = 1;
    }
  }
  else if (click) {
    down1 = round(mouseY / (height / 8) - 0.5);
    right1 = round(mouseX / (width / 8) - 0.5);
    if (validMove(down, right, down1, right1, turn, board) && !incheck(down, right, down1, right1, turn)) {
      check = false; //stop showing check
      board = movePiece(down, right, down1, right1, true, board); //move piece
      click = false;
    }
    else { //Different piece so that you can change it
      down = down1;
      right = right1;
      click = true;
    }
  }
  else {
    down = round(mouseY / (height / 8) - 0.5);
    right = round(mouseX / (width / 8) - 0.5);
    click = true;
  }
}

function Constructor() {
  showBoard();
}

function startPosition() {
  // setting up the board
  let board = new Constructor(); // Constructors are so irritating to make, somehow it doesn't register

  board[0][4] = bKing;
  board[1][0] = bPawn;

  board[7][4] = wKing;
  board[6][7] = wPawn;

}

function movePiece(i0, j0, i1, j1, update, Board) {
  if (update) {
    p0 = i0;
    p1 = j1;
    p01 = i1;
    p11 = j1; //setup prev move for en passant
  }
  if (Board[i0][j0] === wPawn) {
    if (i1 === 0) {
      if (update) {
        promote = true;
      }
    }
    else if (i1 === 2 && abs(j1 - j0) === 1 && Board[i1][j1] === null) { //en passant
      Board[i1 + 1][j1] = null;
    }
  }
  else if (Board[i0][j0] === bPawn) { //promote black pawn
    if (i1 === 7) {
      if (update) {
        promote = true;
      }
    }
    else if (i1 === 5 && abs(j1 - j0) === 1 && Board[i1][j1] === null) { //en passant
      Board[i1 - 1][j1] = null;
    }
  }

  Board[i1][j1] = Board[i0][j0]; //move piece
  Board[i0][j0] = null; //remove original piece

  if (update) {
    if (Check(!turn, Board)) { //king under attack
      check = true;
    }
    if (mate(!turn)) { //no legal moves
      gameOver = 2;
    }
    turn = !turn;
  }
  return Board;
}

function Check(side, Board) {
  let i, j = 0;
  let b = false;

  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      if (side === WHITE) {
        if (Board[i][j] === wKing) {
          b = true;
          break;
        }
      }
      else {
        if (Board[i][j] === bKing) {
          b = true;
          break;
        }
      }
    }
    if (b === true) {
      break;
    }
  }
  for (let k = 0; k < 8; k++) {
    for (let l = 0; l < 8; l++) {
      if (side === WHITE) {
        if (notBlack(l, k, Board)) {
          continue;
        }
      }
      else if (notWhite(l, k, Board)) {
        continue;
      }
      if (validMove(l, k, i, j, !side, Board)) {
        return true;
      }
    }
  }
  return false;
}

function incheck(down, right, down1, right1, side) {
  let updateBoard = new Constructor();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      updateBoard[i][j] = board[i][j];
      updateBoard = movePiece(down, right, down1, right1, false, updateBoard);

      if (Check(side, updateBoard)) {
        return true;
      }
      return false;
    }
  }
}

function mate(side) { //no valid moves
  for (let k = 0; k < 8; k++) {
    for (let l = 0; l < 8; l++) {
      if (side === WHITE) {
        if (notWhite(l, k, board)) {
          continue;
        }
      }
      else if (notBlack(l, k, board)) {
        continue;
      }
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (validMove(l, k, i, j, side, board) && !incheck(l, k, i, j, side)) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

function validMove(down, right, down1, right1, side, Board) {
  if (side === WHITE) { //white
    if (Board[down][right] === wPawn && !promote) {
      if (right1 === right && down1 === down - 1 && Board[down - 1][right] === null) { // move forward 1
        return true;
      }
      else if (right1 === right && down1 === down - 2) { // move forward 2
        if (down === 6 && Board[down - 1][right] === null && Board[down - 2][right] === null) {
          return true;
        }
      }
      if (right !== 7) { //take
        if (black(down - 1, right + 1, Board)) {
          if (down1 === down - 1 && right1 === right + 1) {
            return true;
          }
        }
        if (down === 3 && Board[p01][p11] === bPawn && p01 === p0 + 2 && p1 === right + 1) { //en passant
          if (down1 === down - 1 && right1 === right + 1) {
            return true;
          }
        }
      }
      if (right !== 0) { //take
        if (black(down - 1, right - 1, Board)) {
          if (down1 === down - 1 && right1 === right - 1) {
            return true;
          }
        }
        if (down === 3 && Board[p01][p11] === bPawn && p01 === p0 + 2 && p1 === right - 1) { //en passant
          if (down1 === down - 1 && right1 === right - 1) {
            return true;
          }
        }
      }
    }
    else if (Board[down][right] === wKing) {
      if (abs(right - right1) <= 1 && abs(down - down1) <= 1) { //move
        if (notWhite(down1, right1, Board)) {
          return true;
        }
      }
    }
  }
  else {
    if (Board[down][right] === bPawn && !promote) {
      if (right1 === right && down1 === down + 1 && Board[down + 1][right] === null) { // move forward 1
        return true;
      }
      else if (right1 === right && down1 === down + 2) { // move forward 2
        if (down === 1 && Board[down + 1][right] === null && Board[down + 2][right] === null) {
          return true;
        }
      }
      if (right !== 7) { //take
        if (white(down1, right1, Board)) {
          if (down1 === down + 1 && right1 === right + 1) {
            return true;
          }
        }
        if (down === 4 && Board[p01][p11] === wPawn && p01 === p0 - 2 && p1 === right + 1) { //en passant
          if (down1 === down + 1 && right1 === right + 1) {
            return true;
          }
        }
      }
      if (right !== 0) { //take
        if (white(down1, right1, Board)) {
          if (down1 === down + 1 && right1 === right - 1) {
            return true;
          }
        }
        if (down === 4 && Board[p01][p11] === wPawn && p01 === p0 - 2 && p1 === right - 1) { //en pasant
          if (down1 === down + 1 && right1 === right - 1) {
            return true;
          }
        }
      }
    }
    else if (Board[down][right] === bKing) {
      if (abs(right - right1) <= 1 && abs(down - down1) <= 1) {
        if (notBlack(down1, right1, Board)) {
          return true;
        }
      }
    }
  }
  return false;
}

function possible(down, right, down1, right1, d, r, side, Board) {
  for (let i = right + r, j = down + d; i < 8 && j < 8 && i >= 0 && j >= 0; i += r, j += d) {
    if (side === WHITE) {
      if (white(j, i, Board)) {
        break; //once diagon reaches white
      }
      if (black(j, i, Board)) { //once diagon reaches black
        if (i === right1 && j === down1) {
          return true; //kill first black
        }
        break;
      }
    }
    else {
      if (black(j, i, Board)) {
        break; //once direction reaches black
      }
      if (white(j, i, Board)) { //once direction reaches white
        if (i === right1 && j === down1) {
          return true; //kill first white
        }
        break;
      }
    }
    if (i === right1 && j === down1) {
      return true; //no piece
    }
  }
  return false;
}

function black(down1, right1, Board) {
  return Board[down1][right1] === bPawn || Board[down1][right1] === bKing;
}

function white(down1, right1, Board) {
  return Board[down1][right1] === wPawn || Board[down1][right1] === wKing;
}

function notBlack(down1, right1, Board) {
  return white(down1, right1, Board) || Board[down1][right1] === null;
}

function notWhite(down1, right1, Board) {
  return black(down1, right1, Board) || Board[down1][right1] === null;
}
