function setup () {
    createCanvas(800, 500);
}
function draw () {
    background("pink");
    fill(150,100);
    stroke("white");
    strokeWeight(10);
    circle(300, 200, 100);//left eye
    ellipse(400, 250, 700, 500);
    circle(500, 200, 100);//right eye
    
    fill("lightblue");
    triangle()
    
   
    
    

    
    //points
    line(400,200,400,400);
   arc(400, 450, 80, 60, 0, PI + QUARTER_PI);
    
    triangle(
    500,400,
    400,300,
    400,400 
    );
    
 
}