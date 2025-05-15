function setup() {
  createCanvas(400, 400);
}

let olhoX
let olhoY

function draw() {
  background('pink');
  //rosto
  fill('#FFEB3B');
  stroke('blue');
  strokeWeight(9)
  circle(200, 200, 300);
  //olhos
  fill('#FFEB3B');
  stroke('#000000');
  strokeWeight(5)
  circle(150,150,60);//olho esquerdo
  circle(250,150,60);// olho direito
  
  
  //pupilas
  fill('yellow');
  stroke('#000000');
  strokeWeight(2)
  //circle(150, 150, 10)//olho esquerdo
  //circle(250, 150, 10)//olho direito
  
  olhoX = map(mouseX,0,400,125, 170)
  olhoY = map(mouseY,0,400,125,170)
  
  circle(olhoX,olhoY, 10)
  circle(olhoX+100,olhoY, 10)
  
  
  //boca
  fill('red')
  stroke('#E70202');
  strokeWeight(30)
  line(134,265,290,265);
  
  //nariz
  fill('blue')
  stroke('#FFFFFF');
  strokeWeight(4)
  triangle(202, 184, 157,224,242,223)
  
  //cabelo
  stroke('brown')
  strokeWeight(6)
  line(154,86,186,5);
  line(174,86,206,5);
  line(194,86,226,5);
  if(mouseIsPressed){
     console.log(mouseX,mouseY);
     }
}