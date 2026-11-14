class Soldado {

  constructor(mapa, fila, columna, posX, posY, tamano) {

    this.mapa = mapa;
    this.fila = fila;
    this.columna = columna;
    this.posX = posX;
    this.posY = posY;
    this.tamano = tamano;
    this.direccion = 1;
    this.contador = 0;
  }
actualizar() {

  this.contador++;
//para controlar los pasos o velocidad del soldado
  if (this.contador >= 20) {

    this.contador = 0;

    let nuevaColumna = this.columna + this.direccion;

    // para ccomprobar donde estan las paredes
    if (this.mapa[this.fila][nuevaColumna] === 1) {

      this.direccion *= -1;

    } else {

      this.columna = nuevaColumna;

    }
  }
}

dibujar() {

  let x = this.posX + this.columna * this.tamano;
  let y = this.posY + this.fila * this.tamano;

  image(imagenSoldado, x, y, this.tamano, this.tamano);

}
}
