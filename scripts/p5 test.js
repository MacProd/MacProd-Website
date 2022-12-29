// JavaScript Document


function setup() {
  createCanvas(windowWidth, windowHeight-50);
}

function draw() {
	const macprodblack = color(12, 12, 12);
	const macprodgray = color(193, 195, 192);
  	background(macprodblack);
	fill(macprodgray);
	stroke(macprodgray);
	strokeWeight(5);
	line(0, 0, windowWidth/2, 0);
	line(windowWidth/2, 0, windowWidth/2, windowHeight/2);
	line(windowWidth/2, windowHeight/2, 0, windowHeight);
	line(0, windowHeight, windowWidth, windowHeight);
	line(windowWidth, windowHeight, windowWidth/2, 0);
	bezier(0, 0, windowWidth/2, 0, windowWidth/2, 0, windowWidth/2, windowHeight/2);
}

