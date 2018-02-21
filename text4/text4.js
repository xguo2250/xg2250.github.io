var headlines = [];
var maxHeadLen, minHeadLen;

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "6d4f237e04144303b83ee77c63ab5d4b";
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);

}

function setup() {

  createCanvas(1000, 1000);
  frameRate(30);
  extractHeadlines();
}

function draw1() {

  fill(200,200,0);
  textSize(30);
  text("click", mouseX, mouseY);

}

function draw() {

  background(255);

  var margin = 40;
  translate(margin, margin);

  var lineheight = 20;
  var rectheight = 12;

  for (var i = 0; i < headlines.length; i++) {
    var rectwidth = map(headlines[i].length, minHeadLen, maxHeadLen, margin, width-margin);

// click to show the contents

    if(mouseIsPressed) {
      fill(0);
    } else {
      fill(255)
    }
    rect(0, i*lineheight, rectwidth, -1*rectheight);
    fill(255);
    textSize(12);
    text(headlines[i], 0, i*lineheight);
  }

draw1();
}

function extractHeadlines() {

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;

    if (!maxHeadLen) {
      maxHeadLen = h.length;
    } else if (h.length > maxHeadLen) {
      maxHeadLen = h.length;
    }
    if (!minHeadLen) {
      minHeadLen = h.length;
    } else if (h.length < minHeadLen) {
      minHeadLen = h.length;
    }
    append(headlines, h);
  }

}