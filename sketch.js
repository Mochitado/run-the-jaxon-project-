var jaxonImg,pathImg,path,jaxon;
var left_Boundary,right_Boundary;


function preload(){
  //pre-load images
  jaxonImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprite here
  jaxon = createSprite(200,390,50,170);
  jaxon.addAnimation("running",jaxonImg);
  jaxon.scale = 0.4;

  //creating the path sprite 
  path = createSprite(200,200);
  path.addImage(path.png);
  path.velocityY = 4;
  path.scale = 1.2;
  
  //creating the Boundaries and making them invisible 
  left_Boundary = createSprite(0,200,100,400);
  right_Boundary = createSprite(390,200,80,400);
  left_Boundary.visible = false;
  right_Boundary.visible = false;
}

function draw(){
    background(0);
    path.velocityY = 4;
    jake.x = World.mouseX;
     
     if(path.y>400){
      path.y = height/2;
     }
     jake.collide(left_Boundary);
     jake.collide(right_Boundary);
     


  drawSprites();
}


