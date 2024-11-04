function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(0.5);
}

function draw() {

background(0);
//definisco la distanza tra i quadrati grandi
let gutter=windowWidth/15;
//definisco la grandezza dei quadrati grandi
let larghezza=windowWidth/15;
let altezza=windowWidth/15;
//definisco le variabili columns e rows per disporre i quadrati grandi lungo una griglia
let columns= (windowWidth/larghezza);
let rows= (windowWidth/altezza);

//realizzo un array per far si che si generino dei segni di colore blu
//la probabilità che nella griglia piccola si generi un qadratino blu è di 1/5
let colors=["blue", "black", "black", "black"];

//creo 4 cicli for uno dentro l'altro per avere prima la griglia di quadrati grandi e
//poi al suo interno altre girglie contenenti quadrati più piccoli
for(i=0; i<columns;i++){
  for(j=0;j<rows;j++){
      //le variabili k e l devono essere minori di 6 perchè è il numero massimo di quadratini che ho scelto per righe e colonne
       for(k=0;k<6;k++){
      for(l=0;l<6;l++){
      //definisco le variabili x1 e y1 per ollocare la mia griglia grande
      let x1= (windowWidth-(windowWidth/1.2))/2+(larghezza+gutter)*j;
      let y1=(windowWidth-(windowWidth/1.2))/2+(altezza+gutter)*i;
      //ora definisco invece le variabili x2 e y2 per collocare nella pagina le griglie piccole
      let x2=(x1+((larghezza/12)*k));
      let y2=(y1+((altezza/12)*l));
      noFill();
      noStroke();
      //definisco il quadrato dentro al quale è contenuta la griglia di uadrati più piccoli
      rect(x1,y1,larghezza,altezza);
      push();
      noStroke();
      //collego i quadratini all'array in modo tale da generare i segni in maniera randomica e di colore blu
      fill(random(colors));
      //ora definisco i quadratini piccoli, quelli che danno vita ai segni veri e propri
      rect(x2,y2,larghezza/12,altezza/12);
      pop();
      }
      
    } 
  }
}
 
}



