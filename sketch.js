
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	hammer1=new hammer(100,100);
	stone=new Stone(600,655,70,70);
	stone2=new Stone(650,655,20,20);
	stone3=new Stone(550,655,25,25);
	stone4=new Stone(500,655,30,30);




	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  hammer1.display();
  stone.display();
  stone2.display();
  stone3.display();
  stone4.display();
  drawSprites();
 
}



