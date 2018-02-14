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
  fill(255, 204, 0);
  ellipse(mouseX, mouseY, size);
  writeSomething();

}
//
//
// function mouseClicked() {
//   // numberOfClicks += 1
//   // if (numberOfClicks <= 1) {
//     writeSomething();
//   }

function writeSomething() {
  textSize(32);
  text('word', 10, 30);
  fill(0, 102, 153);
  text('word', 10, 60);
  fill(0, 102, 153, 51);
  text('word', 10, 90);
}
