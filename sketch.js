const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;
var Paper;
var dustbinLine1,dustbinLine2,dustbinLine3;


function setup() {
  var canvas = createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);

  engine=Engine.create();
  world=engine.world;
  Paper=new Paper(200,140,50,50);
  dustbinLine1=new Dustbin(200,380,200,20);
  dustbinLine2=new Dustbin(100,380,20,100);
  dustbinLine3=new Dustbin(300,380,20,100);
  ground=new Ground(200,390,200,20);

  
}

function draw() {
  background(0);  

  Engine.update(engine);

  Paper.display();
  //Paper2.display();
  dustbinLine1.display();
  dustbinLine2.display();
  dustbinLine3.display();
  ground.display();
  
}

function keyPressed(){
if (keyCode===UP_ARROW) {
  Matter.Body.setStatic(Paper=false);
  
}
}