var medida = document.getElementById("medidas");
var descripcion = document.getElementById("descripcion");
var abrir = document.getElementById("abrir");
var cerrar = document.getElementById("cerrar");

var medida2 = document.getElementById("medidas-dos");
var descripcion2 = document.getElementById("descripcion-dos");
var abrir2 = document.getElementById("abrir-dos");
var cerrar2 = document.getElementById("cerrar-dos");

var medida3 = document.getElementById("medidas-tres");
var descripcion3 = document.getElementById("descripcion-tres");
var abrir3 = document.getElementById("abrir-tres");
var cerrar3 = document.getElementById("cerrar-tres");

var medida4 = document.getElementById("medidas-cuatro");
var descripcion4 = document.getElementById("descripcion-cuatro");
var abrir4 = document.getElementById("abrir-cuatro");
var cerrar4 = document.getElementById("cerrar-cuatro");

var medida5 = document.getElementById("medidas-cinco");
var descripcion5 = document.getElementById("descripcion-cinco");
var abrir5 = document.getElementById("abrir-cinco");
var cerrar5 = document.getElementById("cerrar-cinco");

var boton = document.getElementById('boton-menu');


function menu() {
$("#menu-movil").slideToggle();
}

abrir.onclick = function(){
    descripcion.style.display = "none";
    medida.style.display = "flex";
};

cerrar.onclick = function(){
    descripcion.style.display = "flex";
    medida.style.display = "none";
};

abrir2.onclick = function(){
    descripcion2.style.display = "none";
    medida2.style.display = "flex";
};

cerrar2.onclick = function(){
    descripcion2.style.display = "flex";
    medida2.style.display = "none";
};

abrir3.onclick = function(){
    descripcion3.style.display = "none";
    medida3.style.display = "flex";
};

cerrar3.onclick = function(){
    descripcion3.style.display = "flex";
    medida3.style.display = "none";
};

abrir4.onclick = function(){
    descripcion4.style.display = "none";
    medida4.style.display = "flex";
};

cerrar4.onclick = function(){
    descripcion4.style.display = "flex";
    medida4.style.display = "none";
};

abrir5.onclick = function(){
    descripcion5.style.display = "none";
    medida5.style.display = "flex";
};

cerrar5.onclick = function(){
    descripcion5.style.display = "flex";
    medida5.style.display = "none";
};

