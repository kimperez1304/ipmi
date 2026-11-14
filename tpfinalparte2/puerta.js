
class Puerta {

  constructor(x, y, imagen) {
    this.x = x;
    this.y = y;
    this.imagen = imagen;
    this.tamano = 50;
  }

  dibujarPuerta() {
    image(this.imagen, this.x, this.y, this.tamano, this.tamano);
  }
}
