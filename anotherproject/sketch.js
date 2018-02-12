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

}

// function mouseIsPressed() {
//   if mouseClicked() {
//     fill(255, 204, 0);
//     textFont()
//     textSize(32)
//     text("this is sunshine");
//   }
// }
