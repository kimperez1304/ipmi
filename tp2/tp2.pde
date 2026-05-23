

PImage img1;
PImage img2;
PImage img3;
PImage img4;
PImage img5;
PImage img6;

float posXBoton;
float posYBoton;
int tamXBoton;
int tamYBoton;
int posXTexto;
int posYTexto;
int contador;

boolean botonActivado =false;
int estado=1;
PFont miFuente;
float opacidad=0;

float xReiniciar=320;
float yReiniciar=400;
int anchoReiniciar=180;
int altoReiniciar=50;
float escala=1;
boolean enTransicion = false;
int tiempoCambio;
boolean puedeClic = true;


void iniciarTransicion() {
  if (botonActivado) return;
  botonActivado = true;
  contador = 0;
  opacidad = 0;
  puedeClic = false;
}




void setup() {
  size(640, 480);
  tiempoCambio = millis();
  posXBoton=320;
  posYBoton=390;
  tamXBoton=200;
  tamYBoton=60;
  posXTexto=280;
  posYTexto=400;

  textSize(24);
  miFuente = loadFont("Arial-Black-24.vlw");

  img1 = loadImage("greis anatomy.jpg"); // pantalla inicio








  img2= loadImage ("un amor.jpg"); // pantalla 1




  img3=loadImage ("cristina .jpg"); //pantalla 2





  img4= loadImage ("george.jpg"); // pantalla 3




  img5= loadImage ("greys.jpg"); // pantalla 4





  img6= loadImage ("meredi y cristina.jpg"); // pantalla 5
}





void draw() {
  background(0);
  // pantalla inicio
  if ( estado==1) {
    image (img1, 0, 0, 640, 480);

    //titulo de la serie
    fill(100, 200, 255);
    textSize(45);
    text("GREY´S ANATOMY", 120, 70);

    // boton de inicio

    textSize(24);
    miFuente =loadFont("Arial-Black-24.vlw");
    textFont(miFuente);


    if (mouseX>220 && mouseX<420 && mouseY>360 && mouseY<420) {
      fill(0, 200, 100);
    } else {
      fill(200);
    }

    ellipse(posXBoton, posYBoton, tamXBoton, tamYBoton);
    fill(0);
    text("INICIAR", 280, 400);
  }
  // pantalla 2




  else if (estado == 2) {
    image (img2, 0, 0, 640, 480);
    fill(255);
    textSize(20);
    text("Nuestro Amor no fue perfecto,", 20, 400);
    text("Pero fue el lugar donde siempre siempre,", 20, 420);
    textSize(30);
    text("Volvimos a Encontrarnos.", 20, 450);
  } else if (estado==3) {
    image( img3, 0, 0, 640, 480);
    fill( 255);
    textSize(30);
    text("Cristina Yang", 100, 200);
  } else if (estado==4) {
    image(img4, 0, 0, 640, 480);
    fill(0);
    textSize(50);
    text("007", 500, 300);
  } else if (estado==5) {
    image (img5, 0, 0, 640, 480);
    fill(0);
    textSize(40);
    text("El era el bueno", 300, 400);
  } else if (estado==6) {
    image(img6, 0, 0, 640, 480);
    fill(255);
    textSize(40);
    text("Eres Mi Persona", 100, 200);

    // botón reiniciar
    if (mouseX>230 && mouseX<410 &&
      mouseY>375 && mouseY<425) {

      fill(0, 200, 100);
    } else {
      fill(200);
    }

    rectMode(CENTER);
    rect(xReiniciar, yReiniciar, anchoReiniciar, altoReiniciar, 15);

    fill(0);
    textSize(24);
    text("REINICIAR", 240, 408);

    rectMode(CORNER);
  }
  if (estado >= 2 && estado < 6 && !botonActivado) {

    if (millis() - tiempoCambio > 3000) {
      iniciarTransicion();
    }
  }
      // TRANSICIÓN
      if (botonActivado) {

        contador++;

        // aparecer negro
        if (contador <=50) {
          opacidad = map(contador, 0, 50, 0, 255);
        }

        // cambiar imagen
        if (contador==50  && estado <6 ) {
          estado++;

          tiempoCambio = millis();
        }


        if (contador > 50 && contador <= 100) {
          opacidad = map(contador, 50, 100, 255, 0);
        }




        // reinicia contador para seguir
        if (contador>=100)
        {


          botonActivado=false ;

          contador=0;
          opacidad=0;
          escala=1;
          puedeClic = true;
        }

        noStroke();

        escala = map(contador, 0, 100, 1.0, 1.05);

        pushMatrix();

        translate(width/2, height/2);

        scale(escala);

        translate(-width/2, -height/2);
        fill(0, opacidad);
        rect(0, 0, width, height);

        popMatrix();
      }
    }



    void mousePressed() {
      if ( botonActivado) return;

      // Botón INICIAR (solo en pantalla inicial)
      if (estado==1 &&  mouseX>220 && mouseX<420 && mouseY>360 && mouseY<420)
      {
        iniciarTransicion();
        return;
      }


      // Botón REINICIAR
      if (estado==6 &&mouseX>230 && mouseX<410 && mouseY>375 && mouseY<425) {

        estado=1;
        contador=0;
        botonActivado=false;
        opacidad=0;
        puedeClic = true;
        escala=1;
        tiempoCambio = millis();
      }
    }
