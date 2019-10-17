var rhino, tiger;
    function preload(){
        rhino=loadImage("rhino.jpg");
        tiger=loadImage("tiger.jpg");
    }

function setup () {
    createCanvas (640,640);
}

function draw () {
    background("red");
       
   image(rhino,-200,0,mouseX,mouseY);

   /* conditional statement*/ 
    if(mouseIsPressed){
       image(tiger,300,360); 
    }  else {
        image(tiger,100,20,mouseX,mouseY);
    }

  if(mouseIsPressed){
      textSize(100);
      fill("black");
      strokeWeight(30);
      textStyle(BOLD);
      textFont ("Comic Sans Ms");
      textAlign(LEFT);
      text("AHHHH",100,100);
  }
 
    textSize(80);
    fill("white");
    strokeWeight(20);
    textStyle(NORMAL);
    textFont("Comic Sans Ms");
    textAlign(LEFT);
text ("Watch Out", 100,100);
       
  
    
    

}