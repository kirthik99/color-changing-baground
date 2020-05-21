
var r = 0;
var g = 0;
var b = 0;

function setup(){
  createCanvas(1200,400);
}

function draw(){
  background(r,g,b);
  r=map(mouseX,0,1200,0,255);
   g =map(mouseX,50,900,50,100);
   b= map(mouseX,0,1200,255,0);
  fill(255)
  ellipse(mouseX,100,50,50)
}