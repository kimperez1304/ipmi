PImage cuadroptico;
int columnas = 9;
int filas = 8;
int tam = 50;

     int anchoGrilla = columnas * tam;
  int altoGrilla = filas * tam;
 
    int inicioX = 430 + (400 - anchoGrilla) / 2;
  int inicioY = (400 - altoGrilla) / 2;
  
  void setup(){
    size (800,400);
    cuadroptico= loadImage("tp3.jpeg");
  
    
  }
   
  void draw(){
    background(255);
    image(cuadroptico,0,0,400,400);
    dibujargrilla();
  }
    void dibujargrilla(){
 
 

  
    for (int fila = 0; fila < filas; fila++) {

    for (int col = 0; col < columnas; col++) {
      
     
      if ( col% 2 == 0) {
        fill(0);  
      } else {
        fill(150);    // gris
      }
          stroke(0);    
          pushMatrix();
   
    translate(inicioX + col * tam,inicioY + fila * tam);
   
     rotate(radians(45));
   rect(
        0,
        0,
        tam,
        tam
        
      );  popMatrix();   }
 

    
    } 

}
