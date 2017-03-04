function randomInstructions() {
    var instructions = [];
    for (var i = 0; i < instructionsNumber; i++) {
        instructions[i] = createVector(random(-1, 1), random(-1, 0.5));
        instructions[i] = instructions[i].setMag(2);
    }
    return instructions;
}

function mergeRockets(rocket1, rocket2) {
    /*var instructions = [];
    for (var i = 0; i < instructionsNumber; i++) {
      var r = random(0, 10);
      if (r < 5) {
        instructions[i] = rocket1.instructions[i];
      } else {
        instructions[i] = rocket2.instructions[i];
      } /*else {
        instructions[i] = randomInstructions()[i];
      }
    }
    return new Rocket(instructions);
    */
    return new Rocket(rocket1.instructions);
}

function sqr(n) {
    return n * n;
}
