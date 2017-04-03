var cube = [];

function setup() {
createCanvas(windowWidth, windowHeight);
for (var c = 0; c < 500; c++){
cube[c] = new Cube();
  }
}

function draw() {
background(255);
for (var c = 0; c < 500; c++) {
cube[c].move();
cube[c].display();
  }
}
