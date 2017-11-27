var x = 150;
var y = 150;
var x_rec=0;
var y_rec = 0;
var rec_vel=3;
var v = 3;
var placar = 0;
var ponto = 0;
var d = 1;
var cont_tempo =0;
var clicou = false;
function setup(){
	createCanvas(600, 600);
}

function Info(){ 	
	//vidas
textSize(22);
fill(50, 250, 0);
text("Vidas: ", 10, 520);
	for(p = 0; p < v; p++ ){
		fill(140,100,200);
		ellipse(p*11 + 10, 540, 10, 10);
		}
	//Pontos
textSize(22);
fill(50, 250, 0);
text("Pontos: ", 100, 520);
	placar = placar + ponto;
	ponto = 0;
	text(placar, 100, 540);	
	
	// Dificuldade
	textSize(22);
fill(50, 250, 0);
text("Dificuldade: ", 200, 520);
	for(p = 0; p < d; p++ ){
		fill(240,100,100);
		rect(p*11 + 200, 530, 10, 10);
		}

	
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
    fill(0, 60, 100);
	rect(0, 500, 600, 100);
	//rect(300, 300, 10, 10);
	//rect(100, 100, 10, 10);

  	
  x_rec+=rec_vel;
  
  if(x_rec==300){
   	rec_vel=-3;
   
  }
  else if(x_rec==0){
   rec_vel = 3; 
  }
  //teste de pontos
   if (keyIsDown(81) && clicou== false) { //q
    ponto += 10;
    clicou=true;
  }
  if(cont_tempo>=25){
	  clicou = false;
	  cont_tempo = 0;
	  
  }
  else cont_tempo++;
   
  
  //Teste de vida
  
  if(keyIsDown(65)){ // a
	  v = v -1;
	  }
  if(keyIsDown(83)){//s
	  v = v +1;
	  }
	// Teste da dificuldade
	
	if(keyIsDown(90)){ // z
	  d = d -1;
	  }
  if(keyIsDown(88)){//x
	  d = d +1;
	  }
  
  Info();}

