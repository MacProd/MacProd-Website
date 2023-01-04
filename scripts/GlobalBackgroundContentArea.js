let floatyposold = [];
let floatyposnew = [];
let floatypos = [];
let divisions = 120;
let numpoints = 10;
let j = 0;

function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
	cnv.parent('p5globalbackground');
	frameRate(60);
	for (let i = 0; i < numpoints; i++) {
		floatypos[i] = [random(windowWidth),random(windowHeight)];
	}
	floatyposold = floatypos.slice(0,numpoints);
	for (let i = 0; i < numpoints; i++) {
			floatyposnew[i] = [random(windowWidth),random(windowHeight)];
	}
		
}

function draw() {
	if (j <= divisions) {
		generateshape();
		j++;
		iteratepoints();
	} else {
		j = 0;
		floatyposold = floatypos.slice(0,numpoints);
		print('setup')
		for (let i = 0; i < numpoints; i++) {
			if (random(1)>0.8) {
				floatyposnew[i] = [random(windowWidth),random(windowHeight)];
			}
			
		}
		
	}
}

function iteratepoints() {
    for (let i = 0; i < numpoints; i++) {
        var floatyposx = (floatyposnew[i][0]-floatyposold[i][0])*(j/divisions)+floatyposold[i][0];
		
        var floatyposy = (floatyposnew[i][1]-floatyposold[i][1])*(j/divisions)+floatyposold[i][1];
        floatypos[i] = [floatyposx,floatyposy];
	}
}

function generateshape() {
	let macprodblack = color(12, 12, 12);
	let macprodblue = color(0, 65, 219);
	background(macprodblack);
	
	noFill();
	stroke(macprodblue);
	strokeWeight(15);
	beginShape();
	for (let i = 0; i < numpoints; i++) {
		curveVertex(floatypos[i][0],floatypos[i][1],0,0);
	}
	endShape();
	
	
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
	print('drawn')
	
}