let points = [];
let cpoints = [];
let pointscount = 20;
let counter = 0;


function setup() {
	createCanvas(windowWidth, windowHeight);
	
	iterate(windowWidth, windowHeight);
}

function iterate(x,y) {
	for (let i = 0; i < pointscount; i++) {
		points[i] = [i*windowWidth/pointscount,i*windowHeight/pointscount];
  	}
	for (let i = 0; i < pointscount; i++) {
		cpoints[i] = [
			int(random(1)*(x)),
			int(random(1)*(y))];
  	}
}

function draw() {
	background(0);
	noFill();
	strokeWeight(3);
	stroke(255);
	beginShape();
	vertex(points[0][0],points[0][1])
	for (let i = 1; i < points.length-1; i++) {
		//strokeWeight(25);
		//point(points[i-1][0],points[i-1][1]);
		//point(points[i][0],points[i][1]);
		//point(points[i+1][0],points[i+1][1]);
		
		//vertex(points[i][0],points[i][1]);
		//bezierVertex(cpoints[i][0],cpoints[i][1],cpoints[i+1][0],cpoints[i+1][1],points[i][0],points[i][1]);
		curveVertex(points[i][0],points[i][1]);
		
  	}
	endShape();
	
	//refresh points

		for (let i = 0; i < pointscount; i++) { 
			let noisescale=0.02;
			noiseDetail(50);
			noiseSeed(second());
			//let sampler = 2
			//for (let p = -1; i < 2; i++) {
			//	for (let b = -1; i < 2; i++) {
			//		print(noise((points[i][0]+p)*noisescale,(points[i][1]+b)*noisescale))
			//		if (noise((points[i][0]+p)*noisescale,(points[i][1]+b)*noisescale)<sampler) {
			//			xshift=p;
			//			yshift=b;
			//			
			//		}
			//	}
			//}
			//let shiftdir = noise(points[i][0]*noisescale,points[i][1]*noisescale)*TWO_PI;
			
			noiseSeed(second()+1);
			//let shiftmag = noise(points[i][0]*noisescale,points[i][1]*noisescale)*15;
			//let xshift = shiftmag*cos(shiftdir);
			//let yshift = shiftmag*sin(shiftdir);
			//print(shiftdir)

			points[i][0] = points[i][0]+(noise(points[i][0]*noisescale,points[i][1]*noisescale)-0.5)*50;
			noiseSeed(second()+2);
			points[i][1] = points[i][1]+(noise(points[i][0]*noisescale,points[i][1]*noisescale)-0.5)*50;
		}
}

