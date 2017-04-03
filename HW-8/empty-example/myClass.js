function Cube(){
  this.x = random(0, 800);
  this.y = random(0, 800);
  this.size = random(1, 90);
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
    fill(128);
    ellipse(this.x, this.y, this.size * 100, this.size * 0.3)
    pop();
  };

  this.move = function() {
    this.y = this.y - this.speed;
    if (this.y < 1 - this.size * 3.5){
      this.y = height + this.size * 3.5;
    }
  };
}
