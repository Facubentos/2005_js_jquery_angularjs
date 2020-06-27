var fecha1 = new Date();
console.log("1 " + fecha1);

// Date(año, mes, dia)
var fecha2 = new Date(1988, 04, 25);
console.log("2 " + fecha2);

// Date(año, mes, dia, hora, minutos, segudos, milisegundo)
var fecha3 = new Date(1988, 04, 05, 10, 20, 45, 30);
console.log("3 " + fecha3.toDateString());

// Date(año, mes, dia, hora, minutos)
var fecha31 = new Date(1988, 04, 05, 10, 20);



var fecha4 = new Date("October 25, 1988");
console.log("4 " + fecha4.toUTCString());

// ISO MM-DD-YYYY
var fecha5 = new Date("2020-06-16");



// booleano   => verdadero (true)(1) o falso (false)(0)
var mesJunio = true;
var mesJulio = false;

// comparaciones
// == =>  mes == 'Junio'  => true
// ===  => 5 === '5'   => false
// <
// >

// var mes = 'Junio';
// var día = 12;
// mes == 'Junio' && dia == 12 // => true     
// mes != 'Junio';
// || => or
// !  => negación

var edad = 40;
// operador ternario
// si se cumple la condicion ? 'entonces' ejecutar esto : 'sino' ejecutar esto
var esMayorEdad = (edad > 18) ? "Es mayor de edad" : "Es menor de edad";

// condicional IF
// if (condicion) { 
//    entonces se ejecuta un algoritmo 
// } 
// else { 
//    se ejecuta otro algoritmo
// }

var cliente = 'vip';
// if
if (cliente == 'vip') {
    "muestren ofertas en promoción";
}

// if else
if (edad > 18) {
    esMayorEdad = "Es mayor de edad";
} else {
    esMayorEdad = "Es menor de edad";
}


// if  else if else
if (cliente == 'vip') {
    "muestren ofertas en promoción";
} else if (cliente == 'registrado') {
    'hacer un descuento del 10%'
} else {
    'hacer descuento de un 2%'
}

// switch
// switch(expresión) {
//     case a:
//         // algoritmo
//         break;
//     case b:
//         // algoritmo
//         break;
//     default:
//         break;
// }

switch (cliente) {
    case 'vip':
        "muestren ofertas en promoción";
        break;
    case 'registrado':
        'hacer un descuento del 10%';
        break;
    default:
        'hacer descuento de un 2%';
        break;
}


// ciclo repetitivos
var colores = ['azul', 'verde', 'amarillo'];
var color1 = colores[0]; // => azul
var color2 = colores[1]; // => verde
var color3 = colores[2]; // => amarillo

// for 
// for (expresión inicio, expresión parada, expresión incremento) {
//     // algoritmo a ejecutar
// }

for (var i = 0; i <= 2; i++) {
    console.log(i + ' - ' + colores[i]);
}

for (var i = 0; i < colores.length; i++) {
    console.log(i + ' - ' + colores[i]);
}

// for in
var auto = { marca: 'Fiat', modelo: 'UNO', color: 'azul', anio: 2020 };
for (item in auto) {
    console.log(item + ': ' + auto[item]);
}

// for of
var colores = ['azul', 'verde', 'amarillo'];
for (item of colores) {
    console.log(item);
}

// while
// while (condición) { algoritmo a ejecutar }
var contador = 0;
while (contador < colores.length) {
    console.log("el color es: " + colores[contador]);
    contador++;
}


// do while
// do {
//     // algoritmo
// } while (condición);



// 1 => Mostrar en pantalla el nombre completo de la persona 'Apellido, Nombre'
var alumnos = [
    { nombre: "Enrique", apellidos: "Perugorria" },
    { nombre: "Jorge", apellidos: "Salsamendi" },
    { nombre: "Matías", apellidos: "Rampoldi" },
    { nombre: "Melania Katherine", apellidos: "La Rosa" },
    { nombre: "Nicolás", apellidos: "Pólvora" },
    { nombre: "Pablo", apellidos: "Riveiro" },
];

for (var i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i].apellidos + ', ' + alumnos[i].nombre);
}

for (alumno of alumnos) {
    console.log(alumno.apellidos + ', ' + alumno.nombre);
}

// 2 => Realice una función que dado un número calcule su factorial.
// Ej 4 => factorial = 4 * 3* 2 * 1
function factorial(numero) {
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
        factorial *= i; // => factorial = factorial * i
    }
    return factorial;
}

console.log(factorial(4));

// 1. crea un bucle que muestre 10 veces, en la consola, el texto Voy por la vuelta X 
// siendo el número de vueltas desde 1 hasta 10 (no desde 0 hasta 9).

// 2. A partir de una variable 'contador' con valor inicial 0, 
// construye un bucle que se ejecute 10 veces y sume 2 a la variable 'contador' en cada iteración del bucle. 
// Al finalizar el bucle, mostraremos en la consola el texto: 
// 'El resultado es: X', siendo X el valor de la variable contador.

// 3. Implemente una función que retorne el promedio (la media) de los elementos de un arreglo de números.

// 4. (Grado complicación media)
// Hacer una página web que le pregunte al usuario cuáles son sus dos películas o libros favoritos
// mediante un formulario. Cuando esta pulse el botón enviar guardaremos la información en un arreglo,
// lo recorreremos y mostraremos este mensaje por cada obra: 
// "¡A mí también me encantó "OBRA"! Tenemos mucho en común humano.",
// donde OBRA será el nombre de la obra.

// 5. Teniendo los datos de estos alumnos:

// María, 29 años, diseño
// Lucía, 31 años, ingeniera química
// Susana, 34 años, periodista
// Rocío, 25 años, actriz
// Inmaculada, 21 años, diseño

// crear una estructura de datos en JavaScript para manejar estos datos. Use arreglo y objetos para crearla.
// crear funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las alumnos.
// Una función contarAlumnos que devuelve el número de alumnos en el listado.
// Una función promedioEdad que devuelve la media de edad de listado.
// Una función masJoven que devuelve el nombre del alumno más joven.
// Una función cantidadDiseñadores que devuelve el número de alumnos que son diseñadores.