
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball1
var ground;
var ground1
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
   ball1 = Bodies.circle(310,10,20,ball_options)
   World.add(world,ball1);
    
   ground1 = Bodies.rectangle(350,200,100,20,ground_options)
   World.add(world,ground1)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(255);
  Engine.update(engine);
  fill("red")
  ellipse(ball.position.x,ball.position.y,20);
  fill("blue")
  rect(ground.position.x,ground.position.y,400,20);
  fill("yellow")
 ellipse(ball1.position.x,ball1.position.y,20)
  fill("green")
  rect(ground1.position.x,ground1.position.y,200,20)
}