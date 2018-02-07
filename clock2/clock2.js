function setup() {
  createCanvas(800, 800);
}
function draw() {

  background(80);

  var s = second();
  var m = minute();
  var h = hour();

  fill(255);
  text('Time:\n' + h + ':'+ m +':'+ s,20, 350);
  text('Second', 700,110);
  text('Minute', 700,210);
  text('Hour', 700, 310);

  push();
  fill(0,69,104);
  rect(20, 100, map(second(), 0, 59, 0, 600), 10);
  pop();

  push();
  fill(255,153,0)
  rect(20, 200, map(minute(), 0, 59, 0, 600), 10);
  pop();

  push();
  fill(33,127,33)
  rect(20, 300, map(hour(), 0, 23, 0, 600), 10);
  pop();

}