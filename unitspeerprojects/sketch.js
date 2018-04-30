//Amar Minhas 2d arrays assignment
//this project is a continuation of my previous projects

//setting variables
let gameState = 1;
let playerTurn = 1;
let playerCountry;
let countryInfoClicked = 0;
let blockWidth;
let blockHeight;
let columns = 54;
let rows = 41;
let map;

//units! Bois
let infantry;

//creating variables for objects
let masterListOfCountry = [];
//Canadian Objects
let alaska;
let britishColumbia;
let yukon;
let northWest;
let GoSL;
let quebec;
//American
let cascadian;
let louisiana;
let eastAmerica;
let florida;
//Central America
let mexico;
let centAmeri;
let panama;
let cuba;
//South America
let venezuela;
let guinea;
let bolivia;
let brazil;
let peru;
let chile;
let laPlata;
let uruguay;
//Western Europe
let greatBritain;
let portugal;
let spain;
let france;
//Rest Of Europe
let restOfEurope;
let italy;
let scandinavia;
//North Africa
let morocco;
let algeria;
let tunis;
let egypt;
//Central Africa
let middleAfrica;
//South/Central Africa
let westCongo;
let congo;
let somalia;
let mombasa;
let southAfrica;
let madagascar;
//Middle East + India
let iran;
let afganistan;
let pakistan;
let arabia;
let india;
let sriLanka;
//Russia and Japan
let russia;
let japan;
let northSiberia;
let southSiberia;
//China + IndoChina
let mongolia;
let tibet;
let centralChina;
let easternChina;
let southChina;
let indoChina;
//Oceania
let indonesia;
let australia;
//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  document.documentElement.style.overflow = "hidden";
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
  mexico = new Province("Mexico", 4, 8, 10, 14, "No One", 0, 0, 0);
  centAmeri = new Province("Central America", 6, 8, 14, 17, "No One", 0, 0, 0);
  panama = new Province("Panama", 8, 10, 16, 17, "No One", 0, 0, 0);
  cuba = new Province("Cuba", 10, 13, 14, 15, "No One", 0, 0, 0);
  //South America
  venezuela = new Province("Venezuela", 9, 11, 17, 19, "No One", 0, 0, 0);
  guinea = new Province("Guinea", 11, 15, 18, 19, "No One", 0, 0, 0);
  bolivia = new Province("Bolivia", 7, 10, 19, 22, "No One", 0, 0, 0);
  brazil = new Province("Brazil", 10, 17, 19, 26, "No One", 0, 0, 0);
  peru = new Province("Peru", 8, 10, 22, 25, "No One", 0, 0, 0);
  chile = new Province("Chile", 9, 10, 25, 35, "No One", 0, 0, 0);
  laPlata = new Province("La Plata", 10, 12, 26, 33, "No One", 0, 0, 0);
  uruguay = new Province("Uruguay", 12, 15, 26, 29, "No One", 0, 0, 0);
  //Western Europe
  greatBritain = new Province("Great Britain", 20, 22, 5, 8, "Great Britain", 0, 0, 0);
  france = new Province("France", 22, 25, 9, 11, "France", 0, 0, 0);
  portugal = new Province("Portugal", 21, 22, 11, 13, "Portugal", 0, 0, 0);
  spain = new Province("Spain", 22, 24, 11, 13, "Spain", 0, 0, 0);
  //Rest of Europe
  restOfEurope = new Province("the Rest Of Europe", 25, 32, 8, 12, "Uncolonizable Men", 0, 0, 0);
  italy = new Province("Italy", 27, 29, 12, 14, "Uncolonizable Men", 0, 0, 0);
  scandinavia = new Province("Scandinavia", 25, 32, 2, 5, "Uncolonizable Men", 0, 0, 0);
  //North Africa
  morocco = new Province("Morocco", 21, 23, 16, 22, "No One", 0, 0, 0);
  algeria = new Province("Algeria", 23, 26, 15, 19, "No One", 0, 0, 0);
  tunis = new Province("Tunis", 26, 29, 15, 19, "No One", 0, 0, 0);
  egypt = new Province("Egypt", 29, 32, 16, 19, "No One", 0, 0, 0);
  //Middle Africa
  middleAfrica = new Province("Central Africa", 23, 29, 19, 23, "Uncolonizable Men", 0, 0, 0);
  //South/Central Africa
  westCongo = new Province("West Congo", 24, 26, 23, 29, "No One", 0, 0, 0);
  congo = new Province("Congo", 26, 29, 23, 29, "No One", 0, 0, 0);
  somalia = new Province("Somalia", 29, 32, 19, 24, "No One", 0, 0, 0);
  mombasa = new Province("Mombasa", 29, 30, 24, 30, "No One", 0, 0, 0);
  southAfrica = new Province("South Africa", 25, 29, 29, 32, "No One", 0, 0, 0);
  madagascar = new Province("Madagascar", 32, 34, 26, 29, "No One", 0, 0, 0);
  //Middle East and India
  iran = new Province("Iran", 32, 37, 13, 16, "No One", 0, 0, 0);
  afganistan = new Province("Afganistan", 37, 42, 13, 16, "No One", 0, 0, 0);
  pakistan = new Province("Pakistan", 36, 38, 16, 18, "No One", 0, 0, 0);
  arabia = new Province("Arabia", 33, 36, 16, 21, "No One", 0, 0, 0);
  india = new Province("India", 38, 42, 16, 22, "No One", 0, 0, 0);
  sriLanka = new Province("Sri Lanka", 43, 44, 22, 24, "No One", 0, 0, 0);
  //Russia and Japan
  russia = new Province("Russia", 32, 37, 3, 13, "Uncolonizable Men", 0, 0, 0);
  japan = new Province("Japan", 53, 54, 15, 19, "Uncolonizable Men", 0, 0, 0);
  northSiberia = new Province("Northern Siberia", 37, 54, 2, 7, "No One", 0, 0, 0);
  southSiberia = new Province("Southern Siberia", 37, 53, 7, 13, "No One", 0, 0, 0);
  //China and IndoChina
  mongolia = new Province("Mongolia", 42, 50, 13, 15, "No One", 0, 0, 0);
  tibet = new Province("Tibet", 42, 46, 15, 18, "No One", 0, 0, 0);
  centralChina = new Province("Central China", 46, 50, 15, 18, "No One", 0, 0, 0);
  easternChina = new Province("Eastern China", 50, 51, 13, 19, "No One", 0, 0, 0);
  southChina = new Province("South China", 42, 50, 18, 19, "No One", 0, 0, 0);
  indoChina = new Province("IndoChina", 46, 49, 19, 23, "No One", 0, 0, 0);
  //Oceania
  indonesia = new Province("Indonesia", 47, 53, 26, 27, "No One", 0, 0, 0);
  australia = new Province("Australia", 47, 53, 31, 36, "No One", 0, 0, 0);

  masterListOfCountry.push(
    alaska,
    britishColumbia,
    yukon,
    northWest,
    GoSL,
    quebec,
    //American
    cascadian,
    louisiana,
    eastAmerica,
    florida,
    //Central America
    mexico,
    centAmeri,
    panama,
    cuba,
    //South America
    venezuela,
    guinea,
    bolivia,
    brazil,
    peru,
    chile,
    laPlata,
    uruguay,
    //Western Europe
    greatBritain,
    portugal,
    spain,
    france,
    //Rest Of Europe
    restOfEurope,
    italy,
    scandinavia,
    //North Africa
    morocco,
    algeria,
    tunis,
    egypt,
    //Central Africa
    middleAfrica,
    //South/Central Africa
    westCongo,
    congo,
    somalia,
    mombasa,
    southAfrica,
    madagascar,
    //Middle East + India
    iran,
    afganistan,
    pakistan,
    arabia,
    india,
    sriLanka,
    //Russia and Japan
    russia,
    japan,
    northSiberia,
    southSiberia,
    //China + IndoChina
    mongolia,
    tibet,
    centralChina,
    easternChina,
    southChina,
    indoChina,
    //Oceania
    indonesia,
    australia

  );
}


//just calls other functions
function draw() {
  checkState();
}


//determines which screen the game needs to show
function checkState() {
  if (gameState === 1) {
    backGroundOne();
  } else if (gameState === 2) {
    backGroundTwo();

  } else if (gameState === 3) {
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
//Makes every land mass
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
  uruguay.display();
  //Europe
  greatBritain.display();
  france.display();
  portugal.display();
  spain.display();
  //Rest of Europe
  restOfEurope.display();
  italy.display();
  scandinavia.display();
  //North Africa
  morocco.display();
  algeria.display();
  tunis.display();
  egypt.display();
  //Middle Africa
  middleAfrica.display();
  //South/Central Africa
  westCongo.display();
  congo.display();
  somalia.display();
  mombasa.display();
  southAfrica.display();
  madagascar.display();
  //Middle East and India
  iran.display();
  afganistan.display();
  pakistan.display();
  arabia.display();
  india.display();
  sriLanka.display();
  //Russia and Japan
  russia.display();
  japan.display();
  northSiberia.display();
  southSiberia.display();
  //China and Indochina
  mongolia.display();
  tibet.display();
  centralChina.display();
  easternChina.display();
  southChina.display();
  indoChina.display();
  //Oceania
  indonesia.display();
  australia.display();
  headsUpDisplay(playerCountry);
}

function headsUpDisplay(playerCountry, colour, resources, gold) {
  fill(255);
  rect(0, windowHeight - 3 * blockHeight, windowWidth, windowHeight);
}


//actually displays the map
//colour list appears as follows: 0 = ocean, 1 = hovered over, 2 = Great Britain AMAR>, 3 = spain, 4 = france, 5 =portugal, 6 = uncolonized
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



// THIS SECTION IS FOR CLASSES
// IT STARTS RIGHT HERE

//This information is indirectly shown to the player through the HUD. THE ONLY THING THIS IS USED FOR IS THE HUD
class PlayerHUDInfo {
  constuctor(ownedBy, gold, resources) {
    this.o = ownedBy;
    this.g = gold;
    this.r = resources;
  }
}
//THIS IS THE INFO FOR EVERY COUNTRY: HUD USES THIS, THE GAME WILL CHANGE THIS DEPENDING ON WHAT HAPPENS IN TURNS (IE. events, turn transitions,etc)
class Player {
  constructor(colonies, ownedBy, gold, resources) {
    this.o = ownedBy;
    this.g = gold;
    this.r = resources;
    colonies= [];
    this.c = colonies;
  }
  determineColonies(colonies) {

  }
  calculation(colonies) {

  }
}

// this whole thing is the class called province. It functions to make it easier to make countries for the game when starting up the game
class Province {
  constructor(name, xStart, xFin, yStart, yFin, ownedBy, gold, resources, isClicked) {
    this.n = name;//this represents the name
    this.x = xStart;//first x value
    this.x1 = xFin; // last x value
    this.y = yStart; // first y value
    this.y1 = yFin;// last y value
    this.ownedBy = ownedBy; // who owns this fine piece of land right here
    this.g = gold; // the gold and resources
    this.r = resources;
    this.c = isClicked;// and finally if the country is being clicked


  }

  //Our map is a 2d array, so what display does is depending on who owns a province sets the province owner ID to that country, thus changing the colour
  display (x, y, x1, y1, o) {
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
        else if (this.ownedBy === "Great Britain") {
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
        if (keyIsPressed && (key === "c"|| key === "C") ) {
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



// IT ENDS RIGHT HERE



//DISPLAY FUNCTION USES THIS
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
    text("Press C to remove this page!", windowWidth / 2 - 90, windowHeight / 2 + 80);
  }
}



//THE DISPLAY FUNCTION USES THIS TOO
//input coordinates and it tells you if the mouse is clicking inside of them
function clickOnCountry(x1, y1, x2, y2) {
  return x1 * blockWidth < mouseX && mouseX < x2 * blockWidth && y1 * blockHeight < mouseY && mouseY < y2 * blockHeight && mouseIsPressed;
}



//THE DISPLAY FUNSTION USES THIS TOO ALSO
//just checks if you moused over a thing
function countryMousedOver(x1, y1, x2, y2) {
  if (x1 * blockWidth < mouseX && mouseX < x2 * blockWidth && y1 * blockHeight < mouseY && mouseY < y2 * blockHeight) {
    return true;
  }
}




// THE SETUP FUNCTION USES THIS

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
