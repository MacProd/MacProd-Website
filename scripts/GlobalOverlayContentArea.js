let floatypos = [];

function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
	cnv.parent('p5globaloverlay');
	
	for (let i = 0; i < 10; i++) {
		floatypos[i] = [random(windowWidth),random(windowHeight)];
	}
		
}

function draw() {
	clear()
	let macprodblue = color(0, 65, 219);
	background(0,0,0,0);
	fill(macprodblue);
	noStroke();
	
	for (let i = 0; i < floatypos.length-1; i++) {
		rect(floatypos[i][0],floatypos[i][1],50,50);
		floatypos[i][0] = floatypos[i][0]+random(5)-10; 
		floatypos[i][1] = floatypos[i][1]+random(5)-10;
	}
}