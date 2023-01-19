var bg,bg_img;
var player,player_img;
var invisibleGround;
var obstacle1
var stone1,stone2,stone3
var stoneGroup,healthGroup
var hearts,heart1,heart2,heart3,health,health_img
var score = 1
var life = 300

function preload(){
bg_img = loadImage("assets/BG 2.jpg");
player_img = loadImage("assets/shooter_2.png");
stone1 = loadImage("assets/Stone1.png")
stone2 = loadImage("assets/Stone2.png")
stone3 = loadImage("assets/Stone3.png")

heart1 = loadImage("assets/heart_1.png")
heart2 = loadImage("assets/heart_2.png")
heart3 = loadImage("assets/heart_3.png")

health_img = loadImage("assets/health.png")
}

function setup(){
  createCanvas(1200,800);
  bg = createSprite(555,300);
  bg.addImage("background",bg_img)
  bg.scale = 2.4

  player = createSprite(100,333);
  player.addImage("plyr",player_img);
  player.scale = 0.4
  
  invisibleGround = createSprite(400,555,800,10)
  invisibleGround.visible = false

  hearts = createSprite(1000,50)
  hearts.addImage("ht3",heart3)
  hearts.scale = 0.5

  stoneGroup = createGroup();
  healthGroup = createGroup();
}


function draw(){
  background("lightgray");
  bg.velocityX = -3

  

  if(keyDown('UP_ARROW')){
    player.velocityY = -35;
  }
  player.velocityY += 2.7
  player.collide(invisibleGround)
  player.debug = true

  if(bg.x<10){
    bg.x = 1100
  }

  if(stoneGroup.isTouching(player)){
    console.log(life)
    life -= 1
  }

  if(life>=200){
    // 3 Hearts Image
    hearts.addImage("ht3",heart3)
  }
 
  else if(life<200 && life>100){
    // 2 Hearts Image
    hearts.addImage("ht3",heart2)
  }
  else if(life>1 && life<=100){
    // 1 Heart Image
    hearts.addImage('ht3',heart1)
  }
  else if(life<=1){
    // Sweet Alert
    console.log('Hi')
  }

  if(healthGroup.isTouching(player)){
    life +=10

  }

  drawSprites();
  spawnObstacles()
  spawnLives()

  fill("White")
  textSize(30)
  text("Score"+score,50,50)
  

}

function spawnObstacles(){
  if(frameCount%150 == 0){
  obstacle1 = createSprite(1000,random(400,600))
  obstacle1.velocityX = -10
  obstacle1.scale = .3
  var obstacleno = Math.round(random(1,3))
  switch(obstacleno){
    case 1: obstacle1.addImage(stone1);
    break;
    case 2: obstacle1.addImage(stone2);
    break;
    case 3: obstacle1.addImage(stone3);
    break;
    } 
    stoneGroup.add(obstacle1)
  }
}

function spawnLives(){
  if(frameCount%1200 == 0){
    health = createSprite(1000,random(400,600))
  health.velocityX = -25
  health.scale = 0.3
  health.addImage("hlth",health_img)

  healthGroup.add(health)
  }



}
