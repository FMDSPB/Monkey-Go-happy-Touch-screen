
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0;
var ground;
var backGround, backGroundImage;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  backGroundImage = loadImage("scenary2.jpg");
 
}



function setup() {
  
  createCanvas(500, 300);
  
  backGround = createSprite(90, 150);
  backGround.addImage(backGroundImage);
  backGround.scale = 1.9;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  monkey = createSprite(50, 250);
  monkey.addAnimation("monkey moving", monkey_running);
  monkey.scale = 0.099;
  //monkey.debug = true;

  ground = createSprite(250, 300, 600, 8);
  ground.visible = false;
  
}


function draw() {
  
  background("white");
  
  backGround.velocityX = -4;
  
  if (backGround.x < 0){
    backGround.x = backGround.width/2;
  }
  
  score = score + Math.round(getFrameRate() / 60);
  //console.log(score);
  text("Survival Time " + score, 30, 50);
  
  bananaCreator();
  obstacleCreator();
  
  //console.log(monkey.y);
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(keyDown("space")&& monkey.y > 264) {
    monkey.velocityY = -13;
  }
  
  monkey.collide(ground);
  
  drawSprites();
}

function bananaCreator() {
  
  if(frameCount % 80 === 0) {
    
   banana = createSprite(501, 200);
   banana.y = Math.round(random(120, 200));
   banana.addImage(bananaImage);
   banana.velocityX = -5;
   banana.scale = 0.1;
   banana.lifeTime = 400;
   bananaGroup.add(banana);
    
  }

}


function obstacleCreator() {
  
  if(frameCount % 300 === 0) {
    
   obstacle = createSprite(501, 279);
   obstacle.addImage("obstacle", obstacleImage);
   obstacle.velocityX = -5;
   obstacle.scale = 0.1;
   obstacle.lifeTime = 400;
   obstacleGroup.add(obstacle);
    
  }

}