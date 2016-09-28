var circles = [];

function Circle(_x, _y){
  this.x = _x;
  this.y = _y;

  this.size = 10;

  this.display = function(){
    this.x++; // increment it by 1
    this.size = this.size - random(.5,1);
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (var i = 0; i < circles.length; i++){
    circles[i].display();
    if (circles[i].x > width){
      circles.splice(i,1);
    }
  }
  if(mouseIsPressed){
    circles.push(new Circle(mouseX,mouseY));
  }
}

function windowResized() { // called once every time the browser window is resized
  resizeCanvas(windowWidth, windowHeight);
}
