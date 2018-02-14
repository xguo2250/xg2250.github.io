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


function draw() {
 
  background(0);
  textSize(12);

  for (var i = 0; i < nytResponse.results.length; i++){
    var h = nytResponse.results[i].title;
    headlines=append(headlines,h);
    // console.log(headlines);
  }

  for (var i = 0; i < nytResponse.results.length; i++){
    var words = split(headlines[i], ' ');
    var X = 0

    for(var k = 0; k < words.length; k++) {
      if (words[k].toLowerCase().indexOf('out') !== -1 ||
        words[k].toLowerCase().indexOf('in') !== -1) {
          fill(255,255,0);
      } else{
        fill(255);
      }
      text(words[k] + ' ', X+20, (i + 5)*20);
      X += textWidth(words[k]+' ');
    } 
  }


  

}