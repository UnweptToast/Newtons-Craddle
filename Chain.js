class Chain {
    constructor(bodyA, bodyB, stiffness, length) {
        var options ={bodyA: bodyA, bodyB: bodyB, stiffness: stiffness, length: length};
        this.chain = Constraint.create(options);

        World.add(world, this.chain);
    }
    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}