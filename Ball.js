class Ball {
    constructor(x, y, radius) {
        var options = {density: 0.1, friction:0.0, restitution: 1.0001, frictionAir: 0.0, frictionStatic: 0.0, inertia:5000000};
        this.body = Bodies.circle(x, y, radius, options);

        World.add(world, this.body);
    }
    display() {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.body.circleRadius)
    }
}