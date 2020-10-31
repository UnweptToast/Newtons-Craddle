class Chain {
    constructor(a, b,  offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options ={bodyA: a,
        bodyB: b,
        stiffness: 1.0,
        length: 200,
        pointB:{x: offsetX, y: offsetY}
        };
        this.chain = Constraint.create(options);

        World.add(world, this.chain);
    }
    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        line(pointA.x, pointA.y, pointB.x +  + this.offsetX, pointB.y + + this.offsetY);
    }
}