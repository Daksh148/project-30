const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  
  ground= new Ground(400,390,800,20);
  b1= new Box(300,370,30,40);
  b2= new Box(330,370,30,40);
  b3= new Box(360,370,30,40);
  b4= new Box(390,370,30,40);
  b5= new Box(420,370,30,40);
  b6= new Box(450,370,30,40);
  b7= new Box(470,370,30,40);
  b8= new Box(330,330,30,40);
  b9= new Box(360,330,30,40);
  b10= new Box(390,330,30,40);
  b11= new Box(420,330,30,40);
  b12= new Box(450,330,30,40);
  b13= new Box(360,290,30,40);
  b14= new Box(390,290,30,40);
  b15= new Box(420,290,30,40);
  b16= new Box(390,250,30,40);
  
  polygon=new Bax(200,275,20,20);
 
  

  slingshot=new SlingShot(polygon.body,{x:200,y:275});
  
}

function draw() {
  background(255);  
  Engine.update(engine);
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  
  
  slingshot.display();
  polygon.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
   slingshot.attach(polygon.body);
       
  }

}