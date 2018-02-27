// Jerry's project
let size = 20;
let numberOfClicks = 0;
let points = [];
let accel = 0.9;
let gravity = 0;
let bounce = -1;

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
      fill(255, 205, 0);
      reset();
    }
    if (31 <= numberOfClicks) {
      starlight();
    }
    if (50 <= numberOfClicks) {
      fill(255, 100, 50);
      reset();
    }
    if (51 <= numberOfClicks) {
      yearsPass();
    }
    if (60 <= numberOfClicks) {
      stars();
    }
    if (70 <= numberOfClicks) {
      fill(255, 90, 30);
      reset();
    }
    if (71 <= numberOfClicks) {
      chuggingAlong();
    }

    if (90 <= numberOfClicks) {
      fill(255);
      reset();
    }
    if (91 <= numberOfClicks) {
      size = 5;
      heatDeath();
    }
    if (120 <= numberOfClicks) {
      size = 5;
      background(0);
    }
    if (121 <= numberOfClicks) {
      almostOver();
    }
    if (140 <= numberOfClicks) {
      size = 5;
      background(0);
    }

    if (141 <= numberOfClicks) {
      worryNot();
      textSize(32);
      fill(255);
      text("THE END", 10, 90);
      textSize(20);
      text("P.S. thanks to 'mtchl' for figuring out how to make explosions so that I could learn to do them", 10, 500);
      if (mouseButton === LEFT) {
        goBoom(mouseX, mouseY);
      }

    }

    if (keyIsPressed === true) {
      if (key === "r" || key === "R") {
        background(0);
        size = 20;
        numberOfClicks = 0;
      }
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
  text("This is the birth of our star. We can help it grow and light up this universe", 10, 90);
}

function starlight() {
  textSize(32);
  fill(255);
  text("After so many clicks, our star has grown. Not by much, but still brilliant, isn't it?", 10, 90);
}

function reset() {
  background(0);
  ellipse(mouseX, mouseY, size + numberOfClicks / 4);
}

function stars() {
  ellipse(random(windowWidth), random(windowHeight), random(numberOfClicks / 8, numberOfClicks / 2));
}

function yearsPass() {
  textSize(32);
  fill(255);
  text("Millions upon billions of years pass as other stars die, but not ours.", 10, 90);
  text("P.S. If at any point you feel like restarting your adventure, press 'r' to go to the beginning", 10, 600);
}

function chuggingAlong() {
  textSize(32);
  fill(255);
  text("Even as the last few stars flicker and fade, our star still chugs along", 10, 90);
}

function heatDeath() {
  textSize(32);
  fill(255);
  text("Eventually, our star must also end. It cannot last forever", 10, 90);
}
function almostOver() {
  textSize(32);
  fill(255);
  text("But, letting go is a natural part of life", 10, 90);
  text("Only when we accept it, and cherish what we had, will the end truly be magical.", 10, 600);
}


function worryNot() {
  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    if (p.y > height || p.y < 0) {
      p.ydrift = p.ydrift * bounce;
    }

    if (p.x > width || p.x < 0) {
      p.xdrift = p.xdrift * bounce;
    }

    let diam = 2 + 40 / p.age;

    ellipse(p.x, p.y, diam, diam);

    p.x += p.xdrift;
    p.y += p.ydrift;

    p.xdrift = p.xdrift * accel;
    p.ydrift = p.ydrift * accel;

    p.ydrift = p.ydrift + gravity;

    p.age = p.age + 1;


  }

  points = points.filter(function(p) {
    if (p.age > 100) {
      return false;
    }
    else {
      return true;
    }
  });

}

function goBoom(xpos, ypos) {
  for (let i = 0; i < 20; i++) {
    let newpoint = {
      x: xpos + random(-2, 2),
      y: ypos + random(-2, 2),
      xdrift: random(-10, 10),
      ydrift: random(-10, 10),
      age: 1,
    };
    points.push(newpoint);
  }
}
