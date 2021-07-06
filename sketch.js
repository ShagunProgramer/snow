
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var snow2 = [];
var maxsnow = 20;



function preload(){
  bkimg = loadImage("background3.jpg")
}



function setup() {
  createCanvas(700,400);

  engine = Engine.create();
    world = engine.world;
if(frameCount %10000 === 0 ){
  for(var i=0; i<maxsnow; i++){
  snow2.push(new Snow(random (0,500),random(0,400),65,65))
  }
}
    
}

function draw() {
  
  background(bkimg);
    Engine.update(engine);
 

 for(var i = 0; i < maxsnow; i++){
  snow2[i].display();
  
  snow2[i].updateY();
}
}
