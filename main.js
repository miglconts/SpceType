// const canvas = document.getElementbyId("canvas");

function setup() {
  createCanvas(500, 700);
  textFont(myFont);
}

let words = ["HOLA", "MANO", "TONE", "TYPE"];

let myFont;
let dashOffset = 0;
function preload() {
  myFont = loadFont("assets/Inconsolata_Condensed-Bold.ttf");
}

function draw() {
  background(`rgba(100,100,255,0.25)`);
  for (let index = 0; index < 10; index++) {
    drawEnter("TYPE", 200 + index * 10, mouseY + index * 5, index * 0.1 + 0.1);
  }
}

function drawEnter(TEXTO, x, y, alpha) {
  // Draw Shadow
  textSize(250);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(`rgba(200, 0, ${mouseY}, ${alpha})`);
  text(TEXTO, x, y);
  //MainText
  fill(`rgba(100, 255, 200, ${alpha})`);
  stroke(`rgba(${mouseY},0,200,${alpha})`);
  strokeWeight(5);
  drawingContext.setLineDash([10, 10]);
  drawingContext.lineDashOffset = dashOffset;
  dashOffset += 0.05;
  text(TEXTO, x - 5, y - 5);
}
