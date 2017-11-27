var blocos = new Array();
blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
blocos[1] =  [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];
blocos[2] =  [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[3] =  [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[4] =  [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
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

var x = 420;
var y = 420;

var placar = 0;
var ponto = 0;

function setup(){
    createCanvas(1040, 840);
    
}


function Info(){ 	
textSize(23);						//vidas
fill(50, 250, 0);
text("Vidas: ", 850, 20);
	for(p = 0; p < v; p++ ){
		fill(140,100,200);
		ellipse(p*11 + 850, 30, 10, 10);
		}
	
textSize(23);						//Pontos
fill(50, 250, 0);
text("Pontos: ", 850, 60);
	placar = placar + ponto;
	ponto = 0;
	text(placar, 850, 80);	
	

	textSize(23);					// Dificuldade
fill(50, 250, 0);
text("Dificuldade: ", 850, 100);
	for(p = 0; p < d; p++ ){
		fill(240,100,100);
		rect(p*11 + 850, 120, 10, 10);
		}

	
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

function draw(){
	background(0);

    for(var i = 0; i < 21; i++){
        for(var j = 0; j <21; j++){
                 if(blocos[j][i] == 1){
                       noStroke();
                       rect(i*40,j*40 , 40, 40);
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
	}
	if(keyIsDown(RIGHT_ARROW)&&!limite(x+4,y)){
			x+=8;
	} 
	if(keyIsDown(UP_ARROW)&&!limite(x,y-4)){
			y-=8;			
	} 
	if(keyIsDown(DOWN_ARROW)&&!limite(x,y+4)){
			y+=8;
	}
  
  	ellipse(x, y, 20, 20);
    fill(0, 60, 100);
	rect(840, 0, 200, 850);   //da pontuação

  Info();
  noStroke();
  itens(x,y);
}
