var x = 150;
var y = 150;
var x_rec=0;
var y_rec = 0;
var rec_vel=3;
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
  	rect(x_rec,100, 20, 20);
  	ellipse(x, y, 20, 20);
	
  	
  x_rec+=rec_vel;
  
  if(x_rec==300){
   	rec_vel=-3;
   
  }
  else if(x_rec==0){
   rec_vel = 3; 
  }
  
  
} 
