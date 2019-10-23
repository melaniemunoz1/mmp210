var r,g,b;

function setup (){
    createCanvas
    (700,355);
    r= random(100);
    g= random(225);
    b= random(27);
}
function draw(){
    background("black");
    
if (frameCount%30===0){
    r= random(100);
    g= random(225);
    b= random(255);

}
    strokeWeight(10);
    stroke("white");
    line(width/2,0,width/2,height);
    line(0, 350, 700, 350);
fill(r,g,b);
    noStroke()
    rect(0,0,350,350);
    rect(355,0,600,350);
    

}