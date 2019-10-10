var rhino;
    function preload(){
        rhino=loadImage("rhino.jpg");
    }


function setup () {
    createCanvas (640,360);
}

function draw () {
    background("red");
       
   image(rhino,-400,0,mouseX,mouseY);
    
    
 
    textSize(80);
    fill("white");
    strokeWeight(20);
    textStyle(NORMAL);
    textFont("Comic Sans Ms");
    textAlign(LEFT);
text ("Watch Out", 100,100);
       
  
    
    

    
    
    
    
    
    
    
    
    
}