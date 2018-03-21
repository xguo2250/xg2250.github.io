var red;
var green;
var blue;
var alpha;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('white');
  strokeWeight(1);
  stroke('white');
  frameRate(10);
}

function draw() {
  for (var i = 0; i < width; i++) {
    var red = random(255);
    var green = random(255);
    var blue = random(255);
    var alpha = random(50);

    var x = random(width);
    //make the ellispse show up by second
    var y = random(height);
    //random Y
    var s = random(20);
    //random diameter
    fill(red, green, blue, alpha);
    ellipse(x, y, s, s);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
