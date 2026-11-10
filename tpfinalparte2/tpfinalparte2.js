let laberinto;
let mapalaberinto = [ [1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,1],[1,1,1,0,1,0,1,1,0,1],[1,0,0,0,0,0,1,0,0,1],[1,0,1,1,1,1,1,0,1,1],[1,0,0,0,0,0,0,0,0,1], [1,1,1,1,1,1,1,1,2,1]];
let fondoInicio;
let fondoTutorial;
let fondoLaberinto;
let principal;
let fuenteTitulo;
let fuenteTexto;


function preload() {

  fondoInicio = loadImage("data/fondoinicio.jpeg");
  fondoTutorial = loadImage("data/tutorial.jpeg");
  fondoLaberinto = loadImage("data/fondolaberinto.jpeg");
  fuenteTitulo = loadFont("data/Cinzel-VariableFont_wght.ttf");
  fuenteTexto = loadFont("data/LibreBaskerville-Italic-VariableFont_wght.ttf");

}
function setup() {
  createCanvas(800, 400);

  principal = new Principal(mapalaberinto);
}


function draw() {
  principal.dibujar();
}

function mousePressed() {

  //  inicio
  if (principal.pantalla == 0) {

    if (mouseX > 325 && mouseX < 475 &&
        mouseY > 290 && mouseY < 340) {

      principal.pantalla = 1;
    }
  }
// tutorial
else if (principal.pantalla == 1) {

  if (mouseX > 325 && mouseX < 475 &&
      mouseY > 310 && mouseY < 355) {

    principal.pantalla = 2;
  }
}

}
