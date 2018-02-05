function setup() {
  createCanvas(640, 480);

}

function draw(){

  background(255,255,255);

  var h=hour();
  var m=minute();
  var s=second();

  text('  Time:\n' + h + ':'+ m +':'+ s,300, 400);

  var angle1=map(s,0,60,0,2*PI)
  var angle2=map(m,0,60,0,2*PI)

  if (h>=12){h=h-12}
  var angle3=map(h,0,12,0,2*PI)

  translate(width/2,height/2)

  push()
  strokeWeight(10)
  fill(255,255,255)
  ellipse(0,0,220,220)
  pop();


  push();
  rotate(angle1-(PI/2))
  strokeWeight(3)
  fill(252,0,52)
  line(0,0,85,0)
  pop();

  push();
  rotate(angle2-(PI/2))
  strokeWeight(5)
  line(0,0,80,0)
  pop();

  push();
  rotate(angle3-(PI/2))
  strokeWeight(7)
  line(0,0,60,0)
  pop();

  fill(252,191,53)
  strokeWeight(0)
  ellipse(0,0,20,20)


}
