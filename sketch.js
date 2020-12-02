
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1, side2, side3;
var paperObject;
var ground, dustbinImage;
function preload()
{
	dustbinImage=loadImage('dustbingreen.png')
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1 = new Dustbin(595, 650, 10, 100);
	side2 = new Dustbin(650, 695, 100,10);
	side3 = new Dustbin(700, 650, 10,100);
	paperObject = new Paper(200,600);
	ground = new Ground(400, 700, 800,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(dustbinImage, 595, 600, 105,100);
  side1.display();
  side2.display();
  side3.display();
  paperObject.display();
  ground.display();
 keyPressed();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:40, y:-45})
	}
}

