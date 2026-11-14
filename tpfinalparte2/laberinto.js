class Laberinto {

  constructor(mapalaberinto, imagenPuerta) {
    this.mapa = mapalaberinto;
    this.tamano = 50;
    this.puerta = null;

    this.posX = 800 - (this.mapa[0].length * this.tamano) - 10;
    this.posY = (400 - (this.mapa.length * this.tamano)) / 2;

    for (let fila = 0; fila < this.mapa.length; fila++) {
      for (let columna = 0; columna < this.mapa[fila].length; columna++) {

        if (this.mapa[fila][columna] === 2) {
          let x = this.posX + columna * this.tamano;
          let y = this.posY + fila * this.tamano;

          this.puerta = new Puerta(x, y, imagenPuerta);
        }
      }
    }
  }

  dibujarLaberinto() {

    for (let fila = 0; fila < this.mapa.length; fila++) {
      for (let columna = 0; columna < this.mapa[fila].length; columna++) {

        let x = this.posX + columna * this.tamano;
        let y = this.posY + fila * this.tamano;

        if (this.mapa[fila][columna] === 1) {
          fill(45, 35, 35, 210);
        } else if (this.mapa[fila][columna] === 0) {
          fill(100, 85, 75, 150);
        }

        if (this.mapa[fila][columna] !== 2) {
          stroke(40, 30, 30);
          strokeWeight(1);
          rect(x, y, this.tamano, this.tamano);
        }
      }
    }

    if (this.puerta !== null) {
      this.puerta.dibujarPuerta();
    }
  }
}
