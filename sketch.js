const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var division1,division2,division3,division4,division5,division6,division7;
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9;
var plinkO1,plinkO2,plinkO3,plinkO4,plinkO5,plinkO6,plinkO7,plinkO8,plinkO9,plinkO10;
var plinKO1,plinKO2,plinKO3,plinKO4,plinKO5,plinKO6,plinKO7,plinKO8,plinKO9;

function setup() {
  createCanvas(480,625);

  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);

  ground = new Ground(240,625,480,15);

  division1 = new Divisions(2,525,10,200);
  division2 = new Divisions(80,525,10,200);
  division3 = new Divisions(160,525,10,200);
  division4 = new Divisions(240,525,10,200);
  division5 = new Divisions(320,525,10,200);
  division6 = new Divisions(400,525,10,200);
  division7 = new Divisions(478,525,10,200);

  plinko1 = new Plinko(53,85,10,10);
  plinko2 = new Plinko(160,85,10,10);
  plinko3 = new Plinko(159,85,10,10);
  plinko4 = new Plinko(212,85,10,10);
  plinko5 = new Plinko(265,85,10,10);
  plinko6 = new Plinko(318,85,10,10);
  plinko7 = new Plinko(371,85,10,10);
  plinko8 = new Plinko(424,85,10,10);
  plinko9 = new Plinko(477,85,10,10);

  plinkO1 = new Plinko(3,170,10,10);
  plinkO2 = new Plinko(51,170,10,10);
  plinkO3 = new Plinko(99,170,10,10);
  plinko4 = new Plinko(147,170,10,10);
  plinkO5 = new Plinko(195,170,10,10);
  plinkO6 = new Plinko(243,170,10,10);
  plinkO7 = new Plinko(291,170,10,10);
  plinkO8 = new Plinko(339,170,10,10);
  plinkO9 = new Plinko(387,170,10,10);
  plinkO10 = new Plinko(433,170,10,10);

  plinKO1 = new Plinko(53,255,10,10);
  plinKO2 = new Plinko(160,255,10,10);
  plinKO3 = new Plinko(159,255,10,10);
  plinKO4 = new Plinko(212,255,10,10);
  plinKO5 = new Plinko(265,255,10,10);
  plinKO6 = new Plinko(318,255,10,10);
  plinKO7 = new Plinko(371,255,10,10);
  plinKO8 = new Plinko(424,255,10,10);
  plinKO9 = new Plinko(477,355,10,10);

  pliNKO1 = new Plinko(3,340,10,10);
  pliNKO2 = new Plinko(51,340,10,10);
  pliNKO3 = new Plinko(99,340,10,10);
  pliNKo4 = new Plinko(147,340,10,10);
  pliNKO5 = new Plinko(195,340,10,10);
  pliNKO6 = new Plinko(243,340,10,10);
  pliNKO7 = new Plinko(291,340,10,10);
  pliNKO8 = new Plinko(339,340,10,10);
  pliNKO9 = new Plinko(387,340,10,10);
  pliNKO10 = new Plinko(433,340,10,10);

  
}

function draw() {
  background(0,0,0);  
  
  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();

  plinkO1.display();
  plinkO2.display();
  plinkO3.display();
  plinkO4.display();
  plinkO5.display();
  plinkO6.display();
  plinkO7.display(); 
  plinkO8.display();
  plinkO9.display();
  plinkO10.display();

  plinKO1.display();
  plinKO2.display();
  plinKO3.display();
  plinKO4.display();
  plinKO5.display();
  plinKO6.display();
  plinKO7.display();
  plinKO8.display();
  plinKO9.display();

  pliNKO1.display();
  pliNKO2.display();
  pliNKO3.display();
  pliNKO4.display();
  pliNKO5.display();
  pliNKO6.display();
  pliNKO7.display();
  pliNKO8.display();
  pliNKO9.display();
  pliNKO10.display();

  drawSprites();
}