var box,box1,box2, ground, paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	keyPressed();
}

function setup() {
	createCanvas(800, 700);
	ground=createSprite(width/2,650,width,10)
	ground.shapeColor=color(1000,1000,0)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=Bodies.rectangle(width/2,660,width,10,{isStatic:true})
	World.add(world,ground);

	box=new Dustbin(720,610,20,75)
	box1=new Dustbin(620,650,200,20)
	box2=new Dustbin(520,610,20,75)
	
	paper=new Paper(200,640,20)



	Engine.run(engine);
  
}


function draw() {
  background(0);
  box1.display();
  box.display();
  box2.display();
  paper.display();
  drawSprites();
}
function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}