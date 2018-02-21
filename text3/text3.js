var headlines = [];

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "6d4f237e04144303b83ee77c63ab5d4b"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}


function setup() {
  
  createCanvas(800,1000);

}


  function draw1() {

  fill(0, 255, 0);
  textSize(40);
  text("click anywhere", 50, 50);
  }

  function draw() {

  background(0);
  textSize(16);

  for (var i = 0; i < nytResponse.results.length; i++){
    var h = nytResponse.results[i].title;
    headlines=append(headlines,h);
    //console.log(headlines);
  }
  
  if (mouseIsPressed) {
    noFill();
    stroke(255, 255, 0);
    text(headlines[i], mouseX, mouseY);
  } 
  

  for (var i = 0; i < headlines.length; i++) {
    fill(20+(i*10));
    textLeading((mouseX/ width)* 64);
    text(headlines[i], 50, 50+i*20);
  }

  draw1();
}

