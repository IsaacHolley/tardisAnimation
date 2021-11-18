function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

}

function draw() {

    var tardisX = 0;
    var tardisY = 0;
    var tardisWidth = 250;
    var tardisHeight = 500;


    //star background
    background(0);

    //planets
    //fill(106, 153, 196);
    //ellipse(30, 30, 400); 

    //stars
    fill(122);
    var starSize = (5,5);
    ellipse(600, 200, starSize);
    ellipse(400, 400, starSize);
    ellipse(540, 600, starSize);
    ellipse(200, 600, starSize);
    ellipse(800, 400, starSize);
    ellipse(1000, 300, starSize);
    ellipse(1200, 100, starSize);
    ellipse(1100, 600, starSize);
    ellipse(415, 100, starSize);
    ellipse(800, 100, starSize);

    //moon
    fill(255);
    ellipse(200, 200, 300, 300);
    fill(0);
    ellipse(300, 200, 300, 300);

    // tardis back
    
    push();
    translate(mouseX-100,mouseY-100);
    

    scale(mouseY / 400);

    fill(67, 97, 131);
    rect(tardisX, tardisY, tardisWidth, tardisHeight);

    //tardis blue background
    strokeWeight(4);
    stroke(0);
    fill(60, 59, 65);
    rect(tardisX+20, tardisY+20, 210, 40);

    //police box
    noStroke();
    textFont('Century Gothic');
    fill(255);
    textSize(20);
    text('POLICE', tardisX+30, tardisY+45);

    textSize(20);
    text('BOX', tardisX+170, tardisY+45);

    //public call
    fill(255);
    textSize(12);
    text('PUBLIC', tardisX+110, tardisY+40);
    text('CALL', tardisX+115, tardisY+50);

    //black doors
    noFill();
    strokeWeight(4);
    stroke(0);

    rect(tardisX+20, tardisY+20, tardisWidth-40, tardisHeight-20);
    rect(tardisX+120, tardisY+60, tardisWidth/30, tardisHeight-60);

    //right window 

    fill(255);
    rect(tardisX+40, tardisY+80, tardisWidth/4, tardisHeight/4);

    noFill();
    rect(tardisX+40, tardisY+80, tardisWidth/8, tardisHeight/4);
    rect(tardisX+40, tardisY+80, tardisWidth/4, tardisHeight/8);

    //left window

    fill(255);
    rect(tardisX+150, tardisY+80, tardisWidth/4, tardisHeight/4);
     
    noFill();
    rect(tardisX+150, tardisY+80, tardisWidth/8, tardisHeight/4);
    rect(tardisX+150, tardisY+80, tardisWidth/4, tardisHeight/8);

    //other blocks
    rect(tardisX+40, tardisY+220, tardisWidth/4, tardisHeight/4);
    rect(tardisX+150, tardisY+220, tardisWidth/4, tardisHeight/4);
    
    
    rect(tardisX+150, tardisY+360, tardisWidth/4, tardisHeight/4);
    rect(tardisX+40, tardisY+360, tardisWidth/4, tardisHeight/4);


    //top bars
    fill(67, 97, 131);
    rect(tardisX+20, tardisY-23, tardisWidth-40, tardisHeight/22);

    //bottom bar
    rect(tardisX-20, tardisY+500, tardisWidth+40, tardisHeight/22); 

    //signal
    rect(tardisX+110, tardisY-47, tardisWidth-220, tardisHeight/22);

    pop();
}