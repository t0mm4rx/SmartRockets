function Rectangle (x, y, width, height) {

  this.pos = createVector(x, y);
  this.width = width;
  this.height = height;

  this.draw = function () {
    fill(255);
    rectMode(CENTER);
    noStroke();
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }

}
