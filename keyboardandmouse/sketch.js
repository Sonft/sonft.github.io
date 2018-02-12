function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
}

function draw() {

}

function mousePressed() {
  noStroke()
  fill(random(255), random(255), random(255), random(255))
  if (mouseButton === LEFT) {
    rect(mouseX, mouseY, random(50, 100), random(50, 100));
  } else if (mouseButton === RIGHT) {
    ellipse(mouseX, mouseY, random(50, 100), random(50, 100));
  }
}

function keyReleased() {
  if (key === 'w' || key === 'W') {
    background(255)
  } else if (key === 'b' || key === 'B') {
    background(0)
  }
}
