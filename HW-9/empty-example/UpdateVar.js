Module.prototype.update = function() {
this.x = this.x + (this.speed * this.xDir);
if (this.x >= this.unit || this.x <= 0) {
  this.xDir *= -1;
  this.x = this.x + (1 * this.xDir);
  this.y = this.y + (1 * this.yDir);
}
if (this.y >= this.unit || this.y <= 0) {
  this.yDir *= -1;
  this.y = this.y + (1 * this.yDir);
}
}
