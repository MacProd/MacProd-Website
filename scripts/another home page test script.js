let points = [];
let pointscount = Math.random()*20+2
let counter = 0;
let quantscalex = Math.random()*10+2
let quantscaley = Math.random()*10+2;
if (Math.random()>0.5) {
	var bgcolor = Math.random()*127+12;
	var shapecolor = Math.random()*127;
}
else {
	var bgcolor = Math.random()*127;
	var shapecolor = Math.random()*127+127;
}


function setup() {
  frameRate(30);
	iterate(windowWidth,windowHeight);
	
}

function iterate(x,y) {
	createCanvas(x, y);
	
	for (let i = 0; i < pointscount; i++) {
		
		points[i] = [
			int(random(quantscalex+1))*(x)/quantscalex,
			int(random(quantscaley+1))*(y)/quantscaley
		];
  	}
	print(points);
}

function drawshape(bgcolor, shapecolor) {
	background(bgcolor,bgcolor, bgcolor, 50);
	
	for (let i = 1; i < points.length-1; i++) {
		//strokeWeight(25);
		//point(points[i-1][0],points[i-1][1]);
		//point(points[i][0],points[i][1]);
		//point(points[i+1][0],points[i+1][1]);
		fill(shapecolor);
		strokeWeight(1);
		stroke(shapecolor);
		beginShape();
		vertex(points[i+1][0],points[i+1][1]);
		vertex(points[i][0],points[i][1]);
		vertex(points[i-1][0],points[i-1][1]);
		bezierVertex(points[i][0],points[i][1],points[i][0],points[i][1],points[i+1][0],points[i+1][1]);
		endShape();
  	}
	
	//refresh points
	points[int(random(points.length))] = [
			int(random(quantscalex+1))*(windowWidth)/quantscalex,
			int(random(quantscaley+1))*(windowHeight)/quantscaley];
	
	

}

function draw() {
	drawshape(bgcolor,shapecolor);
	counter++;
	textAlign(CENTER);
	textSize(windowWidth/random(50));
	text('work in progress, come back later :)', windowWidth*random(1), windowHeight*random(1));
}// JavaScript Document