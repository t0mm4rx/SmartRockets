function Generation(old) {
    this.rockets = [];
    if (!old) {
        for (var i = 0; i < rocketsNumber; i++) {
            this.rockets[i] = new Rocket();
        }
    } else {
        this.rockets = old;
    }

    this.draw = function() {
        for (var i = 0; i < this.rockets.length; i++) {
            this.rockets[i].draw();
        }
    }

    this.end = function() {
        var newRockets = [];
        var avg = 0;

        for (var i = 0; i < this.rockets.length; i++) {
            this.rockets[i].end();
            avg += this.rockets[i].score;
        }
        avg /= this.rockets.length;
        console.log("Generation " + generationCount + " average is : " + avg);

        var rocketsPool = [];
        for (var i = 0; i < this.rockets.length; i++) {
            //console.log("Score of " + this.rockets[i].score + ", " + sqr(floor(this.rockets[i].score * 100)) + " entries in pool");
            for (var j = 0; j < sqr(floor(this.rockets[i].score * 100)); j++) {
                rocketsPool.push(this.rockets[i]);
            }
        }

        for (var i = 0; i < rocketsNumber; i++) {
            var newInstructions = [];
            var parentA = rocketsPool[floor(random(0, rocketsPool.length))];
            var parentB = rocketsPool[floor(random(0, rocketsPool.length))];
            var midPoint = floor(random(0, instructionsNumber));
            for (var j = 0; j < instructionsNumber; j++) {
                if (j < midPoint) {
                    newInstructions.push(parentA.instructions[j]);
                } else {
                    newInstructions.push(parentB.instructions[j]);
                }
            }
            if (random(0, 100) < 95) {
                newRockets.push(new Rocket(newInstructions));
            } else {
                newRockets.push(new Rocket());
            }
        }

        return newRockets;
    }

}
