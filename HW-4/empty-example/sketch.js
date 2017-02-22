var circleX = 0;
var circleY = 0;
var r = 0;
var b = 255;

function setup() {
createCanvas(800, 600);
}
function draw() {
//The Trippy Background
r = map(mouseX, 255, 0, 155, 0);
b = map(mouseY, 0, 255, 0, 255);
background(r, 255, b);
//Body
push();
translate(250,250);
rectMode(CENTER);
fill(0);
rect(1, 20, 75, 200, 300);
fill(250);
ellipse(-1, -50, 8, 8);
ellipse(-1, -10, 8, 8);
ellipse(-1, 30, 8, 8);
ellipse(-1, 70, 8, 8);
pop();
// Legs
push();
translate(250, 400);
fill(0);
rect(20, -50, 6, 120);
rect(-20, -50, 6, 120);
rect(20, 60, 50, 10, 50);
rect(-65, 60, 50, 10, 50);
pop();

push();
// Head
translate(250, 250);
fill(238,235, 210);
ellipse(0, -110, 80, 98);
pop();
//mouth
fill(255);
arc(250, 169, 20, 10, 0, PI, CHORD);
//nose
fill(239, 236, 211);
ellipse(249, 150, 15, 8);
//eyes
fill(255, 255);
ellipse(230, 125, 20, 10);
ellipse(270, 125, 20, 10);
fill(81, 74, 13);
ellipse(270, 125, 10, 10);
ellipse(230, 125, 10, 10);
fill(0);
ellipse(230, 125, 3, 3);
ellipse(270, 125, 3, 3);
//Hair
fill(64,124,104);
ellipse(280, 85, 35, 35);
ellipse(220, 85, 35, 35);
ellipse(250, 95, 50, 10);
pop();

//Black Rectangle Dude That the Mouse Walks
rect(mouseX, mouseY, 200, 5, 50);
fill(0);

//Black Box
translate(150,100);
fill(0);
rect(circleX,0, 80, 80);
circleX = circleX +2;

//White Box
translate(200, 200);
fill(255);
rect(circleX,0, 80, 80);
circleX =circleX + 1;

//Black Box
translate(300, 200);
fill(0);
rect(circleY, 0, 80, 80);
circleY =circleY + 2;



}
