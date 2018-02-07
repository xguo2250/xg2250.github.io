function setup(){
  createCanvas(450,480);
  frameRate(1);
}

function draw(){
  background(80);

  var s = second();
  var m = minute();
  var h = hour();

  fill(255);
  stroke(255);
  text('  Time:\n' + h + ':'+ m +':'+ s,50, 280);
 

  push();
  fill(100);
  rect(50, 195, 300, 20);
  translate(map(s, 0, 59, 0, 270), 0);
  rect(50, 200, 10, 10);
  pop();


  push();
  fill(51,100,255);
  rect(50, 160, 300, 20);
  translate(map(m, 0, 59, 0, 270), 0);
  rect(50, 165, 10, 10);
  pop();


  push();
  fill(255,153,0);
  rect(50, 125, 300, 20);
  translate(map(h, 0, 23, 0, 270), 0);
  rect(50, 130, 10, 10);
  pop();

  fill(255,0,0);
  line(50,100,50,240);
  line(350,100,350,240);
  line(200,100,200,240);
  line(125,100,125,240);
  line(275,100,275,240);

  text('hour')



}