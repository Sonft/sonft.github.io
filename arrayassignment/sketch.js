// Bomberman - replace with project title
// Jerry Xiao

let x, y;
let position, direction;
let rectWidth, rectHeight;
let bombSpot, bombSize, bombTime;
let rectsCols, rectsRows;
let concrete; // use mtl_O_s.png
let rects;
let floor;
let grid = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  concrete = loadImage("images/mixedsets/metal/mtl_O_s.png");
  floor = loadImage("images/mixedsets/stone/conc_base02_c.png");

  rectsCols = grid.length;
  rectsRows = grid[0].length;

  rectWidth = width / rectsCols;
  rectHeight = height / rectsRows;

  rects = newEmptyArray(rectsCols, rectsRows);
  for (let y = 0; y < rectHeight; y++) {
    for (let x = 0; x < rectWidth; x++) {
      let squareType = grid[y][x];
      grid[x][y] = squareType;
    }
  }
}

function draw() {
  background(255);
  for (let y = 0; y < rectsCols; y++) {
    for (let x = 0; x < rectsRows; x++) {
      displayBoard(grid[x][y], x, y);
    }
  }
}

function displayBoard(specificSquare, x, y) {
  if (specificSquare === 1) {
    image(concrete, x * rectWidth, y * rectHeight, rectWidth, rectHeight);
  }
  if (specificSquare === 2) {
    image(floor, x * rectWidth, y * rectHeight, rectWidth, rectHeight);
  }
}

function newEmptyArray(rectsCols, rectsRows) {
  let randomGrid = [];
  for (let x = 0; x < rectsCols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rectsRows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}
