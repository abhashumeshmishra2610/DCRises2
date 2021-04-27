var PLAY = 1;
var END = 0;
var gameState = PLAY;
var background4,background5;
var round;
var planet;
var mount3;
var c;
var g;
var points;
var rocket,rocket7;
var ground, invisibleGround, groundImage;
var cloudsGroup, cloudImage;
var obstacle
var score;
var gameOverImg,restartImg;
var jumpSound , checkPointSound, dieSound;
var planetland,PT;
var iconsImg;
var blast;   
var line;
var arrow,archer;
var WoodenBridge;

function preload(){
  background5 = loadImage("3257.jpg");
  rocket = loadImage("op.png");
  rocket7 = loadImage("op copy.png");
  blast = loadImage("jk.png");
  archer = loadImage("n3.png");
  arrow = loadImage("n6.png");
  WoodenBridge = loadImage("wood2.png");
  SM = loadSound("man_of_steel.mp3");
  DCFANDOM = loadImage("was.jpeg");
  DC = loadImage("9i.png");
  DC2 = loadImage("9ii.png");
  fighterPlane = loadImage("WW 2.png");
  BlackB = loadImage("yoyo.png");
  LetterS = loadImage("a.png");
  TextImg = loadImage("WWE.png");
  SHIELD = loadImage("0000.png");
  //portal = loadImage();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   
  BG = createSprite(width/2,height-600);
  //SM.loop();
  BG.addImage(background5);
  BG.scale = 1.0;
  BG.velocityX = -12;
  BG.x = width/2;
  BG.visible = true;

  Bl4 = createSprite(1500,500,width,500);
  Bl4.addImage(blast);
  Bl4.scale = 0.5;
  Bl4.velocityX = -12;
  Bl4.visible = true;

  Bl5 = createSprite(2600,500,width,500); 
  Bl5.addImage(blast);
  Bl5.scale = 0.5;
  Bl5.velocityX = -12;
  Bl5.visible = true;

  rocket1 = createSprite(350,0,width,50);
  rocket1.addImage(rocket);
  rocket1.visible = true;
  rocket1.debug = false;
  rocket1.scale = 0.2;
  rocket1.setCollider("rectangle",300,0,1900,900);

  Bl = createSprite(700,500,width,500);
  Bl.addImage(blast);
  Bl.scale = 0.5;
  Bl.velocityX = -12;
  Bl.visible = true;

  Bl1 = createSprite(4000,500,width,500);
  Bl1.addImage(blast);
  Bl1.scale = 0.5;
  Bl1.velocityX = -12;
  Bl1.visible = true;

  Bl2 = createSprite(8000,500,width,500);
  Bl2.addImage(blast);
  Bl2.scale = 0.5;
  Bl2.velocityX = -12;
  Bl2.visible = true;

  W =  createSprite(height/2+4480,width/2-716,width,50);
  W.addImage(WoodenBridge);
  W.scale = 1;
  W.velocityX = -12;

  W2 =  createSprite(height/2+4480,width/2-698,width,50);
  W2.addImage(WoodenBridge);
  W2.scale = 1;
  W2.velocityX = -12;

  W3 =  createSprite(height/2+4480,width/2-680,width,50);
  W3.addImage(WoodenBridge);
  W3.scale = 1;
  W3.velocityX = -12;

  W4 =  createSprite(height/2+4480,width/2-662,width,50);
  W4.addImage(WoodenBridge);
  W4.scale = 1;
  W4.velocityX = -12;

  W5 =  createSprite(height/2+4480,width/2-644,width,50);
  W5.addImage(WoodenBridge);
  W5.scale = 1;
  W5.velocityX = -12;

  W6 =  createSprite(height/2+4480,width/2-626,width,50);
  W6.addImage(WoodenBridge);
  W6.scale = 1;
  W6.velocityX = -12;

  W7 =  createSprite(height/2+4480,width/2-608,width,50);
  W7.addImage(WoodenBridge);
  W7.scale = 1;
  W7.velocityX = -12;

  W8 =  createSprite(height/2+4480,width/2-590,width,50);
  W8.addImage(WoodenBridge);
  W8.scale = 1;
  W8.velocityX = -12;

  W9 =  createSprite(height/2+4480,width/2-572,width,50);
  W9.addImage(WoodenBridge);
  W9.scale = 1;
  W9.velocityX = 0;

  W10 =  createSprite(height/2+4480,width/2-572,width,50);
  W10.addImage(WoodenBridge);
  W10.scale = 1;
  W10.velocityX = -12;

  W11 =  createSprite(height/2+4480,width/2-555,width,50);
  W11.addImage(WoodenBridge);
  W11.scale = 1;
  W11.velocityX = -12;

  W12 =  createSprite(height/2+4480,width/2-538,width,50);
  W12.addImage(WoodenBridge);
  W12.scale = 1;
  W12.velocityX = -12;

  W13 =  createSprite(height/2+4480,width/2-522,width,50);
  W13.addImage(WoodenBridge);
  W13.scale = 1;
  W13.velocityX = -12;

  W14 =  createSprite(height/2+4480,width/2-506,width,50);
  W14.addImage(WoodenBridge);
  W14.scale = 1;
  W14.velocityX = -12;

  W15 =  createSprite(height/2+4480,width/2-489,width,50);
  W15.addImage(WoodenBridge);
  W15.scale = 1;
  W15.velocityX = -12;

  W16 =  createSprite(height/2+4480,width/2-472,width,50);
  W16.addImage(WoodenBridge);
  W16.scale = 1;
  W16.velocityX = -12;

  W17 =  createSprite(height/2+4480,width/2-456,width,50);
  W17.addImage(WoodenBridge);
  W17.scale = 1;
  W17.velocityX = -12;

  W18 =  createSprite(height/2+4480,width/2-439,width,50);
  W18.addImage(WoodenBridge);
  W18.scale = 1;
  W18.velocityX = -12;
     
  W19 =  createSprite(height/2+4480,width/2-422,width,50);
  W19.addImage(WoodenBridge);
  W19.scale = 1;
  W19.velocityX = -12;

  W20 =  createSprite(height/2+4480,width/2-405,width,50);
  W20.addImage(WoodenBridge);
  W20.scale = 1;
  W20.velocityX = -12;

  W21 =  createSprite(height/2+4480,width/2-390,width,50);
  W21.addImage(WoodenBridge);
  W21.scale = 1;
  W21.velocityX = -12;

  W22 =  createSprite(height/2+4480,width/2-375,width,50);
  W22.addImage(WoodenBridge);
  W22.scale = 1;
  W22.velocityX = -12;

  W23 =  createSprite(height/2+4480,width/2-358,width,50);
  W23.addImage(WoodenBridge);
  W23.scale = 1;
  W23.velocityX = -12;

  W24 =  createSprite(height/2+4480,width/2-342,width,50);
  W24.addImage(WoodenBridge);
  W24.scale = 1;
  W24.velocityX = -12;

  W25 =  createSprite(height/2+4480,width/2-327,width,50);
  W25.addImage(WoodenBridge);
  W25.scale = 1;
  W25.velocityX = -12;

  W26 =  createSprite(height/2+4480,width/2-312,width,50);
  W26.addImage(WoodenBridge);
  W26.scale = 1;
  W26.velocityX = -12;

  W27 =  createSprite(height/2+4480,width/2-296,width,50);
  W27.addImage(WoodenBridge);
  W27.scale = 1;
  W27.velocityX = -12;

  W28 =  createSprite(height/2+4480,width/2-280,width,50);
  W28.addImage(WoodenBridge);
  W28.scale = 1;
  W28.velocityX = -12;

  W29 =  createSprite(height/2+4480,width/2-264,width,50);
  W29.addImage(WoodenBridge);
  W29.scale = 1;
  W29.velocityX = -12;

  W30 =  createSprite(height/2+4480,width/2-248,width,50);
  W30.addImage(WoodenBridge);
  W30.scale = 1;
  W30.velocityX = -12;
//.
  W31 =  createSprite(height/2+4480,width/2-232,width,50);
  W31.addImage(WoodenBridge);
  W31.scale = 1;
  W31.velocityX = -12;

  W32 =  createSprite(height/2+4480,width/2-225,width,50);
  W32.addImage(WoodenBridge);
  W32.scale = 1;
  W32.velocityX = 0;

  W33 =  createSprite(height/2+4480,width/2-216,width,50);
  W33.addImage(WoodenBridge);
  W33.scale = 1;
  W33.velocityX = -12;

  W34 =  createSprite(height/2+4480,width/2-204,width,50);
  W34.addImage(WoodenBridge);
  W34.scale = 1;
  W34.velocityX = -12;

  W35 =  createSprite(height/2+4480,width/2-188,width,50);
  W35.addImage(WoodenBridge);
  W35.scale = 1;
  W35.velocityX = -12;

  W36 =  createSprite(height/2+4480,width/2-86,width,50);
  W36.addImage(WoodenBridge);
  W36.scale = 1;
  W36.velocityX = -12;

  W37 =  createSprite(height/2+4480,width/2-68,width,50);
  W37.addImage(WoodenBridge);
  W37.scale = 1;
  W37.velocityX = -12;

  W38 =  createSprite(height/2+4480,width/2-50,width,50);
  W38.addImage(WoodenBridge);
  W38.scale = 1;
  //W38.velocityX = -12;

  W39 =  createSprite(height/2+4480,width/2-32,width,50);
  W39.addImage(WoodenBridge);
  W39.scale = 1;
  //W39.velocityX = -12;

  W40 =  createSprite(height/2+4480,width/2-14,width,50);
  W40.addImage(WoodenBridge);
  W40.scale = 1;
  //W40.velocityX = -12;

  W41 =  createSprite(height/2+4480,width/2+4,width,50);
  W41.addImage(WoodenBridge);
  W41.scale = 1;
  //W41.velocityX = -12;

  W42 =  createSprite(height/2+4480,width/2+22,width,50);
  W42.addImage(WoodenBridge);
  W42.scale = 1;
  //W42.velocityX = -12;

  W43 =  createSprite(height/2+4480,width/2+40,width,50);
  W43.addImage(WoodenBridge);
  W43.scale = 1;
  //W43.velocityX = -12;

  W44 =  createSprite(height/2+4480,width/2+58,width,50);
  W44.addImage(WoodenBridge);
  W44.scale = 1;
  //W44.velocityX = -12; 

  W45 =  createSprite(height/2+4480,width/2+76,width,50);
  W45.addImage(WoodenBridge);
  W45.scale = 1;
  //W45.velocityX = -12;

  W46 =  createSprite(height/2+4480,width/2+94,width,50);
  W46.addImage(WoodenBridge);
  W46.scale = 1;
  //W46.velocityX = -12;

  AB = createSprite(height/2-400,width/2-150,width,50);
  AB.addImage(archer);
  AB.scale = 0.4;
  AB.velocityX = 0;

  AC = createSprite(height/2-400,width/2-250,width,50);
  AC.addImage(archer);
  AC.scale = 0.4;
  AC.velocityX = 0;

  AD = createSprite(height/2-400,width/2-350,width,50);
  AD.addImage(archer);
  AD.scale = 0.4;
  AD.velocityX = 0;

  AE = createSprite(height/2-400,width/2-450,width,50);
  AE.addImage(archer);
  AE.scale = 0.4;
  AE.velocityX = 0;

  AF = createSprite(height/2-400,width/2-550,width,50);
  AF.addImage(archer);
  AF.scale = 0.4;
  AF.velocityX = 0;

  AG = createSprite(height/2-400,width/2-650,width,50);
  AG.addImage(archer);
  AG.scale = 0.4;
  AG.velocityX = 0;

  A2 = createSprite(4835,45,width,50);
  A2.addImage(arrow);
  A2.scale = 0.1;
  A2.velocityX = -12;

  A3 = createSprite(4835,142,width,50);
  A3.addImage(arrow);
  A3.scale = 0.1;
  A3.velocityX = -12;

  A4 = createSprite(4835,242,width,50);
  A4.addImage(arrow);
  A4.scale = 0.1;
  A4.velocityX = -12;

  A5 = createSprite(4835,342,width,50);
  A5.addImage(arrow);
  A5.scale = 0.1;
  A5.velocityX = -12;

  A6 = createSprite(4835,442,width,50);
  A6.addImage(arrow);
  A6.scale = 0.1;
  A6.velocityX = -12;

  A7 = createSprite(4835,542,width,50);
  A7.addImage(arrow);
  A7.scale = 0.1;
  A7.velocityX = -12;

  invisibleGround = createSprite(width/2,height+100,width,125);
  invisibleGround.visible = false;

  l = createSprite(4000,1,10,90000);
  l.velocityX = -12;
  l.visible = false;

  e = createSprite(height/2+500,width/2-900,10,900000);
  e.velocityX = -12;
  e.visible = false;

  fill = createSprite(windowHeight,windowWidth);
  fill.addImage(DCFANDOM);
  fill.scale = 15;
  fill.visible = false;

  li = createSprite(1000,width/2-500,10,width);
  li.addImage(DC);
  li.scale = 0.7;
  li.velocityX = 0;
  li.visible = false;

  fill2 = createSprite(998,width/2-488,10,width);
  fill2.addImage(DC2);
  fill2.scale = 0.7;
  fill2.visible = false;

  fill3 = createSprite(height/2+840,width/2-645,10,width);
  fill3.addImage(TextImg);
  fill3.scale = 0.5;
  fill3.visible = false;

  fill4 = createSprite(height/2+680,width/2-660,10,width);
  fill4.addImage(LetterS);
  fill4.scale = 0.1;
  fill4.visible = false;

  fill4e = createSprite(height/2+200,width/2-310,width,50);
  fill4e.addImage(SHIELD);
  fill4e.scale = 0.6;
  fill4e.visible = false;

  e2 = createSprite(height/2+360,width/2-900,100,900000);
  e2.velocityX = 0;
  e2.visible = false;

  e3 = createSprite(height/2+10500,width/2-900,10,900000);
  e3.velocityX = -12;
  e3.visible = false;

  //e31 = createSprite(height/2+500,width/2-500,width,10);
  //e31.addImage(portal);
  //e31.velocityX = 0;
  //e31.scale = 1;
  //e31.visible = false;
  
  score = 0;
  points = 0;
}

function draw() {  
  background(180);  
  if (BG.x < 0){
      BG.x = BG.width/2;
  }
  
  if(gameState === PLAY){
    
    score = score + Math.round(getFrameRate()/60);
    
    if(score > 0 && score % 100 === 0){
    }

    if(touches.length > 0 || keyDown("space")&& rocket1.y >= 100) {
        rocket1.velocityY = -12; 
        touches = [];
    } 

    if(keyDown("D")) {
      rocket1.addImage(rocket7);
  }

  if(keyDown("C")) {
    rocket1.addImage(rocket);
}
    
    //add gravity
    rocket1.velocityY = rocket1.velocityY + 0.8;
  }
     if(gameState === END) {         
      fill.visible = true;
      fill2.visible = true; 

      li.visible = true;

      rocket1.velocityY = 0;
      rocket.visible = false;
      BG.velocityX = 0;

      //fill.visible = true;

  W.visible = false;
  W2.visible = false;
  W3.visible = false;
  W4.visible = false;
  W5.visible = false;
  W6.visible = false;
  W7.visible = false;
  W8.visible = false;
  W9.visible = false;
  W10.visible = false;
  W11.visible = false;
  W12.visible = false;
  W13.visible = false;
  W14.visible = false;
  W15.visible = false;
  W16.visible = false;
  W17.visible = false;
  W18.visible = false;
  W19.visible = false;
  W20.visible = false;
  W21.visible = false;
  W22.visible = false;
  W23.visible = false;
  W24.visible = false;
  W25.visible = false;
  W26.visible = false;
  W27.visible = false;
  W28.visible = false;
  W29.visible = false;
  W30.visible = false;
  W31.visible = false;
  W32.visible = false;
  W33.visible = false;
  W34.visible = false;
  W35.visible = false;
  W36.visible = false;
  W37.visible = false;
  W38.visible = false;
  W39.visible = false;
  W40.visible = false;
  W41.visible = false;
  W42.visible = false; 
  W43.visible = false;
  W44.visible = false;
  W45.visible = false;
  W46.visible = false;
  AB.visible = false;
  AC.visible = false;
  AD.visible = false;
  AE.visible = false;
  AF.visible = false;
  AG.visible = false;
  A2.visible = false;
  A3.visible = false;
  A4.visible = false;
  A5.visible = false;
  A6.visible = false;
  A7.visible = false;
  Bl.visible = false;
  Bl1.visible = false;
  Bl2.visible = false;
  Bl4.visible = false;
  Bl5.visible = false;

      W.velocityX = 0;
      W2.velocityX = 0;
      W3.velocityX = 0;
      W4.velocityX = 0;
      W5.velocityX = 0;
      W6.velocityX = 0;
      W7.velocityX = 0;
      W8.velocityX = 0;
      W9.velocityX = 0;
      W10.velocityX = 0;
      W11.velocityX = 0;
      W12.velocityX = 0;
      W13.velocityX = 0;
      W14.velocityX = 0;
      W15.velocityX = 0;
      W16.velocityX = 0;
      W17.velocityX = 0;
      W18.velocityX = 0;
      W19.velocityX = 0;
      W20.velocityX = 0;
      W21.velocityX = 0;
      W22.velocityX = 0;
      W23.velocityX = 0;
      W24.velocityX = 0;
      W25.velocityX = 0;
      W26.velocityX = 0;
      W27.velocityX = 0;
      W28.velocityX = 0;
      W29.velocityX = 0;
      W30.velocityX = 0;
      W31.velocityX = 0;
      W32.velocityX = 0;
      W33.velocityX = 0;
      W34.velocityX = 0;
      W35.velocityX = 0;
      W36.velocityX = 0;
      W37.velocityX = 0;
      W38.velocityX = 0;
      W39.velocityX = 0;
      W40.velocityX = 0;
      W41.velocityX = 0;
      W42.velocityX = 0; 
      W43.velocityX = 0;
      W44.velocityX = 0;
      W45.velocityX = 0;
      W46.velocityX = 0;
      
      AB.velocityX = 0; 
      AC.velocityX = 0; 
      AD.velocityX = 0; 
      AE.velocityX = 0; 
      AF.velocityX = 0; 
      AG.velocityX = 0; 

      A2.velocityX = 0; 
      A3.velocityX = 0; 
      A4.velocityX = 0; 
      A5.velocityX = 0; 
      A6.velocityX = 0; 
      A7.velocityX = 0; 

      BG.lifeTime = -1;
     
      Bl.velocityX = 0;
      Bl1.velocityX = 0;
      Bl2.velocityX = 0;
      Bl4.velocityX = 0;
      Bl5.velocityX = 0;
  
     if(mousePressedOver(fill)) {
        reset();
     }
   }
  
  //stop trex from falling down
  rocket1.collide(invisibleGround);
  drawSprites();
  //plan = createSprite(350,200);
  //plan.scale = 0.2;
  //plan.addImage(planet);
  //displaying score

  //if(rocket1.isTouching(l)){
     //A2.velocityX = -150;
     //A3.velocityX = -150;
     //A4.velocityX = -150;
     //A5.velocityX = -150;
     //A6.velocityX = -150;
     //A7.velocityX = -150;
  //}

  //if(rocket1.isTouching(A2)||rocket1.isTouching(A3)||rocket1.isTouching(A4)||rocket1.isTouching(A5)||rocket1.isTouching(A6)||rocket1.isTouching(A7)){
    //rocket1.velocityY = 900;
    //gameState = END;
//}

if(rocket1.isTouching(e)){
  fill3.visible = true;
  fill4.visible = true;
}

//if(keyDown("A")||e2.isTouching(A2)||e2.isTouching(A3)||e2.isTouching(A4)||e2.isTouching(A5)||e2.isTouching(A6)||e2.isTouching(A7)){
  //fill4e.visible = true;
  //e2.visible = false;
  //A2.velocityX = 400;
  //A3.velocityX = 400;
  //A4.velocityX = 400;
  //A5.velocityX = 400;
  //A6.velocityX = 400;
  //A7.velocityX = 400;
//}

if(e2.isTouching(e3)){
  e2.destroy();
  fill4e.destroy();
  fill3.visible = false;
  fill4.visible = false;
}

//push();
//stroke("black");
//strokeWeight(5);
//textSize(20);
//text("🅰🅱🅷🅰🆂🅷'🆂 🅳🅲 🅶🅰🅼🅴",height/2+678,width/2-650);
//text.visible = false;
//pop();

}

function reset(){
  gameState = PLAY;
  li.visible = false;
  //fill.destroy();
  fill.visible = false;
  fill2.visible = false;
  rocket1.visible = false;
  BG.velocityX = -12;
  rocket1.addImage(rocket);
  Bl.destroy();
  Bl1.destroy();
  Bl2.destroy();
  Bl4.destroy();
  Bl5.destroy();
  Bl1.velocityX = -12;
  Bl2.velocityX = -12;
  Bl4.velocityX = -12;
  Bl5.velocityX = -12;
  score = 0;
  points = 0;

  W.visible = false;
  W2.visible = false;
  W3.visible = false;
  W4.visible = false;
  W5.visible = false;
  W6.visible = false;
  W7.visible = false;
  W8.visible = false;
  W9.visible = false;
  W10.visible = false;
  W11.visible = false;
  W12.visible = false;
  W13.visible = false;
  W14.visible = false;
  W15.visible = false;
  W16.visible = false;
  W17.visible = false;
  W18.visible = false;
  W19.visible = false;
  W20.visible = false;
  W21.visible = false;
  W22.visible = false;
  W23.visible = false;
  W24.visible = false;
  W25.visible = false;
  W26.visible = false;
  W27.visible = false;
  W28.visible = false;
  W29.visible = false;
  W30.visible = false;
  W31.visible = false;
  W32.visible = false;
  W33.visible = false;
  W34.visible = false;
  W35.visible = false;
  W36.visible = false;
  W37.visible = false;
  W38.visible = false;
  W39.visible = false;
  W40.visible = false;
  W41.visible = false;
  W42.visible = false; 
  W43.visible = false;
  W44.visible = false;
  W45.visible = false;
  W46.visible = false;
  AB.visible = false;
  AC.visible = false;
  AD.visible = false;
  AE.visible = false;
  AF.visible = false;
  AG.visible = false;
  A2.visible = false;
  A3.visible = false;
  A4.visible = false;
  A5.visible = false;
  A6.visible = false;
  A7.visible = false;

  W =  createSprite(4900,1,width,50);
  W.addImage(WoodenBridge);
  W.scale = 1;
  W.velocityX = -12;

  W2 =  createSprite(4900,19,width,50);
  W2.addImage(WoodenBridge);
  W2.scale = 1;
  W2.velocityX = -12;

  W3 =  createSprite(4900,39,width,50);
  W3.addImage(WoodenBridge);
  W3.scale = 1;
  W3.velocityX = -12;

  W4 =  createSprite(4900,59,width,50);
  W4.addImage(WoodenBridge);
  W4.scale = 1;
  W4.velocityX = -12;

  W5 =  createSprite(4900,79,width,50);
  W5.addImage(WoodenBridge);
  W5.scale = 1;
  W5.velocityX = -12;

  W6 =  createSprite(4900,99,width,50);
  W6.addImage(WoodenBridge);
  W6.scale = 1;
  W6.velocityX = -12;

  W7 =  createSprite(4900,119,width,50);
  W7.addImage(WoodenBridge);
  W7.scale = 1;
  W7.velocityX = -12;

  W8 =  createSprite(4900,139,width,50);
  W8.addImage(WoodenBridge);
  W8.scale = 1;
  W8.velocityX = -12;

  W9 =  createSprite(4900,159,width,50);
  W9.addImage(WoodenBridge);
  W9.scale = 1;
  W9.velocityX = -12;

  W10 =  createSprite(4900,179,width,50);
  W10.addImage(WoodenBridge);
  W10.scale = 1;
  W10.velocityX = -12;

  W11 =  createSprite(4900,199,width,50);
  W11.addImage(WoodenBridge);
  W11.scale = 1;
  W11.velocityX = -12;

  W12 =  createSprite(4900,219,width,50);
  W12.addImage(WoodenBridge);
  W12.scale = 1;
  W12.velocityX = -12;

  W13 =  createSprite(4900,239,width,50);
  W13.addImage(WoodenBridge);
  W13.scale = 1;
  W13.velocityX = -12;

  W14 =  createSprite(4900,259,width,50);
  W14.addImage(WoodenBridge);
  W14.scale = 1;
  W14.velocityX = -12;

  W15 =  createSprite(4900,279,width,50);
  W15.addImage(WoodenBridge);
  W15.scale = 1;
  W15.velocityX = -12;

  W16 =  createSprite(4900,299,width,50);
  W16.addImage(WoodenBridge);
  W16.scale = 1;
  W16.velocityX = -12;

  W17 =  createSprite(4900,319,width,50);
  W17.addImage(WoodenBridge);
  W17.scale = 1;
  W17.velocityX = -12;

  W18 =  createSprite(4900,339,width,50);
  W18.addImage(WoodenBridge);
  W18.scale = 1;
  W18.velocityX = -12;

  W19 =  createSprite(4900,359,width,50);
  W19.addImage(WoodenBridge);
  W19.scale = 1;
  W19.velocityX = -12;

  W20 =  createSprite(4900,379,width,50);
  W20.addImage(WoodenBridge);
  W20.scale = 1;
  W20.velocityX = -12;

  W21 =  createSprite(4900,399,width,50);
  W21.addImage(WoodenBridge);
  W21.scale = 1;
  W21.velocityX = -12;

  W22 =  createSprite(4900,419,width,50);
  W22.addImage(WoodenBridge);
  W22.scale = 1;
  W22.velocityX = -12;

  W23 =  createSprite(4900,439,width,50);
  W23.addImage(WoodenBridge);
  W23.scale = 1;
  W23.velocityX = -12;

  W24 =  createSprite(4900,459,width,50);
  W24.addImage(WoodenBridge);
  W24.scale = 1;
  W24.velocityX = -12;

  W25 =  createSprite(4900,479,width,50);
  W25.addImage(WoodenBridge);
  W25.scale = 1;
  W25.velocityX = -12;

  W26 =  createSprite(4900,499,width,50);
  W26.addImage(WoodenBridge);
  W26.scale = 1;
  W26.velocityX = -12;

  W27 =  createSprite(4900,519,width,50);
  W27.addImage(WoodenBridge);
  W27.scale = 1;
  W27.velocityX = -12;

  W28 =  createSprite(4900,539,width,50);
  W28.addImage(WoodenBridge);
  W28.scale = 1;
  W28.velocityX = -12;

  W29 =  createSprite(4900,559,width,50);
  W29.addImage(WoodenBridge);
  W29.scale = 1;
  W29.velocityX = -12;

  W30 =  createSprite(4900,579,width,50);
  W30.addImage(WoodenBridge);
  W30.scale = 1;
  W30.velocityX = -12;

  W31 =  createSprite(4900,599,width,50);
  W31.addImage(WoodenBridge);
  W31.scale = 1;
  W31.velocityX = -12;

  W32 =  createSprite(4900,619,width,50);
  W32.addImage(WoodenBridge);
  W32.scale = 1;
  W32.velocityX = -12;

  W33 =  createSprite(4900,639,width,50);
  W33.addImage(WoodenBridge);
  W33.scale = 1;
  W33.velocityX = -12;

  W34 =  createSprite(4900,659,width,50);
  W34.addImage(WoodenBridge);
  W34.scale = 1;
  W34.velocityX = -12;

  W35 =  createSprite(4900,679,width,50);
  W35.addImage(WoodenBridge);
  W35.scale = 1;
  W35.velocityX = -12;

  W36 =  createSprite(4900,699,width,50);
  W36.addImage(WoodenBridge);
  W36.scale = 1;
  W36.velocityX = -12;

  W37 =  createSprite(4900,719,width,50);
  W37.addImage(WoodenBridge);
  W37.scale = 1;
  W37.velocityX = -12;

  W38 =  createSprite(4900,739,width,50);
  W38.addImage(WoodenBridge);
  W38.scale = 1;
  W38.velocityX = -12;

  W39 =  createSprite(4900,759,width,50);
  W39.addImage(WoodenBridge);
  W39.scale = 1;
  W39.velocityX = -12;

  W40 =  createSprite(4900,779,width,50);
  W40.addImage(WoodenBridge);
  W40.scale = 1;
  W40.velocityX = -12;

  W41 =  createSprite(4900,799,width,50);
  W41.addImage(WoodenBridge);
  W41.scale = 1;
  W41.velocityX = -12;

  W42 =  createSprite(4900,819,width,50);
  W42.addImage(WoodenBridge);
  W42.scale = 1;
  W42.velocityX = -12;

  W43 =  createSprite(height/2+400,width/2+40,width,50);
  W43.addImage(WoodenBridge);
  W43.scale = 1;
  W43.velocityX = 0;

  W44 =  createSprite(height/2+400,width/2+58,width,50);
  W44.addImage(WoodenBridge);
  W44.scale = 1;
  W44.velocityX = 0;

  W45 =  createSprite(height/2+400,width/2+76,width,50);
  W45.addImage(WoodenBridge);
  W45.scale = 1;
  W45.velocityX = 0;

  W46 =  createSprite(height/2+400,width/2+94,width,50);
  W46.addImage(WoodenBridge);
  W46.scale = 1;
  W46.velocityX = 0;

  AB = createSprite(4875,150,width,50);
  AB.addImage(archer);
  AB.scale = 0.4;
  AB.velocityX = -12;

  AC = createSprite(4875,250,width,50);
  AC.addImage(archer);
  AC.scale = 0.4;
  AC.velocityX = -12;

  AD = createSprite(4875,350,width,50);
  AD.addImage(archer);
  AD.scale = 0.4;
  AD.velocityX = -12;

  AE = createSprite(4875,450,width,50);
  AE.addImage(archer);
  AE.scale = 0.4;
  AE.velocityX = -12;

  AF = createSprite(4875,550,width,50);
  AF.addImage(archer);
  AF.scale = 0.4;
  AF.velocityX = -12;

  AG = createSprite(4875,650,width,50);
  AG.addImage(archer);
  AG.scale = 0.4;
  AG.velocityX = -12;

  A2 = createSprite(4835,45,width,50);
  A2.addImage(arrow);
  A2.scale = 0.1;
  A2.velocityX = -12;

  A3 = createSprite(4835,142,width,50);
  A3.addImage(arrow);
  A3.scale = 0.1;
  A3.velocityX = -12;

  A4 = createSprite(4835,242,width,50);
  A4.addImage(arrow);
  A4.scale = 0.1;
  A4.velocityX = -12;

  A5 = createSprite(4835,342,width,50);
  A5.addImage(arrow);
  A5.scale = 0.1;
  A5.velocityX = -12;

  A6 = createSprite(4835,442,width,50);
  A6.addImage(arrow);
  A6.scale = 0.1;
  A6.velocityX = -12;

  A7 = createSprite(4835,542,width,50);
  A7.addImage(arrow);
  A7.scale = 0.1;
  A7.velocityX = -12;

  rocket1 = createSprite(350,0,width,50);
  rocket1.addImage(rocket);
  rocket1.visible = true;
  rocket1.debug = false;
  rocket1.scale = 0.2;
  rocket1.setCollider("rectangle",300,0,1900,900);

  Bl = createSprite(700,500,width,500);
  Bl.addImage(blast);
  Bl.scale = 0.5;
  Bl.velocityX = -12;
  Bl.visible = true;

  Bl1 = createSprite(4000,500,width,500);
  Bl1.addImage(blast);
  Bl1.scale = 0.5;
  Bl1.velocityX = -12;
  Bl1.visible = true;

  Bl2 = createSprite(8000,500,width,500);
  Bl2.addImage(blast);
  Bl2.scale = 0.5;
  Bl2.velocityX = -12;
  Bl2.visible = true;

  Bl4 = createSprite(1500,500,width,500);
  Bl4.addImage(blast);
  Bl4.scale = 0.5;
  Bl4.velocityX = -12;
  Bl4.visible = true;

  Bl5 = createSprite(2600,500,width,500);
  Bl5.addImage(blast);
  Bl5.scale = 0.5;
  Bl5.velocityX = -12;
  Bl5.visible = true;

  e = createSprite(height/2+500,width/2-900,10,900000);
  e.velocityX = -12;
  e.visible = false;

  fill4e = createSprite(height/2+200,width/2-310,width,50);
  fill4e.addImage(SHIELD);
  fill4e.scale = 0.6;
  fill4e.visible = false;

  e2 = createSprite(height/2+360,width/2-900,100,900000);
  e2.velocityX = 0;
  e2.visible = false;

  l = createSprite(4000,1,10,90000);
  l.velocityX = -12;
  l.visible = false;

  fill3 = createSprite(height/2+840,width/2-645,10,width);
  fill3.addImage(TextImg);
  fill3.scale = 0.5;
  fill3.visible = false;

  fill4 = createSprite(height/2+680,width/2-660,10,width);
  fill4.addImage(LetterS);
  fill4.scale = 0.1;
  fill4.visible = false;
}