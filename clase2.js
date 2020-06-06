// Objetos
var auto = {
    marca: 'Fiat',
    modelo: 'UNO',
    color: 'azul',
    anio: 2020,
    nombreCompleto: function() {
        return this.marca + ' ' + this.modelo + ' ' + this.anio;
    }
};

// acceder a un elemento o atributo de un objeto
console.log(auto.modelo);
console.log(auto.nombreCompleto());


// Eventos
function mostrarFecha() {
    document.getElementById('clase1').innerHTML = Date();
}

/*
onclick => captura cuando el usuario hace click
onchange => captura cuando se cambia un elemento
onmouseover => captura el usuario mueve el mouse por encima del elemento
onmouseout => captura cuando el usuario saca el mouse del elemento
onkeydown => captura cuando el usuario presiona una tecla
onload => captura cuando se ha terminado de cargar la pagina web 
*/

// String
var nombre = 'Marcos';
var apellido = "Diaz";

var longitud = nombre.length;
console.log(longitud);

var texto = " Hoy es un \"buen\" día ";
console.log(texto);

var texto = " Hoy es un \n  \"buen\" día ";
console.log(texto);

var texto = " Hoy es un \b  \"buen\" día ";
console.log(texto);

var texto = " Hoy es un \t  \"buen\" día ";
console.log(texto);

var texto = " Hoy es un \r  \"buen\" día ";
console.log(texto);

var apellido = "Diaz"; // Recomendado
// var apellido = new String("Diaz"); // NO RECOMENDADO


// indexOf
var texto = "Hoy es un buen día";
var posicionE = texto.indexOf("e", 2);
console.log(posicionE);

var posicionE = texto.indexOf("buen");
console.log(posicionE);

var posicionE = texto.indexOf("z");
console.log(posicionE);
if (texto.indexOf("z") === -1) {
    console.log("No contiene Z");
}

// lastIndexOf
var posicionE = texto.lastIndexOf("e", 7);
console.log('Última posición de e es: ' + posicionE);


// search
var posicionE = texto.search("buen");
console.log(posicionE);


// substr
var subTexto = texto.substr(7);
console.log(subTexto);

var subTexto = texto.substr(7, 5);
console.log(subTexto);

var subTexto = texto.substr(7, -5); // NO
console.log(subTexto);

var subTexto = texto.substr(-5);
console.log(subTexto);

// slice
var subTexto = texto.slice(7, 12);
console.log(subTexto);

// replace
console.log(texto.replace('buen', 'excelente'));

// toUpperCase
console.log(texto.toUpperCase());

// toLowercase
console.log(texto.toLowerCase());

// concat
console.log(texto.concat(" ", apellido));


// conocer si es de tipo numerico
console.log(5 / texto);
console.log(isNaN(texto));

// Arreglos
var colores = ['azul', 'rojo', 'verde'];

var color1 = 'azul';
var color2 = 'rojo';
var color3 = 'verde';
var colores2 = [color1, color2, color3];

var colores3 = new Array('azul', 'rojo', 'verde'); // NO RECOMENDADO

console.log('El segundo color es ' + colores[1]);
colores[1] = 'negro';
console.log('El segundo color es ' + colores[1]);

var persona = ['Pedro', 'Picapiedra', 1500, true];

console.log('La longitud del arreglo colores es ' + colores.length);


console.log('El ultimo color del arreglo es ' + colores[colores.length - 1]);


colores.forEach(myFunction);

function myFunction(valor) {
    console.log(valor);
}

colores.push('amarillo'); // adiciona al final
console.log('El ultimo color del arreglo es ' + colores[colores.length - 1]);

colores.pop(); // remueve el ultimo elemento
console.log('El ultimo color del arreglo es ' + colores[colores.length - 1]);

colores.shift(); // remueve el primer elemento
console.log('El primer color del arreglo es ' + colores[0]);