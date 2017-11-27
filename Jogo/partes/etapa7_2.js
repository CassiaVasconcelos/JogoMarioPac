var blocos = new Array();

blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
blocos[1] =  [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
blocos[2] =  [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[3] =  [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[4] =  [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1];
blocos[5] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
blocos[6] =  [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[7] =  [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[8] =  [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[9] =  [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[10] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
blocos[11] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[12] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[13] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[14] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[15] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[16] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[17] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[18] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[19] = [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];
blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var d = 1;
var v = 3;

var placar = 0;

var x = 420;
var y = 660;
var aleatorio;
var velx = [3,0,3];
var vely = [0,3,0];
var monstroX = [420,420,420];
var monstroY = [420,420,420];
var parede;
var fantasma;
var coracao;
function preload() {
parede= loadImage("figuras/parede.png");
fantasma= loadImage("figuras/fantasma.png");
coracao= loadImage("figuras/coracao.png");


}
function setup() {
  createCanvas(1040, 840);
  rect(840,0,200,1040);
}


function monstro(numero_m, posx_m,posy_m){

	if(lim_monstro(posx_m+3,posy_m) ){
		aleatorio = parseInt(Math.random()*3);	
		if(aleatorio == 0) {
		velx[numero_m] = -3
		vely[numero_m] = 0;
		print("aleatorio = 0 "+aleatorio);
		}
	
		else if(aleatorio == 1) {
			monstroX[numero_m] += -3;
			velx[numero_m] = 0
			vely[numero_m] = 3;
			print("aleatorio = 1 "+aleatorio);
			
			}

		else if( aleatorio == 2 ) {
			print("aleatorio = outro "+aleatorio);
			monstroX[numero_m] += -3;
			velx[numero_m] = 0
			vely[numero_m] = -3;	
			}

		}
	else if(lim_monstro(posx_m-3,posy_m) ){
			aleatorio = parseInt(Math.random()*3);		
			if(aleatorio== 0) {
			velx[numero_m] = 3
			vely[numero_m] = 0;
			print("Esquerda aleatorio = 0 "+aleatorio);
			}
			
			else if(aleatorio == 1) {
				monstroX[numero_m] += 3;
				velx[numero_m] = 0
				vely[numero_m] = 3;
				print("Esquerda aleatorio = 1 "+aleatorio);
				}
	
			
			else if ( aleatorio == 2 ) {
				print("Esquerda aleatorio = outro "+aleatorio);
				monstroX[numero_m] += 3;
				velx[numero_m] = 0
				vely[numero_m] = -3;	
				}
	
			}
	else if(lim_monstro(posx_m,posy_m+3) ){
				aleatorio= parseInt(Math.random()*3);		
				if(aleatorio == 0) {
				velx[numero_m] = 3
				vely[numero_m] = 0;
				print("baixo aleatorio = 0 "+aleatorio);
				}
				
				else if(aleatorio == 1) {
					monstroY[numero_m] += -3;
					velx[numero_m] = -3
					vely[numero_m]= 0;
					print("baixo aleatorio = 1 "+aleatorio);
					}
		
				
				else if ( aleatorio == 2 ) {
					print("Baixo aleatorio = outro "+aleatorio);
					monstroY[numero_m] += -3;
					velx[numero_m] = 0
					vely[numero_m] = -3;	
					}		
				}
		else if(lim_monstro(posx_m,posy_m-3) ){
					aleatorio = parseInt(Math.random()*6);		
					if(aleatorio == 0) {
					vely[numero_m] = 3
					velx[numero_m] = 0;
					print("cima aleatorio = 0 "+aleatorio);					
					}
					
					else if(aleatorio == 1 || aleatorio == 2 || aleatorio == 3) {
						monstroY[numero_m] += 3;
						velx[numero_m] = -3
						vely[numero_m] = 0;
						print("cima aleatorio = 1 "+aleatorio);
							}
					
					else if(aleatorio == 4 || aleatorio == 5 || aleatorio == 6 ) {
						print("Cima aleatorio = outro "+aleatorio);
						monstroY[numero_m] += 3;
						velx[numero_m] = 3
						vely[numero_m] = 0;	
						}
			}
	
	 monstroX[numero_m] += velx[numero_m];
	 monstroY[numero_m] += vely[numero_m];
	}
function teleport(){
	 if(x > 815 ){				// TELEPORT
	   x = 8;
	   y = 420;}

	else if(x<4){
		x = 816;
		y = 420;
	}	

	 else if(y<4){
		 x = 420;
		 y = 816;
	}	

	  else if(y>815){
		x = 420;
	    y = 4;
	}	
}

function itens(nx,ny){
	for(var c = parseInt((nx)/40); c <= parseInt((nx)/40); c++ ){
		for(var l = parseInt((ny)/40); l <= parseInt((ny)/40); l++ ){
				// contagem de pontos
				
				if(blocos[l][c]==0){ 
					placar += 10;
					blocos[l][c] = 2; //espaço vazio
				}
				// Adicionar Vida
				if(blocos[l][c]==3){	
					v++
					blocos[l][c] = 2; //espaço vazio
				}				
		}
	}
}
function Info(){ 	
	//vidas
textSize(22);
text("Vidas: ", 850, 20);
	for(p = 0; p < v; p++ ){
		image(coracao, p*20 + 850,25);
		fill(255);
		}
	//Pontos
textSize(22);
text("Pontos: ", 850, 60);
text(placar, 850, 80);		
	// Dificuldade
	textSize(22);
text("Dificuldade: ", 850, 100);
	for(p = 0; p < d; p++ ){
		rect(p*11 + 850, 120, 10, 10);
		}
	}
function colisao(player_x,player_y,monstro_x,monstro_y){
      if(dist(player_x,player_y,monstro_x,monstro_y)< 20){
		  v--;
		  x = 420;
		  y = 460;
		  }
	return false
}	

function limite(nx,ny){
      for(var c = parseInt((nx-18)/40); c <= parseInt((nx+18)/40); c++ ){
      	for(var l = parseInt((ny-18)/40); l <= parseInt((ny+18)/40); l++ ){
            if(blocos[l][c]==1){
            	return true
            }
        }
      }
  	return false
}

function lim_monstro(nx,ny){
      for(var c = parseInt((nx-12)/40); c <= parseInt((nx+12)/40); c++ ){
      	for(var l = parseInt((ny-12)/40); l <= parseInt((ny+12)/40); l++ ){
            if(blocos[l][c]==1){
            	return true
            }
        }
      }
  	return false
}
function draw() {
  background(0);
  for(var i = 0; i < 21; i++){
   for(var j = 0; j <21; j++){
			if(blocos[j][i] == 1){
              	noStroke();
              	//fill(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)); //LOUCURA
				  //rect(i*40,j*40 , 40, 40);
				  image(parede,i*40,j*40);
						}
			else if(blocos[j][i] == 0) {
				ellipse(i*40+20,j*40+20,5,5);
			}
			else if(blocos[j][i] == 3) {
				ellipse(i*40+25,j*40+20,10,10);
			}
	}
  }

	if(keyIsDown(LEFT_ARROW)&&!limite(x-4,y)){
			x-=8;
    } if(keyIsDown(RIGHT_ARROW)&&!limite(x+4,y)){
			x+=8;
  	} if(keyIsDown(UP_ARROW)&&!limite(x,y-4)){
			y-=8;			
    } if(keyIsDown(DOWN_ARROW)&&!limite(x,y+4)){
			y+=8;
		}
	itens(x,y);
	teleport();
	noStroke();
  	ellipse(x, y, 40, 40);
	  
	  
	  Info();
	  for(i=0;i<3;i++){
		monstro(i, monstroX[i],monstroY[i]); 
		image(fantasma,monstroX[i]-15, monstroY[i]-15)
		colisao(x,y,monstroX[i],monstroY[i]);
	  }
	  
	  
	
  	}