class Principal {

  constructor(mapalaberinto) {
    this.pantalla = 0;
    this.laberinto = new Laberinto(mapalaberinto);
  }

  dibujar() {

    if (this.pantalla == 0) {
      this.inicio();
    }

    else if (this.pantalla == 1) {
      this.tutorial();
    }

    else if (this.pantalla == 2) {
      image(fondoLaberinto, 0, 0, 800, 400);
      this.laberinto.dibujar();
    }

  }

  // PANTALLA DE INICIO

  inicio() {

    image(fondoInicio, 0, 0, 800, 400);

    fill(0, 0, 0, 130);
    rect(0, 0, 800, 400);

    textAlign(CENTER);
    fill(255);

// Título
textFont(fuenteTitulo);
textSize(38);
text("LA FUGA DE HLADÍK", 400, 110);

// Subtítulo
textFont(fuenteTexto);
textSize(17);
text("Un desafío entre el tiempo y la libertad", 400, 155);

// Descripción
textSize(14);
text("Videojuego inspirado en El milagro secreto", 400, 210);

// Botón COMENZAR
fill(190, 145, 55);
noStroke();
rect(325, 290, 150, 50, 6);

fill(30, 20, 20);
textFont(fuenteTexto);
textSize(16);
text("COMENZAR", 400, 321);
  }


 //tutorial
tutorial() {

  image(fondoTutorial, 0, 0, 800, 400);


  // borde
  noFill();
  stroke(190, 145, 55);
  strokeWeight(1);
  rect(18, 18, 764, 364, 8);

  fill(255);
  // Línea decorativa
  stroke(190, 145, 55);
  line(280, 112, 520, 112);
  noStroke();

  // txto debajo de tutoorial
  fill(0);
  textSize(15);
  text("Tu destino está en tus manos. El tiempo corre...", 400, 145);

  // lado izquierdo
  fill(35, 25, 30, 220);
  stroke(150, 105, 65);
  rect(75, 175, 300, 105, 8);

  noStroke();
  fill(218, 170, 80);
  textSize(16);
  text("MOVIMIENTO", 225, 202);

  fill(255);
  textSize(14);
  text("Utilizá las flechas del teclado", 225, 230);
  text("para recorrer el laberinto.", 225, 252);

  // lado  derecho
  fill(35, 25, 30, 220);
  stroke(150, 105, 65);
  rect(425, 175, 300, 105, 8);

  noStroke();
  fill(218, 170, 80);
  textSize(16);
  text("OBJETIVO", 575, 202);

  fill(255);
  textSize(14);
  text("Evitá los obstáculos y encontrá", 575, 230);
  text("la puerta dorada para escapar.", 575, 252);

  // booton
  fill(190, 145, 55);
  rect(325, 310, 150, 45, 6);

  fill(30, 20, 20);
  textSize(17);
  text("JUGAR", 400, 339);
}                                                    

}
