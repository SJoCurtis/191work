var unit = 20;
var count;
var bubble = [];

function setup() {
  createCanvas(800, 400);
  noStroke();
  var wideCount = width / unit;
  var highCount = height / unit;
  count = wideCount * highCount;

  var index = 0;
  for (var y = 0; y < highCount; y++) {
    for (var x = 0; x < wideCount; x++) {
      bubble[index++] = new Module(x*unit, y*unit, unit/2, unit/2,
        random(0.06, 0.5), unit);
    }
  }
}

function draw() {
  background(4, 33, 81);
  for (var i = 0; i < count; i++) {
    bubble[i].update();
    bubble[i].draw();
  }
}
