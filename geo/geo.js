var data;
var AirQuality;
var Year

// preload table data
function preload() {
    data = loadTable(
      'Air_Quality.csv', 'csv', 'header');
}

function colValsMinMax(tab, colName) {
  var vals = data.getColumn(colName);
  var obj = {
    values: vals,
    min: min(vals),
    max: max(vals),
  }
  return obj;
}

function draw() { 
  createCanvas(800, 800);
  //row num
  console.log(data.getRowCount());
  //columns num
  console.log(data.columns);
  
  background(50);
  stroke(255);
  
  // values and min/max for airquality
  var AirQuality = colValsMinMax(data, "data_valuemessage");
  console.log(AirQuality.min);
  console.log(AirQuality.max);
  
  var Year = colValsMinMax(data, "year_description");
  console.log(Year.min);
  console.log(Year.max);
  
  for (var i = 0; i < data.getRowCount(); i++) {
    
    // x position is air quaitly; y position is year
    stroke(255, 128, 128);
    var xpos = map(AirQuality.values[i], AirQulity.min, AirQuality.max, 0, width);
    var ypos = map(Year.values[i], Year.min, Year.max, height, 0);
    
    point(xpos, ypos);   
  }
}