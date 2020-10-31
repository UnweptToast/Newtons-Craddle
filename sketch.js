
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;

	ball = new Ball(100,100,30,{isStatic: true});

	Engine.run(engine); 
}

function draw() {
  background("lightblue");

  ball.display();
}



