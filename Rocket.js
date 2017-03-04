function Rocket(instructions) {
    this.instructions = [];
    this.vel = createVector(-0.1, -1);
    this.pos = createVector(width / 2, height - 20);
    this.r = random(100, 255);
    this.g = random(100, 255);
    this.b = random(100, 255);
    this.isCrashed = false;
    this.isSuccess = false;
    this.score = 0;
    this.frameCounter = 0;

    if (!instructions) {
        this.instructions = randomInstructions();
    } else {
        this.instructions = instructions;
    }

    this.currentInstrution = 0;
    this.vel = this.instructions[this.currentInstrution];

    this.end = function() {
        var d = dist(this.pos.x, this.pos.y, target.pos.x, target.pos.y);

        if (this.isSuccess) {
            this.score = 1;
        } else {
            this.score = 1 / ((d + 1) / 100);
        }
        if (this.isCrashed) this.score /= 2;
    }

    this.update = function() {
        this.frameCounter++;
        if (this.frameCounter >= instructionTime && !this.isCrashed && !this.isSuccess) {
            this.frameCounter = 0;
            this.nextInstruction();
        }

        this.handleCollisions();

        if (!this.isCrashed && !this.isSuccess) this.pos.add(this.vel);
    }

    this.draw = function() {
        this.update();
        push();
        translate(this.pos.x, this.pos.y);
        noStroke();
        fill(this.r, this.g, this.b);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 30, 10);

        pop();
    }

    this.nextInstruction = function() {
        this.currentInstrution++;
        this.vel.add(this.instructions[this.currentInstrution]);
        this.vel = this.vel.normalize().mult(rocketSpeed);
    }


    this.handleCollisions = function() {
        if (this.pos.x > width || this.pos.x < 0) this.isCrashed = true;
        if (this.pos.y > height || this.pos.y < 0) this.isCrashed = true;

        for (var i = 0; i < obstacles.length; i++) {
            var o = obstacles[i];
            if (this.pos.x > o.pos.x - o.width / 2 && this.pos.x < o.pos.x + o.width / 2) {
                if (this.pos.y > o.pos.y - o.height / 2 && this.pos.y < o.pos.y + o.height / 2) {
                    this.isCrashed = true;
                }
            }
        }
        if (this.pos.x > target.pos.x - target.width / 2 && this.pos.x < target.pos.x + target.width / 2) {
            if (this.pos.y > target.pos.y - target.height / 2 && this.pos.y < target.pos.y + target.height / 2) {
                this.isSuccess = true;
                this.pos = target.pos;
            }
        }

    }

}
