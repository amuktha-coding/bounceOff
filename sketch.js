var fixedRect, movingRect;
var obj1, obj2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  obj1 = createSprite(0,400,50,50);
  obj2 = createSprite(1200,400,50,50);
  obj1.velocityX = 5;
  obj2.velocityX = -5;
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounce(movingRect, fixedRect);
  bounce(obj1,obj2);
  drawSprites();
}

function bounce(obj3,obj4){
  if (obj3.x - obj4.x < obj4.width/2 +obj3.width/2
    && obj4.x - obj3.x < obj4.width/2 +obj3.width/2) {
  obj3.velocityX =obj3.velocityX * (-1);
  obj4.velocityX = obj4.velocityX * (-1);
}
if (obj3.y - obj4.y < obj4.height/2 + obj3.height/2
  && obj4.y - obj3.y <obj4.height/2 + obj3.height/2){
  obj3.velocityY = obj3.velocityY * (-1);
  obj4.velocityY = obj4.velocityY * (-1);
}
}