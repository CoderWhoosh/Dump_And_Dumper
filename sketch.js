const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground,dustbinBottom,dustbinLeft,dustbinRight;
var dustbin,dustbinImage;
function preload(){
	dustbinImage = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
    engine = Engine.create();
	world = engine.world;
	paper1 = new Paper(200,450,40);
	ground = new Box(width/2,670,width,20);
    dustbinBottom = new Box(1200,650,110,20);
	dustbinLeft = new Box(1135,610,20,100);
	dustbinRight = new Box(1265,610,20,100);

	dustbin = createSprite(1200,580,20,100);
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.47;

	Engine.run(engine);
}
function draw() {
	rectMode(CENTER);
	background(230);
	//keyPressed();
	paper1.display();
	ground.displayBox();
	dustbinBottom.displayBox();
	dustbinLeft.displayBox();
	dustbinRight.displayBox();
	//image(dustbinImage,1200,610,20,100);
	drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:90,y:-90})
	}
}


