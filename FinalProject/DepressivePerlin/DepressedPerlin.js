var t;
function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
t = 0;
}

function draw() {
  stroke(166, 166, 166);
  noFill();
  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < 800; i++) {
    var ang = map(i, 6, 800, 0, TWO_PI);
    var rad = 800 * noise(i * 0.01, t * 0.005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += 1;

  if (frameCount % 900 == 0) {
	background(0);
  }
    stroke(0, 51, 102);
    noFill();
    translate(width/13, height/13);
    beginShape();
    for (var i = 0; i < 700; i++) {
      var ang = map(i, 0, 700, 0, TWO_PI);
      var rad = 700 * noise(i * 0.01, t * 0.005);
      var x = rad * cos(ang);
      var y = rad * sin(ang);
      curveVertex(x, y);
    }
    endShape(CLOSE);

    t += 1;
}
