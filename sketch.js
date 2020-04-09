var sp1, sp2;
var gamestate=0,form,game;
var bg,bg1,bg2;
var button1,bb1,button2,bb2,button3;
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26,w27,w28,w29,w30;
var virus1,virus;
var doc,doctor;
var wgroup;
var gamestate="start";
function preload()
{
bg=loadImage("123.jpg") 
bb1=loadImage("456.png")
bb2=loadImage("789.png")
bb3=loadImage("bb3.png")
virus1=loadImage("virus.png")

}
function setup() {
  createCanvas(displayWidth-10, displayHeight-100);
  button1=createSprite(displayWidth/2,displayHeight/2,10,10)
  button1.addImage("b1",bb1)
  button1.scale=0.2
  button2=createSprite(displayWidth/2-400,displayHeight/2+30,10,10)
  button2.addImage("b2",bb2)
  button2.visible=false;
  button3=createSprite(displayWidth/2+400,displayHeight/2+30,10,10)
  button3.addImage("b3",bb3)
  button3.visible=false;
  virus= createSprite(displayWidth-100,displayHeight-200,30,30)
  virus.addImage("v1",virus1)
  virus.scale=0.4
 virus.visible=false;
 doctor=createSprite(displayWidth/2,displayHeight/2,20,20)
 doctor.visible=false;
 wgroup=createGroup()
}

function draw() {
  background(bg);
  if(gamestate==="start"){
  textFont("chiller")
  textSize(100)
  fill(rgb(100,76,131))
  text("WORLD'S DEADLIEST CREATURE",displayWidth/2-500,displayHeight/2-450)
  }
  if(mousePressedOver(button1)&& gamestate=== "start")
  {
    button1.visible=false;
    button2.visible=true;
    button3.visible=true;
    
    gamestate="choose";
  }
    if(gamestate=== "choose")
    {
      textFont("chiller")
      textSize(100)
      fill(rgb(100,76,131))
      text("CHOOSE YOUR SIDE",displayWidth/2-370,displayHeight/2-450);
     
    }


  if(mousePressedOver(button2)&& gamestate=== "choose")
  {
  bg=loadImage("abc.png")
  button2.visible=false;
  button3.visible=false;
  gamestate="virus"
  }
 if(gamestate=== "virus")
 {
  w1=createSprite(displayWidth/2-807,displayHeight/2-44,35,650)
  w2=createSprite(displayWidth/2-77,displayHeight/2+270,1500,35)
  w3=createSprite(displayWidth/2+80,displayHeight/2-370,1500,33)
  w4=createSprite(displayWidth/2-710,displayHeight/2+22,160,35)
  w5=createSprite(displayWidth/2+807,displayHeight/2-45,35,650)
  w6=createSprite(displayWidth/2+2,displayHeight/2+82,37,132)
  w7=createSprite(displayWidth/2+325,displayHeight/2+92,37,115)
  w8=createSprite(displayWidth/2-166,displayHeight/2+195,35,115)
  w9=createSprite(displayWidth/2+162,displayHeight/2+205,35,115)
  w10=createSprite(displayWidth/2+160,displayHeight/2+133,320,35)
  w11=createSprite(displayWidth/2-410,displayHeight/2-107,500,30)
  w12=createSprite(displayWidth/2+320,displayHeight/2+25,300,30)
  w13=createSprite(displayWidth/2+630,displayHeight/2+150,320,32)
  w14=createSprite(displayWidth/2-500,displayHeight/2+136,340,32)
  w15=createSprite(displayWidth/2+500,displayHeight/2-232,330,32)
  w16=createSprite(displayWidth/2+720,displayHeight/2-105,180,32)
  w17=createSprite(displayWidth/2+120,displayHeight/2-105,220,32)
  w18=createSprite(displayWidth/2-80,displayHeight/2-232,170,32)
  w19=createSprite(displayWidth/2-530,displayHeight/2-232,200,32)
  w20=createSprite(displayWidth/2-230,displayHeight/2+17,170,32)
  w21=createSprite(displayWidth/2+2,displayHeight/2-170,35,160)
  w22=createSprite(displayWidth/2-640,displayHeight/2-170,35,150)
  w23=createSprite(displayWidth/2+322,displayHeight/2-175,35,140)
  w24=createSprite(displayWidth/2+160,displayHeight/2-292,35,120)
  w25=createSprite(displayWidth/2+160,displayHeight/2-25,35,130)
  w26=createSprite(displayWidth/2-165,displayHeight/2-53,35,135)
  w27=createSprite(displayWidth/2-490,displayHeight/2-39,35,130)
  w28=createSprite(displayWidth/2-323,displayHeight/2+76,35,150)
  w29=createSprite(displayWidth/2+482,displayHeight/2-88,35,255)
  w30=createSprite(displayWidth/2-320,displayHeight/2-246,35,250)
  wgroup.add(w1)
  wgroup.add(w2)
  wgroup.add(w3)
  wgroup.add(w4)
  wgroup.add(w5)
  wgroup.add(w6)
  wgroup.add(w7)
  wgroup.add(w8)
  wgroup.add(w9)
  wgroup.add(w10)
  wgroup.add(w11)
  wgroup.add(w12)
  wgroup.add(w13)
  wgroup.add(w14)
  wgroup.add(w15)
  wgroup.add(w16)
  wgroup.add(w17)
  wgroup.add(w18)
  wgroup.add(w19)
  wgroup.add(w20)
  wgroup.add(w21)
  wgroup.add(w22)
  wgroup.add(w23)
  wgroup.add(w24)
  wgroup.add(w25)
  wgroup.add(w26)
  wgroup.add(w27)
  wgroup.add(w28)
  wgroup.add(w29)
  wgroup.add(w30)
  //wgroup.add(w31)
  virus.visible=true;
  if(keyDown("up"))
  {
    virus.velocityX=0;
    virus.velocityY=-5;
  }
  if(keyDown("down"))
  {
    virus.velocityX=0;
    virus.velocityY=5;
  }
  if(keyDown("left"))
  {
    virus.velocityX=-5;
    virus.velocityY=0;
  }
  if(keyDown("right"))
  {
    virus.velocityX=5;
    virus.velocityY=0;
  }
  
  virus.bounceOff(w1);
  virus.bounceOff(w2);
  virus.bounceOff(w3);
  virus.bounceOff(w4);
  virus.bounceOff(w5);
  virus.bounceOff(w6);
  virus.bounceOff(w7);
  virus.bounceOff(w8);
  virus.bounceOff(w9);
  virus.bounceOff(w10);
  virus.bounceOff(w11);
  virus.bounceOff(w12);
  virus.bounceOff(w13);
  virus.bounceOff(w14);
  virus.bounceOff(w15);
  virus.bounceOff(w16);
  virus.bounceOff(w17);
  virus.bounceOff(w18);
  virus.bounceOff(w19);
  virus.bounceOff(w20);
  virus.bounceOff(w21);
  virus.bounceOff(w22);
  virus.bounceOff(w23);
  virus.bounceOff(w24);
  virus.bounceOff(w25);
  virus.bounceOff(w26);
  virus.bounceOff(w27);
  virus.bounceOff(w28);
  virus.bounceOff(w29);
  virus.bounceOff(w30);
 // virus.bounceOff();
  virus.debug=true;
  virus.setCollider("circle",0,0,60)
  doctor.visible=true;
  doctor.shapeColor="red";
  doctor.debug=true;
  doctor.setCollider("rectangle",0,0,60,60)
  doctor.velocityX=-7;
  doctor.velocityY=-7;
  if(doctor.isTouching(wgroup))
  {
    doctor.velocityX=doctor.velocityX*-1;
    doctor.velocityY=doctor.velocityY*-1;
    doctor.bounceOff(w1);
  doctor.bounceOff(w2);
  doctor.bounceOff(w3);
  doctor.bounceOff(w4);
  doctor.bounceOff(w5);
  doctor.bounceOff(w6);
  doctor.bounceOff(w7);
  doctor.bounceOff(w8);
  doctor.bounceOff(w9);
  doctor.bounceOff(w10);
  doctor.bounceOff(w11);
  doctor.bounceOff(w12);
  doctor.bounceOff(w13);
  doctor.bounceOff(w14);
  doctor.bounceOff(w15);
  doctor.bounceOff(w16);
  doctor.bounceOff(w17);
  doctor.bounceOff(w18);
  doctor.bounceOff(w19);
  doctor.bounceOff(w20);
  doctor.bounceOff(w21);
  doctor.bounceOff(w22);
  doctor.bounceOff(w23);
  doctor.bounceOff(w24);
  doctor.bounceOff(w25);
  doctor.bounceOff(w26);
  doctor.bounceOff(w27);
  doctor.bounceOff(w28);
  doctor.bounceOff(w29);
  doctor.bounceOff(w30);
  }
 }
 if(mousePressedOver(button3)&& gamestate=== "choose")
 {
 bg=loadImage("abc.png")
 button2.visible=false;
 button3.visible=false;
 gamestate="doctor"
 }
 if(gamestate=== "doctor")
 {
  w1=createSprite(displayWidth/2-807,displayHeight/2-44,35,650)
  w2=createSprite(displayWidth/2-77,displayHeight/2+270,1500,35)
  w3=createSprite(displayWidth/2+80,displayHeight/2-370,1500,33)
  w4=createSprite(displayWidth/2-710,displayHeight/2+22,160,35)
  w5=createSprite(displayWidth/2+807,displayHeight/2-45,35,650)
  w6=createSprite(displayWidth/2+2,displayHeight/2+82,37,132)
  w7=createSprite(displayWidth/2+325,displayHeight/2+92,37,115)
  w8=createSprite(displayWidth/2-166,displayHeight/2+195,35,115)
  w9=createSprite(displayWidth/2+162,displayHeight/2+205,35,115)
  w10=createSprite(displayWidth/2+160,displayHeight/2+133,320,35)
  w11=createSprite(displayWidth/2-410,displayHeight/2-107,500,30)
  w12=createSprite(displayWidth/2+320,displayHeight/2+25,300,30)
  w13=createSprite(displayWidth/2+630,displayHeight/2+150,320,32)
  w14=createSprite(displayWidth/2-500,displayHeight/2+136,340,32)
  w15=createSprite(displayWidth/2+500,displayHeight/2-232,330,32)
  w16=createSprite(displayWidth/2+720,displayHeight/2-105,180,32)
  w17=createSprite(displayWidth/2+120,displayHeight/2-105,220,32)
  w18=createSprite(displayWidth/2-80,displayHeight/2-232,170,32)
  w19=createSprite(displayWidth/2-530,displayHeight/2-232,200,32)
  w20=createSprite(displayWidth/2-230,displayHeight/2+17,170,32)
  w21=createSprite(displayWidth/2+2,displayHeight/2-170,35,160)
  w22=createSprite(displayWidth/2-640,displayHeight/2-170,35,150)
  w23=createSprite(displayWidth/2+322,displayHeight/2-175,35,140)
  w24=createSprite(displayWidth/2+160,displayHeight/2-292,35,120)
  w25=createSprite(displayWidth/2+160,displayHeight/2-25,35,130)
  w26=createSprite(displayWidth/2-165,displayHeight/2-53,35,135)
  w27=createSprite(displayWidth/2-490,displayHeight/2-39,35,130)
  w28=createSprite(displayWidth/2-323,displayHeight/2+76,35,150)
  w29=createSprite(displayWidth/2+482,displayHeight/2-88,35,255)
  w30=createSprite(displayWidth/2-320,displayHeight/2-246,35,250)
  doctor.visible=true;
  if(keyDown("up"))
  {
    doctor.velocityX=0;
    doctor.velocityY=-5;
  }
  if(keyDown("down"))
  {
    doctor.velocityX=0;
    doctor.velocityY=5;
  }
  if(keyDown("left"))
  {
    doctor.velocityX=-5;
    doctor.velocityY=0;
  }
  if(keyDown("right"))
  {
    doctor.velocityX=5;
    doctor.velocityY=0;
  }
  
  doctor.bounceOff(w1);
  doctor.bounceOff(w2);
  doctor.bounceOff(w3);
  doctor.bounceOff(w4);
  doctor.bounceOff(w5);
  doctor.bounceOff(w6);
  doctor.bounceOff(w7);
  doctor.bounceOff(w8);
  doctor.bounceOff(w9);
  doctor.bounceOff(w10);
  doctor.bounceOff(w11);
  doctor.bounceOff(w12);
  doctor.bounceOff(w13);
  doctor.bounceOff(w14);
  doctor.bounceOff(w15);
  doctor.bounceOff(w16);
  doctor.bounceOff(w17);
  doctor.bounceOff(w18);
  doctor.bounceOff(w19);
  doctor.bounceOff(w20);
  doctor.bounceOff(w21);
  doctor.bounceOff(w22);
  doctor.bounceOff(w23);
  doctor.bounceOff(w24);
  doctor.bounceOff(w25);
  doctor.bounceOff(w26);
  doctor.bounceOff(w27);
  doctor.bounceOff(w28);
  doctor.bounceOff(w29);
  doctor.bounceOff(w30);
 
 
 } 


  drawSprites();
}