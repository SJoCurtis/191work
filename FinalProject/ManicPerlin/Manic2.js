var t;

var song;
var amp;
var button;

var volhistory = [];

function preload() {
  song = loadSound('./resources/FuckYourself.mp3');

function setup() {
createCanvas(windowWidth, windowHeight);
background(255, 153, 51);
t = 0;

button = createButton('Play/Pause');
button.mousePressed(toggleSong);
song.play();
amp = new p5.Amplitude();
amp.setInput(song);
}

function draw() {
  stroke(242, 242, 242);
  noFill();
  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < 900; i++) {
    var ang = map(i, 6, 900, 0, TWO_PI);
    var rad = 800 * noise(i * 0.02, t * 0.005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += 1;

  if (frameCount % 900 == 0) {
	background(255, 153, 51);
  }
    stroke(128, 0, 0);
    noFill();
    translate(width/14, height/14);
    beginShape();
    for (var i = 0; i < 700; i++) {
      var ang = map(i, 0, 700, 0, TWO_PI);
      var rad = 700 * noise(i * 0.02, t * 0.005);
      var x = rad * cos(ang);
      var y = rad * sin(ang);
      curveVertex(x, y);
    }
    endShape(CLOSE);

    t += 1;
pop();
// From Manic Song
var vol = amp.getLevel();
console.log(vol);
volhistory.push(vol);

push();
blendMode(LIGHTEST);
stroke(179, 71, 0);
strokeWeight(6);
fill(20);
angleMode(DEGREES);

translate(width / 2, height / 2);
beginShape();
for (var i = 0; i < 360; i++) {
  var r = map(volhistory[i], 0, 1, 300, 50);
  var x = r * cos(i);
  var y = r * sin(i);
  vertex(x, y);
}
endShape();

if (volhistory.length > 360) {
  volhistory.splice(0, 1);
}

pop();
}
// Song Functions
function toggleSong() {
if (song.isPlaying()) {
  song.pause();
} else {
  song.play();
  }
}
