
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	paper = new Paper(125, 698, 20);
	launcher = new Launcher(paper.body, {x:200, y:210});
	  
	trashCanBottom = new Dustbin(625, 680, 115, 20);
	trashCanLeft = new Dustbin(558, 638, 20, 105);
	trashCanRight = new Dustbin(680, 638, 20, 105);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  ground.display();

  paper.display();
  launcher.display();

  trashCanBottom.display();
  trashCanLeft.display();
  trashCanRight.display();
}

// function keyPressed(){
// 	if(keyCode === UP_ARROW){
// 		Matter.Body.applyForce(paper.body, paper.body.position,{x:60, y:-60});
// 	}
// }

function mouseDragged(){
	Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY});
  }
  
  function mouseReleased(){
	launcher.fly();
  }