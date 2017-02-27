
var col = {
  r:0,
  g:0,
  b:0,
  bk:0,
};
var tri = {
  x1:20,
  x2:80,
  y1:40,
  y2:160,
  z1:60,
  z2:80,
};
function setup() {
  createCanvas(windowWidth, windowHeight);
  var currFrameRate;
  currFrameRate = frameRate(8);
  background(6, 34, 35);

  fill(146,204,199);
  translate(600,350);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(40, 60, 20, 90);
    rotate(PI/5);
  }
  fill(159,206,202);
  translate(450,10);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(40, 60, 20, 90);
    rotate(PI/5);
  }
  fill(54,102,98);
  translate(-900,10);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(40, 60, 20, 90);
    rotate(PI/5);
  }
}

function draw() {
  noStroke();
  fill(col.r,col.g,col.b,1);
  triangle(tri.x1,tri.x2,tri.y1,tri.y2,tri.z1,tri.z2);



  tri.x1 = noise(0.6 * pow(8,24));
  tri.x2 = abs(tri.x2 + 24);
  tri.y1 = random(-15,1400);
  tri.y2 = noise(1400/20);
  tri.z1 = abs(tri.z1 % 0.2);
  tri.z2 = random(-20,1600);

  col.r = random(0,162);
  col.g = random(0,214);
  col.b = random(0,200);
  col.bk = random(200,255);
}
