var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
	console.log(starBody);
//fairy.debug = true;
fairy.setCollider("rectangle",200,0,500,900);
}


function draw() {
  background(bgImg);

  star.x = starBody.position.x;
  star.y = starBody.position.y;
keyPressed();

if(fairy.isTouching(star)){
	Body.setStatic(starBody,true);
}

  drawSprites();

}

function keyPressed() {
	if(keyWentDown(LEFT_ARROW)){
		fairy.velocityX = -3;
	}

	if(keyWentDown(RIGHT_ARROW)){
		fairy.velocityX = 3;
	}else if(keyWentUp(RIGHT_ARROW)||keyWentUp(LEFT_ARROW)){
		fairy.velocityX = 0;
	}

	if(keyDown(DOWN_ARROW)){
	Body.setStatic(starBody,false);
	}
	
}
