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
let infantry;

//creating variables for objects
let alaska;
let britishColumbia;
let yukon;
let northWest;
let cascadian;
let louisiana;
let eastAmerica;
let GoSL;
let quebec;
let mexico;
let florida;
let centAmeri;
let panama;
let cuba;
let venezuela;
let guinea;
let bolivia;
let brazil;
let peru;
let chile;
let laPlata;
let england;
let portugal;
let spain;
let france;
let restOfEurope;
let morocco;
let algeria;
let tunis;
let egypt;
let middleAfrica;
let westCongo;
let congo;
let somalia;
let mombasa;
let southAfrica;
let madagascar;
//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  //Creating a grid
  blockWidth = windowWidth / columns;
  blockHeight = windowHeight / rows;
  map = createGrid(columns, rows);
  //setting objects
  //Canadian Cores
  alaska = new Province("Alaska", 0, 2, 0, 2, "No One", 2, 3, 0);
  britishColumbia = new Province("British Columbia", 2, 3, 0, 5, "No One", 0, 0, 0);
  yukon = new Province("Yukon", 3, 6, 0, 5, "No One", 0, 0, 0);
  northWest = new Province("Northwest Territories", 6, 12, 0, 5, "No One", 0, 0, 0);
  GoSL = new Province("Gulf Of St.Lawrence", 12, 14, 4, 8, "No One", 0, 0, 0);
  quebec = new Province("Quebec", 14, 17, 1, 6, "France", 0, 0, 0);
  //'Murica
  cascadian = new Province("Cascadia", 3, 6, 5, 10, "No One", 0, 0, 0);
  louisiana = new Province("Louisiana", 6, 10, 5, 10, "No One", 0, 0, 0);
  eastAmerica = new Province("Eastern America", 10, 12, 5, 10, "No One", 0, 0, 0);
  florida = new Province("Florida", 10, 12, 10, 12, "No One", 0, 0, 0);
  //Central America
  mexico = new Province("Mexico", 3, 8, 10, 14, "No One", 0, 0, 0);
  centAmeri = new Province("Central America", 6, 8, 14, 17, "No One", 0, 0, 0);
  panama = new Province("Panama", 8, 10, 16, 17, "No One", 0, 0, 0);
  cuba = new Province("Cuba", 10, 13, 14, 15, "No One", 0, 0, 0);
  //South America
  venezuela = new Province("Venezuela", 9, 11, 17, 19, "No One", 0, 0, 0);
  guinea = new Province("Guinea", 11, 15, 18, 19, "No One", 0, 0, 0);
  bolivia = new Province("Bolivia", 7, 10, 19, 22, "No One", 0, 0, 0);
  brazil = new Province("Brazil", 10, 17, 19, 26, "No One", 0, 0, 0);
  peru = new Province("Peru", 8, 10, 22, 25, "No One", 0, 0, 0);
  chile = new Province("Chile", 9, 10, 25, 34, "No One", 0, 0, 0);
  laPlata = new Province("La Plata", 10, 13, 26, 32, "No One", 0, 0, 0);
  //Western Europe
  england = new Province("England", 20, 22, 5, 8, "England", 0, 0, 0);
  france = new Province("France", 22, 25, 9, 11, "France", 0, 0, 0);
  portugal = new Province("Portugal", 21, 22, 11, 13, "Portugal", 0, 0, 0);
  spain = new Province("Spain", 22, 24, 11, 13, "Spain", 0, 0, 0);
  //Rest of Europe
  restOfEurope = new Province("the Rest Of Europe", 25, 32, 8, 12, "Uncolonizable Men", 0, 0, 0);
  //North Africa
  morocco = new Province("Morocco", 21, 23, 21, 22, "No One", 0, 0, 0);
  algeria = new Province("Algeria", 23, 26, 21, 24, "No One", 0, 0, 0);
  tunis = new Province("Tunis", 26, 29, 21, 24, "No One", 0, 0, 0);
  egypt = new Province("Egypt", 29, 32, 21, 24, "No One", 0, 0, 0);
  //Middle Africa

}

//makes every land mass
function makeEarthMap() {
  //Canadian Cores
  alaska.display();
  britishColumbia.display();
  yukon.display();
  northWest.display();
  GoSL.display();
  quebec.display();
  //America
  cascadian.display();
  louisiana.display();
  eastAmerica.display();
  florida.display();
  //Central America
  mexico.display();
  centAmeri.display();
  panama.display();
  cuba.display();
  //South America
  venezuela.display();
  guinea.display();
  bolivia.display();
  brazil.display();
  peru.display();
  chile.display();
  laPlata.display();
  //Europe
  england.display();
  france.display();
  portugal.display();
  spain.display();
  //Rest of Europe
  restOfEurope.display();
  //North Africa
  morocco.display();
  algeria.display();
  tunis.display();
  egypt.display();
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

  display(x, y, x1, y1, o) {
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
        else if (this.ownedBy === "Uncolonizable Men") {
          map[x][y] = 7;
        }
        //if this is true, a pop up of the countries info appears
        if (clickOnCountry(this.x, this.y, this.x1, this.y1) === true) {
          this.c = 1;
        }
        //this turns off the popup
        isClicked(this.x, this.y, this.x1, this.y1, this.n, this.g, this.r, this.c, this.ownedBy);
        if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 && mouseY > windowHeight / 2 - 100 && mouseY < windowHeight / 2 + 100 && mouseIsPressed) {
          this.c = 0;

        }
      }
    }
  }
}

class Infantry {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.health = h;
  }
  display() {

  }
}

//countries call on this to see if they are being clicked
function isClicked(x1, y1, x2, y2, countryName, gold, resources, isClicked, ownedBy) {
  if (isClicked === 1) {
    fill(255);
    rect(windowWidth / 2 - 100, windowHeight / 2 - 100, 210, 210);
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
        fill(0, 0, 255);
      }
      else if (map[x][y] === 5) {
        fill(0, 255, 0);
      }
      else if (map[x][y] === 6) {
        fill(255);
      }
      else if (map[x][y] === 7) {
        fill(0);
      }
      else {
        fill(0, 150, 255);
      }
      //actually makes the grid
      rect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
    }
  }
}
