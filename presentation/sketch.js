var slideNumber = 0;
var totalSlides = 3;

var nextBtnX=700;
var nextBtnY=500;
var nextBtnSize=50;

var prevBtnX=100;
var prevBtnY=100;
var prevBtnW = 100;
var prevBtnH=50;//

var experiment;
function preload(){
    experiment = loadImage("experiment.jpg");

    
}
function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(153, 255, 153);


    if (slideNumber == 0) {
        //content for slide 0
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Final Project Pitch", width / 2, height / 2);

        textSize(40);
        text("by Melanie Munoz", width / 2, height/2+60);

     } else if (slideNumber == 1) {
        // content for slide number 1
        image(experiment,0, 0, width, height);
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Tilt Sensor", width/2, 200);
        
        fill(0, 255, 189);
        textSize(22);
        text("The user will tilt the sensor which will cause the ellipses to shift the same way.", width/2, 450);
         
        
       
        
    
    } else if (slideNumber == 2) {
        // theme
    
        fill(255);
        textSize(50);
        
        text("Theme", width/2, height/2);
        textSize(19);
       text("The theme of my project will be ellipses of all different colors.", width/3,height/2+50);
        fill(148,0,211);
        ellipse(200, 400, 100);
        
        fill(251, 200, 0);
        ellipse(200,500,100);
        
        fill(163, 0, 251);
        ellipse(200,300,100);
        
        fill(251, 0, 167);
        ellipse(200,200,100);
        
        
        
        
    }
    
    
    /* drawing buttons */
    
    // next btn
    if (slideNumber < totalSlides - 1) {
        fill(255);
        noStroke();
        ellipse(nextBtnX, nextBtnY, nextBtnSize);
        fill(255, 0, 0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Next", nextBtnX, nextBtnY);
    }
    
    
    // prev btn
    if (slideNumber > 0) {
       fill(255);
        noStroke();
        ellipse(prevBtnX, prevBtnY, prevBtnW, prevBtnH);
        fill(255, 0, 0);
        textSize(20);
        textAlign(LEFT, TOP);
        text("Previous", prevBtnX-40, prevBtnY-5);  
    }
   
    
}

function mousePressed() {
    
    // next btn
    var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
    if (d < nextBtnSize/2 && slideNumber < totalSlides - 1) {
        slideNumber++;    
    }
    
    // prev btn
    if (mouseX > prevBtnX &&
       mouseX < prevBtnX + prevBtnW &&
       mouseY > prevBtnY &&
       mouseY < prevBtnY + prevBtnH &&
       slideNumber > 0) {
        slideNumber--;    
    }
}
