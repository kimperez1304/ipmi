PImage cuadro;
int desplazar;

void setup(){
size(800,400);

 cuadro=loadImage("tp1.jpeg");//
desplazar=400;

}






void draw(){
background (#BCBBB8);

image(cuadro,0,0,400,400);

//cuadrado
fill(#4674D3);// color azul 
quad(203+desplazar,316,281+desplazar,274,261+desplazar,250,175+desplazar,307);
quad(56+desplazar,98,89+desplazar,135,116+desplazar,112,47+desplazar,42);


//triangulo
fill(#CEB94B);// color amarillo
triangle(354+desplazar,15,270+desplazar,76,294+desplazar,97);
fill(#34A540);//color verde
triangle(374+desplazar,231,272+desplazar,233,219+desplazar,280);
fill(#715126);//color marron
triangle(294+desplazar,97,275+desplazar,124,342+desplazar,138);
fill(#080807);
triangle(298+desplazar,348,314+desplazar,315,358+desplazar,369);
fill(#080807);
triangle(46+desplazar,39,51+desplazar,76,88+desplazar,84);
fill(#AF1E31);
triangle(64+desplazar,157,89+desplazar,135,56+desplazar,99);
fill(#AF1E31);
triangle(42+desplazar,246,120+desplazar,240,102+desplazar,201);
fill(#AF1E31);
triangle(29+desplazar,352,115+desplazar,319,83+desplazar,285);
fill(#9B2BC9);// color morado
triangle(200+desplazar,234,273+desplazar,233,221+desplazar,278);
fill(#E8DC54);
triangle(116+desplazar,320,164+desplazar,303,179+desplazar,383);
fill(#E325A4);// 
triangle(164+desplazar,303,168+desplazar,326,215+desplazar,283);
fill(#E06B22);// color naranja
triangle(83+desplazar,286,120+desplazar,240,41+desplazar,246);
fill(#715126);// color marron
triangle(114+desplazar,111,160+desplazar,158,191+desplazar,135);

//cuadrado
fill(#AF1E31);// color rojo
quad(270+desplazar,77,294+desplazar,98,274+desplazar,124,221+desplazar,113);
fill(#2088E0);
quad(374+desplazar,144,334+desplazar,179,301+desplazar,169,341+desplazar,138);
fill(#E325A4);
quad(301+desplazar,169,334+desplazar,179,309+desplazar,201,274+desplazar,190);
fill(#715126);// color marron
quad(310+desplazar,200,289+desplazar,218,254+desplazar,206,274+desplazar,190);
fill(#EAD215);
quad(290+desplazar,217,272+desplazar,233,216+desplazar,233,254+desplazar,206);
fill(#2880DB);
quad(315+desplazar,316,298+desplazar,348,248+desplazar,332,304+desplazar,303);
fill(#E325A4);
quad(304+desplazar,303,248+desplazar,332,232+desplazar,326,296+desplazar,293);
fill(#4674D3);// color azul 
quad(296+desplazar,293,288+desplazar,283,216+desplazar,321,233+desplazar,326);
fill(#E325A4);//color rosa
quad(289+desplazar,284,282+desplazar,274,202+desplazar,316,217+desplazar,322);
fill(0);
quad(200+desplazar,234,191+desplazar,235,216+desplazar,282,220+desplazar,278);
fill(#715126);// color marron
quad(191+desplazar,235,152+desplazar,239,156+desplazar,264,212+desplazar,276);
fill(#E06B22);
quad(156+desplazar,263,212+desplazar,276,216+desplazar,283,164+desplazar,303);
fill(#4674D3);// color azul 
quad(87+desplazar,279,158+desplazar,275,152+desplazar,239,119+desplazar,240);
quad(253+desplazar,155,190+desplazar,135,159+desplazar,157,234+desplazar,179);
fill(0);
quad(113+desplazar,278,158+desplazar,274,164+desplazar,302,144+desplazar,309);
fill(#AF1E31);
quad(100+desplazar,264,92+desplazar,275,130+desplazar,314,144+desplazar,309);
fill(#34A540);
quad(92+desplazar,273,83+desplazar,284,117+desplazar,320,130+desplazar,314);
fill(#9B2BC9);
quad(138+desplazar,174,151+desplazar,238,120+desplazar,241,102+desplazar,202);
fill(#E325A4);
quad(139+desplazar,174,152+desplazar,238,193+desplazar,236,222+desplazar,197);
fill(#AF1E31);// color rojo
quad(221+desplazar,197,254+desplazar,206,220+desplazar,234,193+desplazar,237);
fill(#34A540);//color verde
quad(75+desplazar,221,129+desplazar,181,89+desplazar,135,64+desplazar,157);
fill(0);
quad(274+desplazar,190,254+desplazar,206,222+desplazar,197,235+desplazar,178);
fill(#E06B22);// color naranja
quad(252+desplazar,154,302+desplazar,169,275+desplazar,189,235+desplazar,178);
fill(#34A540);//color verde
quad(222+desplazar,113,270+desplazar,77,259+desplazar,68,204+desplazar,109);
fill(#AF1E31);// color rojo
quad(259+desplazar,68,205+desplazar,109,188+desplazar,106,250+desplazar,59);
fill(#34A540);//color verde
quad(188+desplazar,106,250+desplazar,59,241+desplazar,51,172+desplazar,102);
fill(#AF1E31);// color rojo
quad(171+desplazar,58,208+desplazar,23,241+desplazar,51,204+desplazar,79);
quad(192+desplazar,71,204+desplazar,79,172+desplazar,102,158+desplazar,99);
fill(#34A540);//color verde
quad(192+desplazar,71,172+desplazar,57,133+desplazar,94,159+desplazar,99);
fill(#9B2BC9);// color morado
quad(252+desplazar,155,301+desplazar,170,342+desplazar,137,274+desplazar,125);
fill(0);
quad(248+desplazar,337,263+desplazar,342,267+desplazar,361,253+desplazar,362);
quad(214+desplazar,325,231+desplazar,331,239+desplazar,362,222+desplazar,362);
fill(#9B2BC9);
quad(90+desplazar,84,172+desplazar,102,146+desplazar,121,115+desplazar,112);
fill(#E06B22);
quad(173+desplazar,102,146+desplazar,122,191+desplazar,135,221+desplazar,112);
fill(#E325A4);
quad(160+desplazar,158,150+desplazar,166,227+desplazar,188,234+desplazar,178);
fill(#4674D3);
quad(150+desplazar,166,139+desplazar,173,221+desplazar,197,227+desplazar,188);




fill(0);
quad(191+desplazar,136,252+desplazar,155,275+desplazar,124,220+desplazar,112);



fill(0);
quad(79+desplazar,63,114+desplazar,31,99+desplazar,27,70+desplazar,54);

quad(130+desplazar,88,174+desplazar,44,163+desplazar,40,115+desplazar,85);

quad(145+desplazar,37,99+desplazar,81,89+desplazar,74,130+desplazar,34);


fill(0);
quad(204+desplazar,363,190+desplazar,364,182+desplazar,320,196+desplazar,321);




fill(#DED531);
quad(116+desplazar,111,89+desplazar,136,128+desplazar,181,160+desplazar,157);




//circulo
fill(0);
ellipse(176+desplazar,31,17,17);
ellipse(146+desplazar,24,17,17);
ellipse(115+desplazar,18,17,17);
ellipse(111+desplazar,345,30,30);
ellipse(323+desplazar,94,30,30);
ellipse(264+desplazar,375,17,17);
ellipse(233+desplazar,375,17,17);

ellipse(199+desplazar,376,17,17);

fill(#34A540);//color verde
ellipse(175+desplazar,212,37,37);

fill(#CEB94B);// color amarillo
ellipse(288+desplazar,148,27,27);
}











void mousePressed(){
println(mouseX,mouseY);
}
