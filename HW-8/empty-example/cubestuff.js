function Cube(){
  this.x = random(0, windowWidth);
  this.y = random(0, windowHeight);
  this.size = random(0, 100);
  this.clr1 = random(169, 242);
  this.clr2 = random(169, 225);
  this.clr3 = random(186, 169);
  this.speed = random(5, 10);

  this.display = function() {
    push();
    blendMode(DIFFERENCE);
    fill(this.clr1, this.clr2, this.clr3);
    rect(this.x, this.y, this.size, this.size);
    fill(0);
    rect(this.x, this.y, this.size * 1, this.size * 0.50);
    fill(10);
    ellipse(this.x, this.y, this.size * 5, this.size * 10)
    pop();
  };

  this.move = function() {
    this.y = this.y - this.speed;
    if (this.y < 1 - this.size * 3.5){
      this.y = height + this.size * 3.5;
    }
  };
}
