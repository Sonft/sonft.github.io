// Jerry's project


function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  noStroke();
}

function draw() {
  background(0)
  //Hero
  fill(255, 204, 0);
  ellipse(mouseX, mouseY, 20);
  // ellipse(mouseX,mouseY,30)
  writeSomething();
  
}

function writeSomething() {
  textSize(32);
  text('word', 10, 30);
  fill(0, 102, 153);
  text('word', 10, 60);
  fill(0, 102, 153, 51);
  text('word', 10, 90);
}
