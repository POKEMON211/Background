var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function b_red(){
  r = 255;
  g = 0;
  b = 0;
}

function b_green(){
  r = 0;
  g = 255;
  b = 0; 
  
}


function setup() {
  createCanvas(400, 400);  

  btn_red = createButton("Red");
  btn_red.position(100, 50);
  btn_red.mousePressed(b_red);

  btn_green = createButton("Green");
  btn_green.position(250, 50);
  btn_green.mousePressed(b_green);

}

function draw(){
  background(r, g, b);
}



