// Bomberman - replace with project title
// Jerry Xiao
//
// let x, y;
// let position, direction;
// let rectWidth, rectHeight;
// let bombSpot, bombSize, bombTime;
// let rectsCols, rectsRows;
// let concrete; // use mtl_O_s.png
// let rects;
// let floor;
// let grid = [
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
//   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
//   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
//   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
//   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
//   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
//   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
//   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
//   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
// ];
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   concrete = loadImage("images/mixedsets/metal/mtl_O_s.png");
//   floor = loadImage("images/mixedsets/stone/conc_base02_c.png");
//
//   rectsCols = grid.length;
//   rectsRows = grid[0].length;
//
//   rectWidth = width / rectsCols;
//   rectHeight = height / rectsRows;
//
//   rects = newEmptyArray(rectsCols, rectsRows);
//   for (let y = 0; y < rectHeight; y++) {
//     for (let x = 0; x < rectWidth; x++) {
//       let squareType = grid[y][x];
//       grid[x][y] = squareType;
//     }
//   }
// }
//
// function draw() {
//   background(255);
//   for (let y = 0; y < rectsCols; y++) {
//     for (let x = 0; x < rectsRows; x++) {
//       displayBoard(grid[x][y], x, y);
//     }
//   }
// }
//
// function displayBoard(specificSquare, x, y) {
//   if (specificSquare === 1) {
//     image(concrete, x * rectWidth, y * rectHeight, rectWidth, rectHeight);
//   }
//   if (specificSquare === 2) {
//     image(floor, x * rectWidth, y * rectHeight, rectWidth, rectHeight);
//   }
// }
//
// function newEmptyArray(rectsCols, rectsRows) {
//   let randomGrid = [];
//   for (let x = 0; x < rectsCols; x++) {
//     randomGrid.push([]);
//     for (let y = 0; y < rectsRows; y++) {
//       randomGrid[x].push(0);
//     }
//   }
//   return randomGrid;
// }


let tiles;
let levelBackground;
let platform, coin, box, fly, p1, slime, empty;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines;

function preload() {
  //load level data
  levelToLoad = "text/bomberman1.txt";
  lines = loadStrings(levelToLoad);


  //load tile images
  platform = loadImage("images/mixedsets/metal/mtl_O_s.png");
  empty = loadImage("images/mixedsets/stone/conc_base02_c.png");
}

function setup() {
  // keep this a 4:3 ratio, or it will stretch in weird ways
  createCanvas(1000, 750);

  tilesHigh = lines.length;
  tilesWide = lines[0].length;

  tileWidth = width / tilesWide;
  tileHeight = height / tilesHigh;

  tiles = createEmpty2dArray(tilesWide, tilesHigh);

  //put values into 2d array of characters
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[x][y] = tileType;
    }
  }
}

function draw() {
  display();
}

function display() {

  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(tiles[x][y], x, y);
    }
  }
}

function showTile(location, x, y) {
  if (location === ",") {
    image(platform, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else {
    image(empty, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
}

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}
