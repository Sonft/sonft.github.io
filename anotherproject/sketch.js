// Jerry's project
let size = 20;
let numberOfClicks = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  noStroke();
}

function draw() {
  background(0);
  fill(255, 20, 60, 60);
  ellipse(mouseX, mouseY, size);
  if (10 <= numberOfClicks) {
    writeSomething();
    if (30 <= numberOfClicks) {
      background(0);
      fill(255, 205, 0);
      ellipse(mouseX, mouseY, size + 5);
    }
    if (31 <= numberOfClicks) {
      starlight();
    }

  }
}


function mouseClicked() {
  numberOfClicks += 1;
  size += 0.5;
}

function writeSomething() {
  textSize(32);
  fill(255);
  text("This is the birth of a star", 10, 90);
}

function starlight() {
  textSize(32);
  fill(255);
  text("Our star has grown", 10, 90);
}

function astroids() {
  
}
