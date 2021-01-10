
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var block1,block2,block3;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
  	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.shapeColor="white";
	World.add(world, ground);

	block1= new Dustbin(500,610,20,100);
	

	block2=new Dustbin(600,650,200,20);

	block3=new Dustbin(700,610,20,100);
	
	ball= new Paper(100,300,50);
	
	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-30});
		}
	}



function draw() {
  rectMode(CENTER);
  background("white");
  
  ball.display();
  //block1.display();
 // block2.display();
  block3.display();
  
  
  drawSprites();
 
}



