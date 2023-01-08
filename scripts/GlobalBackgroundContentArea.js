let floatyposold = [];
let floatyposnew = [];
let floatypos = [];
let divisions = 800;
let numpoints = 12;
let j = 0;
let coin = Math.random();

function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
	cnv.parent('p5globalbackground');
	frameRate(30);
	for (let i = 0; i < numpoints; i++) {
		floatypos[i] = [random(windowWidth),random(windowHeight),random(10)];
	}
	floatyposold = floatypos.slice(0,numpoints);
	for (let i = 0; i < numpoints; i++) {
			floatyposnew[i] = [random(windowWidth),random(windowHeight),floatypos[i][2]];
	}
		noiseSeed(random(999))
}

function draw() {
	if (j <= divisions) {
		generateshape();
		j++;
		iteratepoints();
	} else {
		j = 0;
		floatyposold = floatypos.slice(0,numpoints);
		//floatyposold = floatypos;
		for (let i = 0; i < numpoints; i++) {
			//if (random(1)>0.8) {
			//noiseSeed(mouseX*mouseY)
//			floatyposnew[i] = [noise(i+mouseX/3000,0)*(windowWidth),noise(0,i+mouseY/3000)*(windowHeight)];
			floatyposnew[i] = [random(windowWidth),random(windowHeight),floatypos[i][2]];
			//}
			
		}
		
	}
}

function iteratepoints() {
    for (let i = 0; i < numpoints; i++) {
        var floatyposx = (floatyposnew[i][0]-floatyposold[i][0])*(j/divisions)+floatyposold[i][0];
		
        var floatyposy = (floatyposnew[i][1]-floatyposold[i][1])*(j/divisions)+floatyposold[i][1];
        floatypos[i] = [floatyposx,floatyposy, floatypos[i][2]];
	}
}

function generateshape() {
	let macprodblack = color(12, 12, 12);
	let macprodblue = color(0, 65, 219);
	clear();
	if (coin > 0.5) {
	for (let i = 0; i < numpoints; i++) {
		stroke(macprodblue)
		strokeWeight(noise(floatypos[i][0]/200,floatypos[i][1]/200)*600)
		point(floatypos[i][0],floatypos[i][1]);
	}
	} else{
		
	
//	for (let i = 0; i < numpoints; i=i+4) {
//		stroke(macprodblue);
//		strokeWeight(floatypos[i][2]);
//		//noStroke();
//		fill(macprodblue);
//		//noFill();
//		
//		beginShape();
//		curveVertex(floatypos[i][0],floatypos[i][1]);
//		curveVertex(floatypos[i+1][0],floatypos[i+1][1]);
//		curveVertex(floatypos[i+2][0],floatypos[i+2][1]);
//		
//		curveVertex(floatypos[i][0],floatypos[i][1]);
//		endShape(CLOSE);
//	}
	
	
//	noFill();
//	stroke(macprodblue);
//	strokeWeight(windowWidth/50);
//	beginShape();
//	for (let i = 0; i < numpoints; i++) {
//		curveVertex(floatypos[i][0],floatypos[i][1],0,0);
//	}
//	endShape();
//	
//	
	fill(macprodblue);
		strokeWeight(1);
		stroke(macprodblue);
	for (let i = 1; i < numpoints-1; i++) {
		
		beginShape();
		vertex(floatypos[i+1][0],floatypos[i+1][1]);
		vertex(floatypos[i][0],floatypos[i][1]);
		vertex(floatypos[i-1][0],floatypos[i-1][1]);
		bezierVertex(floatypos[i][0],floatypos[i][1],floatypos[i][0],floatypos[i][1],floatypos[i+1][0],floatypos[i+1][1]);
		endShape();
  	}
	}
}