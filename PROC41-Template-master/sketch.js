var canvas,road,water,natsu,hat;
var engine,world,light1,light2,light3,light4,bruce,fall,ar =[],soun,rainsoun;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
   natsu = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png",
   "images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png",
   "images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png");
   
   light1 = loadImage("images/thunderbolt/1.png");
   light2 = loadImage("images/thunderbolt/2.png");
   light3 = loadImage("images/thunderbolt/3.png");
   light4 = loadImage("images/thunderbolt/4.png");

   soun = loadSound("donnerre2.mp3");

   rainsoun = loadSound("RainFallMedium PE1005201.mp3");
}

function setup(){
   engine = Engine.create();
   world = engine.world;

   var opt={
    isStatic:true
   }


   canvas = createCanvas(400,600);

   bruce = createSprite(200,430,10,10);
   bruce.addAnimation("log",natsu);
   bruce.scale = 0.5;

   road = Bodies.rectangle(0,620,400,10,opt);
   World.add(world,road);
   
   hat = Bodies.circle(210,370,100,opt);
   World.add(world,hat);

   

   console.log(bruce.y);
   console.log(bruce.x);
   console.log(hat.position.y);

   Engine.run(engine);
}
function draw(){
    Engine.update(engine);

    rainsoun.play();

    background("black");
    
    rect(road.position.x,road.position.y,400,10);

    if(frameCount%1===0){
        var physcics={
            friction:0.2
        }
        fall = new ame(random(10,390),0,physcics)
        ar.push(fall);
    }
    if(frameCount%1===0){
        var physcics={
            friction:0.2
        }
        fall1 = new ame(random(10,390),0,physcics)
        ar.push(fall1);
    }
    if(frameCount%0.5===0){
        var physcics={
            friction:0.2
        }
        fall2 = new ame(random(10,390),0,physcics)
        ar.push(fall2);
    }
    for(var i = 0;i<ar.length;i++){
        ar[i].display();
    }


    if(frameCount%50===0){
        var ran = Math.round(random(1,4));

        if(ran===1){
            thun = createSprite(random(50,350),100);
            thun.addImage(light1);
            thun.scale = 0.45;
            thun.lifetime = 5;
            soun.play();
        }
        else if(ran===2){
            thun1 = createSprite(random(50,350),100);
            thun1.addImage(light2);
            thun1.scale = 0.45;
            thun1.lifetime = 5;
            soun.play();
        }
        else if(ran===3){
            thun2 = createSprite(random(50,350),100);
            thun2.addImage(light3);
            thun2.scale = 0.45;
            thun2.lifetime = 5;
            soun.play();
        }
        else{
            thun3 = createSprite(random(50,350),100);
            thun3.addImage(light4);
            thun3.scale = 0.45;
            thun3.lifetime = 5;
            soun.play();
        }
    }

    console.log(ar);
    
    drawSprites();
}   

