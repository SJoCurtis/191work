function setup() {
  //Basic Elements
createCanvas(600, 600);
background(0, 253, 224);
}
//Body
function draw() {
push();
translate(250,250);
rectMode(CENTER);
fill(0);
rect(4, 20, 100, 200, 300);
fill(250);
ellipse(-5, -50, 12, 12);
ellipse(-5, -10, 12, 12);
ellipse(-5, 30, 12, 12);
ellipse(-5, 70, 12, 12);
pop();
// Legs
push();
translate(250, 400);
fill(0);
rect(30, -50, 10, 100);
rect(-30, -50, 10, 100);
rect(30, 30, 50, 25, 20);
rect(-70, 30, 50, 25, 20);
pop();
// Arms
push();
translate(250, 200);
strokeWeight(12);
line(80, 0, 30, 0);
line(80, 0, 100, -75);
rect(98, -89, 40, 5, 5);
rect(-89, 130, 40, 5, 5);
pop();

push();
// Head
translate(250, 250);
fill(250,200, 200);
ellipse(0, -110, 80, 98);
pop();
//mouth
fill(255);
arc(250, 169, 20, 10, 0, PI, CHORD);
//nose
fill(250, 200, 200);
ellipse(249, 150, 15, 8);
//eyes
fill(250, 250);
ellipse(230, 125, 20, 10);
ellipse(270, 125, 20, 10);
fill(30,85, 200);
ellipse(270, 125, 10, 10);
ellipse(230, 125, 10, 10);
fill(0);
ellipse(230, 125, 3, 3);
ellipse(270, 125, 3, 3);
//Hair
fill(0,253,200);
ellipse(280, 85, 35, 35);
ellipse(220, 85, 35, 35);
ellipse(250, 95, 50, 10);
//The End
pop();

//text
push();
fill(0);
textAlign(CENTER);
textSize(20);
textFont("Helvetica");
text("An Only Slightly Accurate Self-Portrait, by Jo Curtis", 300, 55);
pop();
}
