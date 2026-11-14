//Kimberlyn Pérez

let laberinto;
let fondoInicio;
let fondoTutorial;
let fondoLaberinto;
let principal;
let fuenteTitulo;
let fuenteTexto;
let puertaSalida;
let jugador;
let imagenSoldado;
let imagenFrente;
let fondoVictoria;
let fondoDerrota;
let sonidoFondo;

function preload() {

  fondoInicio = loadImage("data/fondoinicio.jpeg");
  fondoTutorial = loadImage("data/tutorial.jpeg");
  fondoLaberinto = loadImage("data/fondolaberinto.jpeg");
  puertaSalida = loadImage("data/puerta.png");
  jugador = loadImage("data/jugador0.png");
  imagenSoldado = loadImage("data/soldado.png");
  fondoVictoria = loadImage ("data/fondoVictoria.png");
  fondoDerrota = loadImage("data/fondoDerrota.png");
  sonidoFondo = loadSound ("data/fondo.mp3");
  fuenteTitulo = loadFont("data/Cinzel-VariableFont_wght.ttf");
  fuenteTexto = loadFont("data/LibreBaskerville-Italic-VariableFont_wght.ttf");

}

function setup() {
  createCanvas(800, 400);
  imagenFrente = jugador;
  principal = new Principal();
}


function draw() {
  principal.dibujar();
  
  
  
}
function mousePressed() {
  principal.mousePressed();



}

  function keyPressed() {
  principal.keyPressed();
}
  
