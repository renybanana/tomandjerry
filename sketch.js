
var tom,tomImage, jerry,jerryImage,tomImage2,jerryImage2;
function preload(){
    tomImage= loadImage("images\tomOne.png")
    tomImage2= loadImage("images\tomFour.png")
    jerryImage= loadImage("images\jerryTwo.png")
    jerryImage2= loadImage("images\jerryThree.png")
}
function setup(){
  createCanvas(1200,800);
  tom = createSprite(400,200,80,20);
  jerry= createSprite(200,200,50,50);
  tom.addImage(tomImage);
  jerry.addImage(jerryImage);
  jerry.scale = 0.1
  tom.scale = 0.1
}
function draw(){
  background(0);
  
  tom.x = World.mouseX;
  tom.y = World.mouseY;
  if(tom.x - jerry.x < tom.width/2+jerry.width/2 && 
    jerry.x-tom.x < tom.width/2 + jerry.width/2 && 
    tom.y - jerry.y < tom.height /2 + jerry.height/2 && 
    jerry.y - tom.y < tom.height /2 + jerry.height/2){
    tom.addImage(tomImage2);
    jerry.addImage(jerryImage2);
  
  }
  else{
    tom.addImage(tomImage);
    jerry.addImage(jerryImage);
  }
  drawSprites(); 
}