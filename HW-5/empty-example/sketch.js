
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
   walker = new Walker();
  var currFrameRate;
  currFrameRate = frameRate(10);
  background(6, 34, 35);

}

function draw() {
  walker.step();
    walker.display();
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
function Walker (){
	console.log('walker constructor');
  this.x = 600;
	this.y = 750;

	this.display = function(){
    stroke(54,102,98);
    strokeWeight(30);
		point(this.x,this.y);
	}
	this.step = function(){
		var choice = Math.floor(Math.random() * (20 - 10)) + 2;

		if (choice == 4){
			this.x++;
		}else if (choice ==6){
			this.x--;

		}
		else if(choice ==8){
			this.y++;
		}
		else {this.y--;}
	}
}
