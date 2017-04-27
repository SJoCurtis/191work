var t;
function setup() {
createCanvas(windowWidth, windowHeight);
background(255, 153, 51);
t = 0;
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
}
