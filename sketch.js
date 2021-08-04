var fixedRect, movingRect;

var car, wall;

function setup() {
  createCanvas(1200,800);
  // fixedRect = createSprite(600, 400, 50, 80);
  // fixedRect.shapeColor = "green";
  // fixedRect.debug = true;

  // movingRect = createSprite(400,200,80,30);
  // movingRect.shapeColor = "green";
  // movingRect.debug = true;

 car = createSprite(200,200,40,40);
 car.shapeColor='blue';
 car.velocityX = 3;

 wall = createSprite(600,200,40,80);
 wall.shapeColor = 'pink';

}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

 
  if(isTouching(car,wall)){
      textSize(30);
      text("touched",100,100);
      car.shapeColor='green';
      car.velocityX = 0;
  }

  // bounceOff(car,wall);

  // if(isTouching(movingRect,fixedRect)){
  //   movingRect.shapeColor = "red";
  //   fixedRect.shapeColor = "red";
  // }

 drawSprites();
}


