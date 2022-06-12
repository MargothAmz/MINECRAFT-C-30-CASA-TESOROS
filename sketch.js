var ball,lowerWall,upperWall,leftWall;

//var bricks = [
//  { x: 550, y: 20, w: 1200, h: 40 }, //upperbrick
//  { x: 550, y: 450, w: 1200, h: 40 }, // lowerbrick 1
//  { x: 15, y: 235, w: 40, h: 390 }, // left brick
//  { x: 300, y: 165, w: 200, h: 250 },
//  { x: 700, y: 420, w: 50, h: 25 },
//  { x: 730, y: 395, w: 50, h: 25 },
//  { x: 760, y: 370, w: 50, h: 25 },
//  { x: 920, y: 420, w: 50, h: 25 },
//  { x: 890, y: 395, w: 50, h: 25 },
//  { x: 850, y: 370, w: 50, h: 25 },
//  { x: 800, y: 150, w: 250, h: 40 },
//  { x: 945, y: 105, w: 40, h: 130 },
//  { x: 1100, y: 350, w: 100, h: 160 },
//  { x: 1900, y: 450, w: 1400, h: 40 }, // lowerbrick 2
//  { x: 1900, y: 20, w: 1400, h: 40 }, //upperbrick 2
//  { x: 1250, y: 350, w: 100, h: 160 },
//  { x: 1425, y: 290, w: 250, h: 40 },
//  { x: 1700, y: 290, w: 150, h: 40 },
//  { x: 1700, y: 330, w: 80, h: 40 },
//  { x: 1700, y: 330, w: 80, h: 40 },
//  { x: 1980, y: 290, w: 250, h: 40 },
//  { x: 2155, y: 350, w: 100, h: 160 },
//  { x: 1900, y: 60, w: 250, h: 40 },
//  { x: 1900, y: 100, w: 200, h: 40 },
//  { x: 1900, y: 140, w: 150, h: 40 },
//  { x: 2500, y: 190, w: 200, h: 300 } // right brick
//];





function setup(){
  createCanvas(950, 470);
  
  ball = createSprite(40, height / 2, 50);
//  ball.addImage("ball-image", ballImg);
//  ball.scale = 0.3
  
  lowerWall= createSprite(550,450,1200,40);
  upperWall= createSprite(550,20,1200,40);
  leftWall= createSprite(15,235,40,390);
//  for (var i in bricks) {
//    var brick = createSprite( bricks[i].x, bricks[i].y, bricks[i].w, bricks[i].h);
////     brick.addImage("brick-image", brickImg)
//    allbricks.push(brick);
//  }

}


function draw(){
  background(220);
    
     if (keyDown("right")){
         ball.x +=5
        }

    if (keyDown("left")){
         ball.x -=5
        }

    if (keyDown("up")){
        ball.y -=5
    }
    
    if (keyDown("down")){
        ball.y +=5
    }
    
  drawSprites();
  
}



