//https://youtu.be/DWFibacT8nA
PImage cuadroptico;
int columnas = 10;
int filas = 11;
int tam = 40;

     int anchoGrilla = columnas * tam;
  int altoGrilla = filas * tam;
 
    int inicioX = 400 + (400 - anchoGrilla) / 2;
  int inicioY = (400 - altoGrilla) / 2;
 
  
  boolean coloresAleatorios = false;
  
  void setup(){
    size (800,400);
    cuadroptico= loadImage("tp3.jpeg");
   actualizarGrilla();
  }
   float calcularTam(float distancia) {
  float nuevoTam = map(distancia, 0, 250, tam + 15, tam);
  nuevoTam = constrain(nuevoTam, tam, tam + 15);
  return nuevoTam;
}
 
 
   
  void draw(){
    background(255);
    image(cuadroptico,0,0,400,400);
    dibujargrilla();
    
  }
  void actualizarGrilla() {
  anchoGrilla = columnas * tam;
  altoGrilla = filas * tam;

  inicioX = 430 + (400 - anchoGrilla) / 2;
  inicioY = (400 - altoGrilla) / 2;
}

    void dibujargrilla(){
   for (int fila = 0; fila < filas; fila++) {

    for (int col = 0; col < columnas; col++) {
      
     
          float x = inicioX + col * tam;
      float y = inicioY + fila * tam;

      float d = dist(mouseX, mouseY, x, y);
     
     float tamActual = calcularTam(d);

  strokeWeight(3);
float desplazamiento = map(d, 0, 250, 10, 0);
float angulo =  radians(45);
      if (coloresAleatorios) {
        fill(random(255), random(255), random(255)); 
      } else  if (col % 2 == 0) {
          fill(0);
        } else {
          fill(150);
        }
      
   

dibujarCuadrado(x + desplazamiento, y + desplazamiento, tamActual, angulo);

    
    } 
    }
   }
    
void dibujarCuadrado(float x, float y, float lado, float angulo) {

  stroke(0);
  
  pushMatrix();
  translate(x, y);
rotate(angulo);
  rectMode(CENTER);
  rect(0, 0, lado, lado);
  popMatrix();

}
   
    

void keyPressed() {

  if (key == ' ') {
    coloresAleatorios = !coloresAleatorios;
  }

  if (key == 'r' || key == 'R') {
    tam = 50;
    coloresAleatorios = false;
        actualizarGrilla();
  }
  }
    
    void mousePressed() {
  tam += 5;

  if (tam > 70) {
    tam = 35;
  }
    actualizarGrilla();
  

}
