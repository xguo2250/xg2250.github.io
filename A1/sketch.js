function setup() {
  createCanvas(640, 480);
}

function draw() {
  background('grey');
  fill(255, 102, 0);

  // Map the function second() to values from 0~400
  rect(540, 20, 40, map(second(), 0, 60, 0, 400));
  
  push(); // Start a new drawing state
  scale(5,5);
  ellipse(50,50,50,50);
  pop(); //Restor original state (scale, specifically)
 

  // First change teh mode to degrees ( default is radians)
  angleMode(degrees)
  // Map the function miute() to values from 0~360
  rotate(map(minute(), 0, 60 ,0, 360));
  textSize(24);
  fill(0, 102, 153);
  text('Xin says hello world', 300, 240)
}