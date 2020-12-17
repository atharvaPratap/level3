var ground;
var player;
var g1, g2, g3, g4, g5, g6, g7, g8, g9, g0, g10, g11, g12, g13, g14, g15, g16;


function setup() {
  createCanvas(1200,600);
 
  ground = createSprite(400,590,600,20);
  ground.shapeColor = ("yellow")
  player = createSprite(300, 560, 40, 40);
  player.shapeColor = ("red")
  g1 = createSprite(1000, 400, 600, 20);
  g1.shapeColor = ("yellow")
  g2 = createSprite(400, 210, 600, 20);
  g2.shapeColor = ("yellow")
  g3 = createSprite(1000, 20, 600, 20);
  g3.shapeColor = ("yellow")
  g4 = createSprite(2000, -170, 800, 20);
  g4.shapeColor = ("yellow")
  g5 =  createSprite(2800, 10, 800, 20);
  g5.shapeColor = ("yellow")
  g6 = createSprite(3600, 80, 800, 20);
  g6.shapeColor = ("yellow")
  g7 = createSprite(2800, 700, 800, 20);
  g7.shapeColor = ("yellow")
  g8 = createSprite(3600, 750, 800, 20);
  g8.shapeColor = ("yellow")
  g9 = createSprite(4400, 800, 800, 20);
  g9.shapeColor =("yellow")
  g0 = createSprite(5200, 850, 800, 20);
  g0.shapeColor = ("yellow")
  g10 = createSprite(6000, 900, 800, 20);
  g10.shapeColor = ("yellow");
  g11 = createSprite(6800, 800, 800, 20);
  g11.shapeColor = ("yellow")
  g12 = createSprite(7600, 600, 800, 20);
  g12.shapeColor = ("yellow")
  g13 = createSprite(8400, 300, 800, 20);
  g13.shapeColor = ("yellow")
  g14 = createSprite(8800, 10, 20, 600);
  g14.shapeColor = ("yellow")
}

function draw() {
  background(215);  


  if(keyDown("up")){
    player.y = player.y -25;
  }
  if(keyDown("down")){
    player.y = player.y +25;
  }
  if(keyDown("right")){
    player.x = player.x +25;
  }
  if(keyDown("left")){
    player.x = player.x -25;
  }
  
  player.velocityY = player.velocityY + 0.6
  player.collide(ground);
  player.collide(g1);
  player.collide(g2);
  player.collide(g3);
  player.collide(g4);
  player.collide(g5);
  player.collide(g6);
  player.collide(g7);
  player.collide(g8);
  player.collide(g9);
  player.collide(g0);
  player.collide(g10);
  player.collide(g11);
  player.collide(g12);
  player.collide(g13);
  player.collide(g14);



  camera.x = player.x 
  camera.y = player.y
  player.bounceiness = 0.12;

  

  drawSprites();
}