var headlines = [];

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "6d4f237e04144303b83ee77c63ab5d4b"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}


function setup() {
  
  createCanvas(800,1200);

}


  function draw1() {

  fill(255, 255, 255);
  textSize(30);
  text("Click to refresh", 50, 10);
  }

  function draw() {

  background(0);
  textSize(16);
  
  var margin = 50;
  translate(margin, margin);

  for (var i = 0; i < nytResponse.results.length; i++){
    var h = nytResponse.results[i].title;
    headlines=append(headlines,h);
    //console.log(headlines);
  }
  
  if (mouseIsPressed) {
    noFill();
    stroke(200,80,0);
    text(headlines[i], mouseX, mouseY);
  } 
  

  for (var i = 0; i < headlines.length; i++) {
    fill(20+(i*10));
    textLeading((mouseX/ width)* 64);
    text(headlines[i], 50, 50+i*20);
  }

  draw1();
}

function mousePressed() {
  shuffle(headlines, true);
}
