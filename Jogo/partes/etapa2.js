var x = 150;
var y = 150;


function setup(){
	createCanvas(300, 300);
}

function draw(){
  
	background(0);
  	if(keyIsDown(LEFT_ARROW))
      x-=5;
  	if(keyIsDown(RIGHT_ARROW))
      x+=5;
  	if(keyIsDown(UP_ARROW))
      y-=5;
      if(keyIsDown(DOWN_ARROW))
      y+=5;
  	rect(150,100, 20, 20);
  	ellipse(x, y, 20, 20);
	
  	

  
  
} 
