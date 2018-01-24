function setup() {
  createCanvas(640, 480);
}

function draw() {
  // see https://p5js.org/reference/#p5/background
  background('black');
  // see https://p5js.org/referenfe/#p5/fill
  fill(255, 0, 0);
  rect(280, 220, 80, 80);
  // see https://p5js.org/referenfe/#p5/ellipse
  ellipse(285, 225, 70, 70);
  // see https://p5js.org/referenfe/#p5/text
  textSize(40);
  fill(255, 144, 0);
  text('Xin says hello world', 200, 60)
}
