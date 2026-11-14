class Principal {

 constructor() {
  this.pantalla = 0;

  this.mapa = [ [1,1,1,1,1,1,1,1,1,1],    [1,0,0,0,1,0,0,0,0,1],    [1,1,1,0,1,0,1,1,0,1],    [1,0,0,0,0,0,1,0,0,1],    [1,0,1,1,1,1,1,0,1,1],    [1,0,0,0,0,0,0,0,0,1],    [1,1,1,1,1,1,1,1,2,1] ];

  this.laberinto = new Laberinto(this.mapa, puertaSalida);

  this.jugador = new Jugador( this.mapa,1, 1,this.laberinto.posX, this.laberinto.posY,this.laberinto.tamano);
  
  this.soldado = new Soldado( this.mapa, 5, 4, this.laberinto.posX, this.laberinto.posY,this.laberinto.tamano);
  
 }
 
dibujar() {

  if (this.pantalla === 0) {
    this.inicio();
  }

  else if (this.pantalla === 1) {
    this.tutorial();
  }

  else if (this.pantalla === 2) {

    image(fondoLaberinto, 0, 0, 800, 400);

    this.laberinto.dibujarLaberinto();

    this.soldado.actualizar();
    this.soldado.dibujar();

    this.jugador.dibujar();

    // detecta el soldado con el jugador
    if ( this.jugador.fila === this.soldado.fila && this.jugador.columna === this.soldado.columna) {
      this.pantalla = 4;
    }

    // Detecta si llega a la puerta
    else if (this.jugador.fila === 6 && this.jugador.columna === 8 ) {
      this.pantalla = 3;
    }
  }

  else if (this.pantalla === 3) {
    this.victoria();
  }

  else if (this.pantalla === 4) {
    this.derrota();
  }
}



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

// creditos
  textSize(14);
  text("Videojuego inspirado: El milagro secreto obra de Jorge Luis Borges", 400, 210);
  textSize(12);
  fill(230);
  text("Desarrollado por: Kimberlyn Pérez/ Ezequiel Gonzáles", 400, 245);
  fill(220);
  textFont(fuenteTexto);
  textSize(11);
  text("Programación para medios interactivos orientada a las tecnologías web", 400, 385);

   
// Boton comenzar
  fill(190, 145, 55);
  noStroke();
  rect(325, 290, 150, 50, 6);
  fill(30, 20, 20);
  textFont(fuenteTexto);
  textSize(16);
  text("COMENZAR", 400, 321);
  }



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

   victoria() {
  
  image(fondoVictoria, 0, 0, 800, 400);

  fill(0, 0, 0, 120);
  rect(0, 0, 800, 400);

  textAlign(CENTER);
  textFont(fuenteTitulo);
  textSize(38);
  fill(218, 170, 80);
  text("¡HAS ESCAPADO!", 400, 140);

  textFont(fuenteTexto);
  textSize(17);
  fill(255);
  text("Has ha encontrado la libertad.", 400, 195);
  
  fill(190, 145, 55);
  rect(325, 290, 150, 45, 6);

  fill(30, 20, 20);
  textSize(15);
  text("VOLVER A JUGAR", 400, 318);
}


  derrota() {
  image(fondoDerrota, 0, 0, 800, 400);

  fill(0, 0, 0, 150);
  rect(0, 0, 800, 400);

  textAlign(CENTER);
  textFont(fuenteTitulo);
  textSize(38);
  fill(190, 70, 60);
  text("¡HAS SIDO CAPTURADO!", 400, 140);

  textFont(fuenteTexto);
  textSize(17);
  fill(255);
  text("Tu huida ha terminado.", 400, 195);
    // Botón VOLVER A JUGAR
  fill(190, 145, 55);
  noStroke();
  rect(325, 290, 150, 45, 6);

  fill(30, 20, 20);
  textFont(fuenteTexto);
  textSize(15);
  text("VOLVER A JUGAR", 400, 318);
}

   reiniciar() {

  this.jugador = new Jugador( this.mapa, 1, 1, this.laberinto.posX,this.laberinto.posY, this.laberinto.tamano);
  this.soldado = new Soldado(this.mapa, 5, 4, this.laberinto.posX, this.laberinto.posY, this.laberinto.tamano);
  this.pantalla = 2;
}
 mousePressed() {

    if (this.pantalla === 0 && mouseX > 325 && mouseX < 475 &&mouseY > 290 && mouseY < 340) {

    userStartAudio();

    if (!sonidoFondo.isPlaying()) {
      sonidoFondo.loop();
      sonidoFondo.setVolume(0.3);
    }

     this.pantalla = 1;
  }

  // Botón JUGAR
  else if (this.pantalla === 1 && mouseX > 325 && mouseX < 475 && mouseY > 310 && mouseY < 355)
 {
    this.pantalla = 2;
  }

  // Botón VOLVER A JUGAR
  else if (this.pantalla === 3 || this.pantalla === 4) {

    if (mouseX > 325 && mouseX < 475 && mouseY > 290 && mouseY < 335) {

      this.reiniciar();
    }
  }
}
keyPressed() {
  if (this.pantalla === 2) {
    this.jugador.mover(keyCode);
  }
}

}
