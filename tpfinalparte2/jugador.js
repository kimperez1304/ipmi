class Jugador {

  constructor(mapa, fila, columna, posX, posY, tamano) {
    this.mapa = mapa;

    this.fila = fila;
    this.columna = columna;

    this.posX = posX;
    this.posY = posY;

    this.tamano = tamano;
  }

  dibujar() {

    let x = this.posX + this.columna * this.tamano;
    let y = this.posY + this.fila * this.tamano;

    image(imagenFrente, x + 5, y + 2, 40, 46);
  }

  mover(direccion) {

    let nuevaFila = this.fila;
    let nuevaColumna = this.columna;

    if (direccion === UP_ARROW) {
      nuevaFila--;
    }

    if (direccion === DOWN_ARROW) {
      nuevaFila++;
    }

    if (direccion === LEFT_ARROW) {
      nuevaColumna--;
    }

    if (direccion === RIGHT_ARROW) {
      nuevaColumna++;
    }

    // Comprobar que no atraviese las paredes

    if (this.mapa[nuevaFila] !== undefined &&this.mapa[nuevaFila][nuevaColumna] !== undefined && this.mapa[nuevaFila][nuevaColumna] !== 1 ) 
      {

      this.fila = nuevaFila;
      this.columna = nuevaColumna;

    }
  }
}
