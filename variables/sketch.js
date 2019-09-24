var faceSize=400
var x=300
var y=600


function setup () {
    createCanvas(800, 500);
}
function draw () {
    background("pink");
    fill(150,100);
    stroke("white");
    strokeWeight(10);
    circle(x,y-400,100);//left eye
    ellipse(faceSize,x+100,y+200, y+100);
    circle(x+200, x-100,y-550);//right eye
    
    fill("lightblue");
    triangle()
    
   circle(x+100,y-300,y-550);
    
    

    
   
   arc(faceSize,faceSize+50, x-230, x-200, 0, PI + QUARTER_PI);
    
   
    
 
}