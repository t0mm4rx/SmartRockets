var frames = 0;
var generationCount = 0;
var generationTime = 300;
var instructionTime = 10;
var instructionsNumber = 50;
var rocketSpeed = 3;
var rocketsNumber = 800;

var generation;
var obstacles = [];
var target;

function setup() {
  createCanvas(500, 600);
  obstacles.push(new Rectangle(width / 2, height / 2, width - 200, 20));
  target = new Rectangle(width / 2, 50, 20, 20);
  generation = new Generation();
}

function draw() {
    background(100);
    if (frames++ >= generationTime) {
      var newRockets = generation.end();
      //throw new Error();
      generation = new Generation(newRockets);
      frames = 0;
      generationCount++;
    }
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("Génération n° " + generationCount, width / 2, 23);
    generation.draw();
    for (var i = 0; i < obstacles.length; i++) {
      obstacles[i].draw();
    }
    target.draw();

}
