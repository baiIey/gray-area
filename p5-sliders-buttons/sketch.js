//slider requires the p5.dom library
var rSlider, gSlider, bSlider; // create multiple values

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(15);

  rSlider = createSlider(0, 255, 100); // min, max, default, steps
  rSlider.position(20,20);

  gSlider = createSlider(0, 255, 100); // min, max, default, steps
  gSlider.position(20,50);

  bSlider = createSlider(0, 255, 100); // min, max, default, steps
  bSlider.position(20,80);
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r,g,b);
  text('red',165,35);
  text('green',165,65);
  text('blue',165,95);
}

function windowResized() { // called once every time the browser window is resized
  resizeCanvas(windowWidth, windowHeight);
}
