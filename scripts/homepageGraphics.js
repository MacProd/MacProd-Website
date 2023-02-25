let macprodblack
let macprodblue
let myFont;
let colors;
let trs;
let connectorCoord;
let ropePath = [new c2.Point(Math.random()*window.innerWidth, Math.random()*window.innerHeight)];
let ropeLength = 10*window.innerWidth/640;
let ropeNodes = [];
let world = new c2.World(new c2.Rect(0, 0, window.innerWidth, window.innerHeight-30))
let world2 = new c2.World(new c2.Rect(0, 200, window.innerWidth, window.innerHeight-450))
let xStepFactor = window.innerWidth * 1 / ropeLength;
let yStepFactor = window.innerHeight * 1 / ropeLength;
let currentMouseSelection
let randomStartPosition = Math.floor(Math.random()*10)
function inBounds(IN) {
    return (IN.x > 0 && IN.y > 0 && IN.x < window.innerWidth && IN.y < window.innerHeight)
}

function preload() {
    myFont = loadFont('styling/fonts/pp_neue_machina/TTF/PPNeueMachina-InktrapBlack.ttf');
    trs = loadImage('media/images/trs-cable.svg');

}

function setup() {

    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('homepageGraphicCanvas');

    macprodblack = color(12, 12, 12);
    macprodblue = color(0, 65, 219);
    macprodgrey = color(193, 195, 192);
    macprodorange = color(259, 51, 4);
    colors = [macprodgrey,macprodorange, macprodblue,macprodblack]


    world.addInteractionForce(new c2.Collision())
    world.addInteractionForce(new c2.Gravitation(-0.2))
    world2.addInteractionForce(new c2.Collision())
    world2.addInteractionForce(new c2.Gravitation(-2))

    world.addParticle(new c2.Particle(ropePath[0].x, ropePath[0].y))
    for (let i = 1; i < ropeLength + 1; i++) {
        let lastPoint = ropePath[ropePath.length - 1]

        let newPoint = new c2.Point(lastPoint.x, lastPoint.y)

        newPoint.translate(random(-xStepFactor*2, xStepFactor*2), random(-yStepFactor*2, yStepFactor*2))
        while (!inBounds(newPoint)) {
            newPoint = new c2.Point(lastPoint.x, lastPoint.y)
            newPoint.translate(random(-xStepFactor*2, xStepFactor*2), random(-yStepFactor*2, yStepFactor*2))
        }
        ropePath.push(newPoint)

        let newParticle = new c2.Particle(ropePath[i].x, ropePath[i].y)
        newParticle.radius = 15;
        newParticle.mass = 50;
        world.addParticle(newParticle)
    }
    for (let i = 0; i < ropeLength; i++) {
        let newSpring = new c2.Spring(world.particles[i], world.particles[i + 1], 0.4, xStepFactor * 2)
        ropeNodes.push(newSpring)
        world.addSpring(newSpring)
    }
    console.log(world)

    textFont(myFont);
    textSize(windowWidth / 6);
    textAlign(CENTER)

    for (let i = 0; i<8; i++) {
        let newParticle = new c2.Particle(random(windowWidth),random(windowHeight))
        newParticle.radius=80
        newParticle.mass=100
        world2.addParticle(newParticle)
    }

    fill(colors[floor(random(4))]);
}

function draw() {

    clear()
    if (!mouseIsPressed) {
        currentMouseSelection=undefined;
    }

    noStroke()
    let words = ['Welcome','To','MacProd','Welcome']
    for (let i = 0; i<world2.particles.length-1; i++) {

        fill(colors[(i+randomStartPosition)%colors.length])
        //stroke(colors[(i+randomStartPosition+1)%colors.length])
        let curParticle = world2.particles[i]
        if (currentMouseSelection==i+50 || (mouseIsPressed && currentMouseSelection == undefined && abs(curParticle.position.x-mouseX)<50 && abs(curParticle.position.y-mouseY)<50)) {
            currentMouseSelection=i+50;
            curParticle.position.x=mouseX;
            curParticle.position.y=mouseY;
        }
        push()
        translate(curParticle.position.x,curParticle.position.y)
        rotate(curParticle.velocity().angle()+HALF_PI)
        text(words[i%words.length], 0,0);
        pop()

    }





    noFill();
    stroke(colors[(randomStartPosition)%colors.length])
    strokeWeight(40)



    let lastNode = world.springs[world.springs.length - 1]
    let secondLastNode = world.springs[world.springs.length - 2]
    beginShape()
    curveVertex(0, window.innerHeight)
    for (let i = 0; i < ropeLength; i++) {
        curveVertex(world.springs[i].p1.position.x, world.springs[i].p1.position.y)

        if (currentMouseSelection==i || (mouseIsPressed && currentMouseSelection == undefined && abs(world.springs[i].p1.position.x-mouseX)<25 && abs(world.springs[i].p1.position.y-mouseY)<25)) {
            currentMouseSelection=i;
            world.springs[i].p1.position.x=mouseX;
            world.springs[i].p1.position.y=mouseY;
        }
    }
    curveVertex(lastNode.p2.position.x, lastNode.p2.position.y)
    endShape()
    let last2vect = new c2.Vector(lastNode.p1.position.x - secondLastNode.p1.position.x, lastNode.p1.position.y - secondLastNode.p1.position.y)

    push()
    translate(lastNode.p1.position.x, 0 + lastNode.p1.position.y);
    rotate(last2vect.angle() - HALF_PI);
trs.resize(100, 0)
    image(trs, -50, 0);
    pop();
    stroke(macprodblue);strokeWeight(40); point(lastNode.p1.position.x, 0 + lastNode.p1.position.y)


    world.update()
    world2.update()
}