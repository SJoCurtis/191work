var ball = {
  x: 600,
  y: 400,
  xspeed: 6,
  yspeed: -3
};
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
  currFrameRate = frameRate(10);
  background(6, 34, 35);

}

function draw() {
  move();
  bounce();
  display();

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
function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  stroke(184,224,210);
  strokeWeight(0.5);
  fill(44, 99, 80);
  ellipse(ball.x, ball.y, 40, 40);
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
