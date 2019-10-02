var faceSize=400;


function setup () {
    createCanvas(800, 500);
}
function draw () {
    background("pink");
    fill(150,100);
    stroke("white");
    strokeWeight(10);
    // draw line between the mouse position and origin point
    var x= pmouseX;
    var y= pmouseY;
    var s=40;
    circle(x,y,0,0);
    circle(x,y-400,100);//left eye
    ellipse(faceSize,x+100,y+200, y+100);
    circle(x+200, x-100,y-550);//right eye
    
    fill("lightblue");
    triangle()
    
   circle(x+100,y-300,y-550);
    
    

    
   
   arc(faceSize,faceSize+50, x-230, x-200, 0, PI + QUARTER_PI);
    
   
    
 
}