var ball = [];

var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  createCanvas(w, h);
  frameRate(60);

  for (var i = 0; i < 50; i++) {
    ball[i] = new Ball(random(width), random(height));
  }
}

function draw() {
  background(255);
  for (var i = 0; i < ball.length; i++) {
    ball[i].run(ball);
  }
}

function Ball(x, y) {
  this.acceleration = createVector(0, 0);
  this.velocity = p5.Vector.random2D();
  this.position = createVector(x, y);
  this.r = 3.0;
  this.maxspeed = 3; // Maximum speed
  this.maxforce = 0.05; // Maximum steering force
}

Ball.prototype.run = function(ball) {
  this.flock(ball);
  this.update();
  this.borders();
  this.render();
}

Ball.prototype.applyForce = function(force) {
  this.acceleration.add(force);
}

Ball.prototype.flock = function(ball) {
  var sep = this.separate(ball);
  var ali = this.align(ball);
  var coh = this.cohesion(ball);
  sep.mult(12.5);
  ali.mult(1.0);
  coh.mult(1.0);
  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
}

Ball.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
}

Ball.prototype.seek = function(target) {
  var desired = p5.Vector.sub(target, this.position);
  desired.normalize();
  desired.mult(this.maxspeed);
  var steer = p5.Vector.sub(desired, this.velocity);
  steer.limit(this.maxforce);
  return steer;
}

Ball.prototype.render = function() {

  var red = random(255);
  var green = random(255);
  var blue = random(255);

  fill(red, green, blue);
  strokeWeight(5);
  stroke(80);
  ellipse(this.position.x, this.position.y, 15, 15);
}

Ball.prototype.borders = function() {
  if (this.position.x < -this.r) this.position.x = width + this.r;
  if (this.position.y < -this.r) this.position.y = height + this.r;
  if (this.position.x > width + this.r) this.position.x = -this.r;
  if (this.position.y > height + this.r) this.position.y = -this.r;
}

Ball.prototype.separate = function(ball) {
  var desiredseparation = 25.0;
  var steer = createVector(0, 0);
  var count = 0;
  for (var i = 0; i < ball.length; i++) {
    var d = p5.Vector.dist(this.position, ball[i].position);
    if ((d > 0) && (d < desiredseparation)) {
      var diff = p5.Vector.sub(this.position, ball[i].position);
      diff.normalize();
      diff.div(d);
      steer.add(diff);
      count++;
    }
  }

  if (count > 0) {
    steer.div(count);
  }

  if (steer.mag() > 0) {
    steer.normalize();
    steer.mult(this.maxspeed);
    steer.sub(this.velocity);
    steer.limit(this.maxforce);
  }
  return steer;
}

Ball.prototype.align = function(ball) {
  var neighbordist = 50;
  var sum = createVector(0, 0);
  var count = 0;
  for (var i = 0; i < ball.length; i++) {
    var d = p5.Vector.dist(this.position, ball[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(ball[i].velocity);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    var steer = p5.Vector.sub(sum, this.velocity);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}

Ball.prototype.cohesion = function(ball) {
  var neighbordist = 50;
  var sum = createVector(0, 0);
  var count = 0;
  for (var i = 0; i < ball.length; i++) {
    var d = p5.Vector.dist(this.position, ball[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(ball[i].position);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum);
  } else {
    return createVector(0, 0);
  }
}
