let cirX, cirY;
let dia;
let cirCount;
let cirAmt;
let cirCol1, cirCol2, colDif;
let rowAmt;
let rowCount;
let xDisplace;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  dia = (height+width)/(2*(6));
  cirAmt = (width/(dia/2));
  cirCount = 0;
  cirX = (width/2)-((round(cirAmt)/2)*dia);
  cirY = 0;
  rowAmt = (height/(dia/2))+1;
  rowCount = 0;
  cirCol1 = [random(255), random(255), random(255)];
  cirCol2 = [random(255), random(255), random(255)];
  colDif = [(cirCol1[0]-cirCol2[0])/rowAmt, (cirCol1[1]-cirCol2[1])/rowAmt, (cirCol1[2]-cirCol2[2])/rowAmt];
  xDisplace = 0;
}

function draw() {
  noStroke();
  noLoop();
  for(rowCount = 0; rowCount < rowAmt; rowCount++) {
    fill(cirCol1[0]-(colDif[0]*rowCount), cirCol1[1]-(colDif[1]*rowCount), cirCol1[2]-(colDif[2]*rowCount));
    for(cirCount = 0; cirCount <= cirAmt; cirCount++) {
      circle(cirX, cirY, dia);
      cirX += dia;
    }
    if(xDisplace == 0) {
      xDisplace = 1;
    }else{
      xDisplace = 0;
    }
    cirY += dia/2;
    cirX = ((width/2)-((round(cirAmt)/2)*dia))+((dia/2)*xDisplace);
    cirCount = 0;
  }
}