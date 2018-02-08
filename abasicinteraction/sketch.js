//basic interactions
//feb 7, 2018
//Jerry Xiao

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function keyPressed() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  ellipse(random(0, width), random(0, height), random(50, 200), random(50, 200))

}

function mouseClicked() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  rect(mouseX, mouseY, random(30, 70), random(30, 70));

}
