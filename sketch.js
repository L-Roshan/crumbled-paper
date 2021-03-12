
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var dustbinImg;
var paper,paperImg;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,545);
    dustbinImg =new dustbin(1200,545);
    paper =new Paper(50,height-90,40);
	Engine.run(engine);
  
}
function preload(){
  dustbinImg = loadImage("dustbingreen.png");  
  paperImg = loadImage("paper.png");
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  dustbinImg.display();
  paper.display();
  paperImg.display();
  
}
function keyPressed()
{

  if (keyCode === UP_ARROW)
  {

     Matter.Body.applyForce(paper.body, paper.body.position, {x: 400, y: -300});
     Matter.Body.applyForce(paperImg.body, paperImg.body.position, {x: 400, y: -300});
  } 

}
