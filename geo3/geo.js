  
  var data = [20,20,40,15,33];


 //since the local serve setup fail, just list the data, will fix when repair the csv.
  

  var piedata = [], piecolor = [100,80,60,40,10];
  var mouseAngle = 0, pieDelta = 0, hover = 0;

  function setup() {
    createCanvas(800,800); 
    total = data.reduce(function(a,b){ return a+b; }, 0);
    for(var i = 0, count = 0 ;i < data.length; i++) {
      piedata.push([Math.PI * 2 * count / total, Math.PI * 2 * (count + data[i]) / total]);
      count += data[i];
    }
  }

  function draw() {

    //clear canvas each time

    clear(); 
    for(var i=0,dx=0,dy=0; i<piedata.length; i++,dx = 0, dy = 0) {
      fill(piecolor[i%5]);
      
      //slide the pie when mouse on it
      
      if(mouseAngle >= piedata[i][0] && mouseAngle < piedata[i][1]) {
        dx = Math.cos((piedata[i][0] + piedata[i][1])/2) * 10;
        dy = Math.sin((piedata[i][0] + piedata[i][1])/2) * 10;
      }
      
      //draw the piechart
      
      arc(320 + dx, 200 + dy, 300, 300, piedata[i][0], piedata[i][1], PIE);
    }
  }

  function mouseMoved() {
    mouseAngle = Math.PI / 2 - Math.atan((320 - mouseX) / (200 - mouseY));
    if(mouseY < 200) mouseAngle = mouseAngle + Math.PI;
  }

  function draw2(){
    text("Interactive chart", 180, 20);
    fill(0);
    size(20);
     draw1();
  }