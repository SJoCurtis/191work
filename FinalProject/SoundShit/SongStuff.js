var song;

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("FuckYourself.mp3",loaded);
}

function loaded() {
  song.play();
}

function draw() {
  background(255);
}
