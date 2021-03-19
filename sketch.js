const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render= Matter.Render;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
var box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var stand1,stand2,slingShot;
var ground,polygonImage;

function preload() {
    backgroundImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    stand1=new Stand(600,400,300,10);
    stand2=new Stand(950,250,250,10);

    box1 = new Box(500,380,30,50);
    box2 = new Box(530,380,30,50);
    box3 = new Box(560,380,30,50);
    box4 = new Box(590,380,30,50);
    box5 = new Box(620,380,30,50);
    box6 = new Box(650,380,30,50);
    box7 = new Box(680,380,30,50);
   
    box8 = new Box(530,320,30,50);
    box9 = new Box(560,320,30,50);
    box10 = new Box(590,320,30,50);
    box11 = new Box(620,320,30,50);
    box12 = new Box(650,320,30,50);

    var render = Render.create({ 
        element: document.body,
        engine: engine, 
        options: { width: 1200, height: 500, wireframes: false }
     });
     Render.run(render)
   
   
   // slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
 
    ground.display();

    stand1.display();
    stand2.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
   
  //  slingshot.display();    
}

//function mouseDragged(){
    //Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
////}


//function mouseReleased(){
    //slingshot.fly();
//}