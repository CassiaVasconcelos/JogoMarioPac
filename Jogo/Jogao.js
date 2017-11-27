var blocos = new Array();

var d = 1;  	 //dificuldade
var v = 3;  	 //vidas iniciais
var placar = 0; 

var x = 460;
var y = 580;

var aleatorio;

var velx = [3,0,3];
var vely = [0,3,0];

var monstroX = [420,420,420];
var monstroY = [420,420,420];

//variáveis preloads
var parede1;
var parede2;
var parede3;
var parede4;

var fantasma1;
var fantasma2;
var fantasma3;
var fantasma4;
var fantasma5;

var coracao;
var animacao;
var dificuldade;
var comida ;
var bonus;
var musicaFase1;
//var musicaMorreu;
var imagemInicio;
var imagemFinal;
var imagemZerou;
var anima; 
var imgsAndando = [];
var contFrame = 0; 

var musica = true ; 

var telaRenderizada = false ;
var telaInicialPress = true ;
var acabouAsVidas = false;
var contTemp = 0 
var jogoZerado = false;

function preload() {
	parede1 = loadImage("figuras/parede1.png");
	parede2 = loadImage("figuras/parede2.png");
	parede3 = loadImage("figuras/parede3.png");
	parede4 = loadImage("figuras/parede4.png");

	fantasma1 = loadImage("figuras/fantasma1.png");
	fantasma2 = loadImage("figuras/fantasma2.png");
	fantasma3 = loadImage("figuras/fantasma3.png");
	fantasma4 = loadImage("figuras/fantasma4.png");
	fantasma5 = loadImage("figuras/fantasma5.png");

	coracao = loadImage("figuras/vidas.png");
	animacao = loadImage("figuras/pacman(0).png");
	dificuldade = loadImage("figuras/estrela.png");
	comida = loadImage("figuras/moedas.png");
	bonus = loadImage("figuras/especial.png");
	musicaFase1 = loadSound("musicaFase1.mp3");
//	musicaMorreu = loadSound("morreu.mp3");
	imagemInicio = loadImage("figuras/pressEnter.png");
	imagemFinal = loadImage("figuras/GameOver.png");
	imagemZerou = loadImage("figuras/zerou.png");
	for (i = 0; i < 50; i++) {
		imgsAndando[i] = loadImage("figuras/gif/mario("+i+").png");
	  }
}

function setup() {
	createCanvas(1040, 840);
	rect(840,0,200,1040);
//	frameRate(8);
//	musicaFase1.setVolume(1.0);

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

function itens(nx,ny){
	for(var c = parseInt((nx)/40); c <= parseInt((nx)/40); c++ ){
		for(var l = parseInt((ny)/40); l <= parseInt((ny)/40); l++ ){
				// contagem de pontos
				if(blocos[l][c]==0){ 
					placar += 10;
					blocos[l][c] = 2; 
				}
				// Adicionar Vida
				if(blocos[l][c]==3){	
					v++
					blocos[l][c] = 2; 
				}
				if(blocos[l][c]==4){	
					placar +=100
					blocos[l][c] = 2; 
				}						
		}
	}
}

function Info(){ 	
textSize(28);			//vidas
text("Vidas: ", 850, 110);
	for(p = 0; p < v; p++ ){
		image(coracao, p*30 + 850,130);
		fill(0);
		}
textSize(28);			//pontos
text("Pontos: ", 850, 200);
textSize(28);			//placar
text(placar, 850, 240);
text("Dificuldade: ", 850, 280);
	for(p = 0; p < d; p++ ){
		image(dificuldade,p*30 + 850, 300);
		}
}

function colisao(player_x,player_y,monstro_x,monstro_y){
      if(dist(player_x,player_y,monstro_x,monstro_y)< 20){
		  v--;
		  x = 460;
		  y = 420;
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
	if(telaInicialPress){
	  telaInicial();
	}
  	else{
		if(placar >= 0 && placar<1300){
			jogando();
		}		
		if(placar >=1300 && placar<2700){	
			jogando2();	
		}
		if(placar >=2700 && placar<4280){
			jogando3();
		}
		if(placar >=4280 && placar<5960 ){
			jogando4();
		}
		if(placar >=5960 && placar<7900 ){
			jogando5();
		}

		if(acabouAsVidas==true){							    
			telaFinal();
		}
		if(jogoZerado==true){							   
			telaZerou();
		}
		}
}
	

function telaInicial(){
	background(0);
		image(imagemInicio,0,0); 
	//	musicaMorreu.stop();
		if(keyIsDown(ENTER)){   //jogar
			telaInicialPress = false ;
        }  
}

function telaFinal(){                                        
	background(0);
	image(imagemFinal,0,0);
	textSize(80);
	fill(0);
	 //  text("tempo:"+Math.floor(contTemp/30),480,420);
	   text(placar,760,415);
	contTemp++;
	
	
	anima = imgsAndando[contFrame];                                 //JOGANDO
	image( anima, 210, 550);
	contFrame++;
	if ( contFrame >49 ) {
	   contFrame = 0;  
	}  


	if(contTemp>300){      
	   contTemp = 0;
	   acabouAsVidas=false;
	   telaInicialPress = true;
	   telaRenderizada = false ;	   
	   placar = 0;
	   v=3;
	   d=1;
	//   musicaMorreu.setVolume(1.0);
	//   musicaMorreu.play();
	musicaFase1.stop();
	return;
	}
}
function telaZerou(){
	background(0);
	image(imagemZerou,0,0);
	textSize(80);
	fill(0);
	   text(+placar,760,170);

	contTemp++;
	if(contTemp>300){      
	   contTemp = 0;
	   acabouAsVidas=false;
	   telaInicialPress = true;
	   telaRenderizada = false ;	   
	   placar = 0;
	   v=3;
	   d=1;
	   musicaFase1.stop();
	   jogoZerado=false;
	//   telaRenderizada = false;
	return;
	}
}

function desenhoTela1(){
	blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	blocos[1] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];
	blocos[2] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[3] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[4] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[5] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[6] =  [1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1];
	blocos[7] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1];
	blocos[8] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1];
	blocos[9] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1];
	blocos[10] = [1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,3,0,0,0,0,1];
	blocos[11] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
	blocos[12] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
	blocos[13] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
	blocos[14] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1];
	blocos[15] = [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[16] = [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[17] = [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[18] = [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[19] = [1,4,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1];
	blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	
	telaRenderizada = true	
}

function jogando(){	
	background(255);
	if(!telaRenderizada){
		desenhoTela1();
		musicaFase1.play();
	}
	for(var i = 0; i < 21; i++){
	 for(var j = 0; j <21; j++){
			  if(blocos[j][i] == 1){
				noStroke();
				image(parede1,i*40,j*40);
			  }
			  else if(blocos[j][i] == 0) {
				image(comida,i*40+5,j*40+5);
			  }
			  else if(blocos[j][i] == 3) {
				image(bonus,i*40+5,j*40+5);
			  }
			  else if(blocos[j][i] == 4) {
				image(bonus,i*40+5,j*40+5);
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
	  noStroke();
	  image(animacao,x-20,y-20);
	  Info();
		
		 for(i=0;i<3;i++){
		  monstro(i, monstroX[i],monstroY[i]); 
		  image(fantasma1,monstroX[i]-15, monstroY[i]-15)
		  colisao(x,y,monstroX[i],monstroY[i]);
		}
		if(v==0){											    	
			acabouAsVidas = true
		}
		if(placar==1300){
			telaRenderizada = false;
		musicaFase1.stop();
			return
		}
}

function desenhoTela2(){	
	blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	blocos[1] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];
	blocos[2] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[3] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[4] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[5] =  [1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[6] =  [1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1];
	blocos[7] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1];
	blocos[8] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1];
	blocos[9] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1];
	blocos[10] = [1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,3,0,0,0,0,1];
	blocos[11] = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1];
	blocos[12] = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1];
	blocos[13] = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1];
	blocos[14] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1];
	blocos[15] = [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[16] = [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[17] = [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[18] = [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[19] = [1,4,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1];
	blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	
	telaRenderizada = true

}

function jogando2(){
	if(!telaRenderizada) {  //nao renderizei a tela ainda
		desenhoTela2();
		musicaFase1.play();
	}
	d=2;
	
	background(255);
	for(var i = 0; i < 21; i++){
	 for(var j = 0; j <21; j++){
			  if(blocos[j][i] == 1){
					noStroke();
					image(parede2,i*40,j*40);
						  }
			  else if(blocos[j][i] == 0) {
				  image(comida,i*40+5,j*40+5);
			  }
			  else if(blocos[j][i] == 3) {
				image(bonus,i*40+5,j*40+5);
			  }
			  else if(blocos[j][i] == 4) {
				image(bonus,i*40+5,j*40+5);
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
	  noStroke();
	  image(animacao,x-20,y-20);
		
		Info();
		for(i=0;i<3;i++){
		  monstro(i, monstroX[i],monstroY[i]); 
		  image(fantasma2,monstroX[i]-15, monstroY[i]-15)
		  colisao(x,y,monstroX[i],monstroY[i]);
		}
		if(v==0){											    	
			acabouAsVidas = true
		}
		if(placar==2700){
			telaRenderizada = false;
			musicaFase1.stop();
			return
		}
	
}


function desenhoTela3(){	
	blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	blocos[1] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1];
	blocos[2] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[3] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[4] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[5] =  [1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[6] =  [1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1];
	blocos[7] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[8] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[9] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[10] = [1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1];
	blocos[11] = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1];
	blocos[12] = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1];
	blocos[13] = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1];
	blocos[14] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1];
	blocos[15] = [1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[16] = [1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[17] = [1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[18] = [1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[19] = [1,4,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1];
	blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	
	telaRenderizada = true

}

function jogando3(){
	if(!telaRenderizada){
		desenhoTela3();
		musicaFase1.play();
	}

	d=3
	
	
	background(255);
	for(var i = 0; i < 21; i++){
	 for(var j = 0; j <21; j++){
			  if(blocos[j][i] == 1){
					noStroke();
					image(parede3,i*40,j*40);
						  }
			  else if(blocos[j][i] == 0) {
				  image(comida,i*40+5,j*40+5);
			  }
			  else if(blocos[j][i] == 3) {
				image(bonus,i*40+5,j*40+5);
			  }
			  else if(blocos[j][i] == 4) {
				image(bonus,i*40+5,j*40+5);
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
	  noStroke();
	  image(animacao,x-20,y-20);
		
		Info();
		for(i=0;i<3;i++){
		  monstro(i, monstroX[i],monstroY[i]); 
		  image(fantasma3,monstroX[i]-15, monstroY[i]-15)
		  colisao(x,y,monstroX[i],monstroY[i]);
		}
		if(v==0){											    	
			acabouAsVidas = true
		}
		if(placar==4280){
			telaRenderizada = false;
			musicaFase1.stop();
		return
		}
	
}

function desenhoTela4(){	
	blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	blocos[1] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1];
	blocos[2] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[3] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[4] =  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[5] =  [1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1];
	blocos[6] =  [1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1];
	blocos[7] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[8] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[9] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[10] = [1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1];
	blocos[11] = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[12] = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[13] = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[14] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
	blocos[15] = [1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[16] = [1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[17] = [1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[18] = [1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1];
	blocos[19] = [1,4,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1];
	blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	
	telaRenderizada = true

}


function jogando4(){
	if(!telaRenderizada){
		desenhoTela4();
		musicaFase1.play();
	}

	d=4
	
	
	background(255);
	for(var i = 0; i < 21; i++){
	 for(var j = 0; j <21; j++){
			  if(blocos[j][i] == 1){
					noStroke();
					image(parede4,i*40,j*40);
						  }
			  else if(blocos[j][i] == 0) {
				  image(comida,i*40+5,j*40+5);
			  }
			  else if(blocos[j][i] == 3) {
				image(bonus,i*40+5,j*40+5);
			  }
			  else if(blocos[j][i] == 4) {
				image(bonus,i*40+5,j*40+5);
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
	  noStroke();
	  image(animacao,x-20,y-20);
		
		Info();
		for(i=0;i<3;i++){
		  monstro(i, monstroX[i],monstroY[i]); 
		  image(fantasma4,monstroX[i]-15, monstroY[i]-15)
		  colisao(x,y,monstroX[i],monstroY[i]);
		}
		if(v==0){											    	
			acabouAsVidas = true
		}
		if(placar==5960){
			telaRenderizada = false;
		musicaFase1.stop();
			return
		}
	
}

function desenhoTela5(){	
	blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	blocos[1] =  [1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1];
	blocos[2] =  [1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1];
	blocos[3] =  [1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1];
	blocos[4] =  [1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1];
	blocos[5] =  [1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1];
	blocos[6] =  [1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1];
	blocos[7] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[8] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[9] =  [1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[10] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
	blocos[11] = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[12] = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[13] = [1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1];
	blocos[14] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
	blocos[15] = [1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[16] = [1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[17] = [1,1,1,1,1,4,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1];
	blocos[18] = [1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1];
	blocos[19] = [1,4,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1];
	blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	
	telaRenderizada = true

}


function jogando5(){
	if(!telaRenderizada){
		desenhoTela5();
		musicaFase1.play();
	}

	d=5
	
	
	background(255);
	for(var i = 0; i < 21; i++){
	 for(var j = 0; j <21; j++){
			  if(blocos[j][i] == 1){
					noStroke();
					image(parede1,i*40,j*40);
						  }
			  else if(blocos[j][i] == 0) {
				  image(comida,i*40+5,j*40+5);
			  }
			  else if(blocos[j][i] == 3) {
				image(bonus,i*40+5,j*40+5);
			  }
			  else if(blocos[j][i] == 4) {
				image(bonus,i*40+5,j*40+5);
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
	  noStroke();
	  image(animacao,x-20,y-20);
		
		Info();
		for(i=0;i<3;i++){
		  monstro(i, monstroX[i],monstroY[i]); 
		  image(fantasma5,monstroX[i]-15, monstroY[i]-15)
		  colisao(x,y,monstroX[i],monstroY[i]);
		}
		if(v==0){											    	
			acabouAsVidas = true
		}
		if(placar==7900){
			jogoZerado = true;
		musicaFase1.stop();
			return
		}
	
}