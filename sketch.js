
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var chain1, chain2, chain3, chain4, chain5;
var beam;

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;


	ball1 = new Ball(width/2,400,30,{});
	ball2 = new Ball(width/2 - 60, 400, 30);
	ball3 = new Ball(width/2 - 120, 400, 30);
	ball4 = new Ball(width/2 + 60, 400, 30);
	ball5 = new Ball(width/2 + 600, 400, 30);

	beam = new Beam(width/2, ball1.body.position.y - 200, 300,20);

	chain1 = new Chain(ball1.body, beam.body, 0 ,0);
	chain2 = new Chain(ball2.body, beam.body, -60 ,0);
	chain3 = new Chain(ball3.body, beam.body, -120 ,0);
	chain4 = new Chain(ball4.body, beam.body, 60 ,0);
	chain5 = new Chain(ball5.body, beam.body, 120 ,0);

	Engine.run(engine); 

	console.log(ball1);
}

function draw() {
  background("lightblue");
  //var options = {bodyA: ball1.body, bodyB: ball4.body, stiffness: 1.0, length: 0};
  var options2 = {bodyA: ball2.body, bodyB: ball2.body, stiffness: 1.0, length: 100}
  Constraint.create(options2);
  //Constraint.create(options);
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  beam.display();

}



