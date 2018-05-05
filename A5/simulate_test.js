var izzms = [],
		sizer = 13;

function setup() {
  createCanvas(700, 700);


  var prox = 20,
  		row = ceil(width / prox) + 1,
  		column = ceil(height / prox) + 1;

  for (var j = 0; j < column; j++) {
    for (var i = 0; i < row; i++) {
      izzms.push(new p5.Vector(prox * i, prox * j));
    }
  }
}

function draw() {
  background(255);
  noFill();
  stroke(0);
  strokeWeight(17);
  for (var i = izzms.length - 1; i >= 0; i--) {
    var h = calcVec(izzms[i].x - mouseX, izzms[i].y - map(second(),0,59,0,600));
    line(
      izzms[i].x,
      izzms[i].y,
      izzms[i].x + sizer * cos(h.heading()),
      izzms[i].y + sizer * sin(h.heading()));
  }
}


function calcVec(x, y) {
  return new p5.Vector(y - x, -x - y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
