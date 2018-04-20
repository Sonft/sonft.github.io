//Amar Minhas 2d arrays assignment
//this project is a continuation of my previous projects

//setting variables
let gameState = 1;
let playerturn = 1;
let countryInfoClicked = 0;
let blockWidth;
let blockHeight;
let columns = 54;
let rows = 41;
let map;
//units! Bois

//creating variables for objects
let alaska;
let britishColumbia;

//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  //Creating a grid
  blockWidth = windowWidth / columns;
  blockHeight = windowHeight / rows;
  map = createGrid(columns, rows);
  //setting objects
  alaska = new Province("Alaska", 0, 2, 0, 2, "No One", 2, 3, 0);
  britishColumbia = new Province("British Columbia", 1, 3, 2, 6, "England", 5, 6, 0);

}

//just calls other functions
function draw() {
  checkState();
}

//determines which screen the game needs to show
function checkState() {
  if (gameState === 1) {
    backGroundOne();
  }
  else if (gameState === 2) {
    backGroundTwo();

  }
  else if (gameState === 3) {
    backGroundThree();
  }
}

//makes the home screen
function backGroundOne() {
  //the aesthetics of the screen
  background(0, 150, 130);
  fill(0);
  rect(windowWidth / 2 - 100, windowHeight / 2 - 50, 100, 100);
  fill(255);
  textSize(30);
  text("Play", windowWidth / 2 - 80, windowHeight / 2);

  //sends to the game
  if (windowWidth / 2 - 100 < mouseX && mouseX < windowWidth / 2 && windowHeight / 2 - 50 < mouseY && mouseY < windowHeight / 2 + 50 && mouseIsPressed) {
    gameState = 2;
    background(0);
  }
  //the aesthetics of the screen

  fill(0);
  rect(windowWidth / 2 - 100, windowHeight / 2 + 200, 100, 100);
  fill(255);
  text("Rules", windowWidth / 2 - 100, windowHeight / 2 + 250);


  //sends to the tutorial
  if (windowWidth / 2 - 100 < mouseX && mouseX < windowWidth / 2 + 100 && windowHeight / 2 + 200 < mouseY && mouseY < windowHeight / 2 + 300 && mouseIsPressed) {
    gameState = 3;
    background(0);
  }
}

//starts the function chain that makes the world
function backGroundTwo() {
  background(0, 0, 255);
  displayGrid();
  makeEarthMap();
}

//makes the tutorial screen
function backGroundThree() {
  background(0, 0, 0);
  fill(255, 0, 0);
  rect(windowWidth - 50, 0, 50, 50);
  fill(255);
  textSize(30);
  text("these are the rules", 10, 50);

  //the exit button
  if (windowWidth > mouseX && windowWidth - 50 < mouseX && 50 > mouseY && 0 < mouseY && mouseIsPressed) {
    gameState = 1;
  }
}

//makes every land mass
function makeEarthMap() {
//  makeAlaska();

  alaska.display();
  britishColumbia.display();
}


class Province {
  constructor(name, xStart, xFin, yStart, yFin, ownedBy, gold, resources, isClicked) {
    this.n = name;
    this.x = xStart;
    this.x1 = xFin;
    this.y = yStart;
    this.y1 = yFin;
    this.ownedBy = ownedBy;
    this.g = gold;
    this.r = resources;
    this.c = isClicked;


  }

  display(x, y, o) {
    for(let x = this.x; x < this.x1; x++) {
      for(let y = this.y; y < this.y1; y++) {
        if (countryMousedOver(this.x, this.y, this.x1, this.y1) === true) {
          map[x][y] = 1;
        }
        else if (this.ownedBy === "No One") {
          map[x][y] = 6;
        }
        else if (this.ownedBy === "Portugal") {
          map[x][y] = 5;
        }
        else if (this.ownedBy === "France") {
          map[x][y] = 4;
        }
        else if (this.ownedBy === "Spain") {
          map[x][y] = 3;
        }
        else if (this.ownedBy === "England") {
          map[x][y] = 2;
        }

        //if this is true, a pop up of the countries info appears
        if (clickOnCountry(this.x, this.y, this.x1, this.y1) === true) {
          this.c = 1;
        }
        //this turns off the popup
        isClicked(this.x, this.y, this.x1, this.y1, this.n, this.g, this.r, this.c, this.ownedBy);
        if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100, mouseY > windowHeight / 2 - 100 && mouseY < windowHeight / 2 + 100 && mouseIsPressed) {
          this.c = 0;
        }
      }
    }
  }
}

//countries call on this to see if they are being clicked
function isClicked(x1, y1, x2, y2, countryName, gold, resources, isClicked, ownedBy) {
  if (isClicked === 1) {
    fill(255);
    rect(windowWidth / 2 - 100, windowHeight / 2 - 100, 200, 200);
    fill(0);
    textSize(13);
    text("This is " + countryName, windowWidth / 2 - 90, windowHeight / 2 - 80);
    text("It is owned by: " + ownedBy, windowWidth / 2 - 90, windowHeight / 2 - 40);
    text("It has this many resources: " + resources, windowWidth / 2 - 90, windowHeight / 2);
    text("It has this much gold: " + gold, windowWidth / 2 - 90, windowHeight / 2 + 40);
    text("Click again to remove this page!", windowWidth / 2 - 90, windowHeight / 2 + 80);
  }
}

//input coordinates and it tells you if the mouse is clicking inside of them
function clickOnCountry(x1, y1, x2, y2) {
  return x1 * blockWidth < mouseX && mouseX < x2 * blockWidth && y1 * blockHeight < mouseY && mouseY < y2 * blockHeight && mouseIsPressed;
}

//just checks if you moused over a thing
function countryMousedOver(x1, y1, x2, y2) {
  if (x1 * blockWidth < mouseX && mouseX < x2 * blockWidth && y1 * blockHeight < mouseY && mouseY < y2 * blockHeight) {
    return true;
  }
}


//creates an empty grid that will be used as the map
function createGrid(columns, rows) {
  let randomGrid = [];
  for (let x = 0; x < columns; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}

//actually displays the map
//colour list appears as follows: 0 = ocean, 1 = hovered over, 2 = england, 3 = spain, 4 = france, 5 =portugal, 6 = uncolonized
function displayGrid() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      if (map[x][y] === 1) {
        fill(70, 70, 70);
      }
      else if (map[x][y] === 2) {
        fill(255, 0, 0);
      }
      else if (map[x][y] === 3) {
        fill(255, 204, 0);
      }
      else if (map[x][y] === 4) {
        fill(60, 20, 255);
      }
      else if (map[x][y] === 5) {
        fill(0, 255, 0);
      }
      else if (map[x][y] === 6) {
        fill(255);
      }
      else {
        fill(0, 0, 255);
      }
      //actually makes the grid
      rect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
    }
  }
}
