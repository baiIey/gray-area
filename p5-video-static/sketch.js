function setup() {
  createCanvas(320, 240);
  pixelDensity(1); // for Retina displays
}

function draw() {
  background(255);

  loadPixels(); // creates an open array called pixels
  for (var y=0; y <height; y++){
    for(var x=0; x<width; x++){
      var index = (x+y*width)*4;
        pixels[index]=0; //rgba values
        pixels[index+1]=0;
        pixels[index+2]=random(255);
        pixels[index+3]=255;
    }
  }
  
updatePixels();

}

// called once every time the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
