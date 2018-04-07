var x;
var y;

/*기능 ; 영화 주토피아에 나오는 나무늘보 플래시 그리기
x,y : 플래시 얼굴 중심*/
function drawFlash (x,y) {
  //Body;
  fill(200,255,100);
  noStroke();
  arc(x,y+170,240,220,radians(180),radians(360) );
  
  //Neck
  fill(120,100,0);
  noStroke();
  quad(x-80,y,x+80,y,x+90,y+100,x-90,y+100);
  arc(x,y+100,180,40,radians(0),radians(180) );
  
  //Head 
  fill(255,232,203);
  stroke(120,100,0);
  strokeWeight(10);
  ellipse(x,y,150,140);

  //Eye
  stroke(10);
  strokeWeight(2);
  fill(250);
  ellipse(x-40,y-10,45,30);
  ellipse(x+40,y-10,45,30);
  
  
  fill(120,100,0);
  noStroke();
  arc(x-40,y-10,45,30,radians(180),radians(360) );
  arc(x+40,y-10,45,30,radians(180),radians(360) );
  
  fill(50);
  ellipse(x-40,y-2,12,12);
  ellipse(x+40,y-2,12,12);
  
  //Nose
  stroke(10);
  strokeWeight(2);
  line(x-15,y-45,x-20,y+30);
  line(x+15,y-45,x+20,y+30);

  fill(120,100,0);
  noStroke();
  arc( x,y+30,42,50,radians(180),radians(360) );
  arc( x,y+30,42,40,radians(0),radians(180) );
  
  //Mouth
  fill(200,0,0);
  noStroke();
  arc( x,y+40,30,15,radians(0),radians(180) );
  
  //Nosehole
  fill(50);
  ellipse(x-10,y+30,10,5);
  ellipse(x+10,y+30,10,5);

  //Eyebrow
  fill(255,232,203);
  stroke(25);
  strokeWeight(4);
  arc( x-20,y-30,75,30,radians(180),radians(275) );
  arc( x+20,y-30,75,30,radians(265),radians(360) );

}
function setup() {
  createCanvas(400,400);
  background(255);
  drawFlash(200,150);
}

function draw(){
}