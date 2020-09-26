const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score = 0;
var backgroundImg;

function preload(){
  getbackgroundcolor();
  polygon_img=loadImage("polygon.png");
}


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
  ground = new Ground(450,390,900,20);
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 

  //level one
  block1 = new box(300,275,30,40);
  block2 = new box(330,275,30,40);
  block3 = new box(360,275,30,40);
  block4 = new box(390,275,30,40);
  block5 = new box(420,275,30,40);
  block6 = new box(450,275,30,40);
  block7 = new box(480,275,30,40);
  //level two
  block8 = new box(330,235,30,40);
  block9 = new box(360,235,30,40);
  block10 = new box(390,235,30,40);
  block11 = new box(420,235,30,40);
  block12 = new box(450,235,30,40);
  //level three
  block13 = new box(360,195,30,40);
  block14 = new box(390,195,30,40);
  block15 = new box(420,195,30,40);
  //top
  block16 = new box(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new box(640,175,30,40);
  blocks2 = new box(670,175,30,40);
  blocks3 = new box(700,175,30,40);
  blocks4 = new box(730,175,30,40);
  blocks5 = new box(760,175,30,40);
  //level two
  blocks6 = new box(670,135,30,40);
  blocks7 = new box(700,135,30,40);
  blocks8 = new box(730,135,30,40);
  //top
  blocks9 = new box(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  if(backgroundImg)
    background(backgroundImg);
      
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  textSize(20);
  fill("lightyellow");
  text("Press space key to get second chance",400,370);
  text("Score"+score,750,40);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if (keyCode===32){
      slingShot.attach(this.ball);
  }
}
async function getbackgroundcolor(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");        
  var responseJSON = await response.json();

  var daytime = responseJSON.datetime;
  var hour = daytime.slice(11,13);
  if(hour >=06 && hour <=19){
      bg= ('light.jpg');
  }
  else{
    bg=('dark.jpg');
  }
  backgroundImg = loadImage(bg);
}
