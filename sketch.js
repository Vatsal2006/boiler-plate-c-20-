var fixrect, movingrect;
function setup() {
  createCanvas(800,400);
  fixrect = createSprite(200, 200, 50, 50);
  movingrect = createSprite (500, 200,50,50);
  fixrect.shapeColor="green"; 
  movingrect.shapeColor="green";
  movingrect.velocityX = -2;
  fixrect.velocityX = 2;
}

function draw() {
  background(255,255,255); 

   //movingrect.y=World.mouseY; 
   if(movingrect.x-fixrect.x<=movingrect.width/2+fixrect.width/2 && fixrect.x-movingrect.x<=movingrect.width/2+fixrect.width/2)
    
   { fixrect.shapeColor="black";
    movingrect.shapeColor="black";
   
    movingrect.velocityX = movingrect.velocityX*(-1);
    fixrect.velocityX= fixrect.velocityX*(-1);

   } 
   else if (movingrect.y-fixrect.y<=movingrect.height/2+fixrect.height/2 && fixrect.y-movingrect.y<=movingrect.height/2+fixrect.height/2) {

    movingrect.velocityY = movingrect.velocityY*(-1);
    fixrect.velocityY = fixrect.velocityY*(-1);
   }
   else{ 
     fixrect.shapeColor="green"; 
     movingrect.shapeColor="green";
    } 
  drawSprites();
}