import { type } from "os";

document.getElementById("clase1").innerHTML = "Hola Mundo";

document.write("AngularJS == version 1 de Angular");

alert("esto es un alert!!!");

console.log("Esto es un mensaje para consola");

var x;
// x => undefined
var y, z;

x = 5;
x = "string";

var nombre = "Damian";
var apellido = "Cervantes";

var nombreCompleto = nombre + " " + apellido;
var nombreCompleto = "Damian" + " " + "Cervantes";

var num = "50";
var num2 = 100;
var suma = num2 + num;

// operadores  aritmeticos
/*
+ 
-
*
/
** => EXPONENCIAL
% => RESTO         SI DIVIDIMOS 5 / 2    => 2 Y QUEDA UNO COMO RESTO   => 5 % 2 = 1;
5 / 2 = 2   (2*2) + 1
13 / 5 = 2    2*5 = 10 + 3  => 13 % 5 = 3
++
--
*/

// operador de asignación
/*
=
+=   =>  a += b   =>   a = a + b
-=   =>  a -= b   =>   a = a - b
*=   =>  a *= b   =>   a = a * b
/=   =>  a /= b   =>   a = a / b
%=   =>  a %= b   =>   a = a % b
**=  =>  a **= b   =>   a = a ** b
*/

// operadores lógicos
/*
&& => and
|| => or
!  => not
*/

//operadores de tipos
/*
typeof   => retorna el tipo de una variable
instanceof => retorna verdadero si la variable es una instancia de la clase con la que se compara
*/

var x = 5;
var y = "5";

/*
x == y   =>   true
x === y   =>    false
*/

// operadores de comparación
/*
==
===  => exactamente igual
<
>
!=
!==
>=
<=
*/

// tipos de datos
var x = 5; // numero
var x = 5.3; // decimal
var x = "5"; // texto
var x; // undefined
var x = true // boolean
var x = ['azul', 'rojo', 'verde']; // arreglo o matriz
var x = { nombre: 'Damian', apellido: 'Cervantes', email: 'dcervantes@ibec.edu.uy' } // objeto
var x = null;


// funciones
function nombre() {
    // implementacion de la logica del algoritmo
};

function suma(num1, num2) {
    var z = 500; // variable local
    return num1 + num2 + z - z;
}

var sumatoria = suma(4, 6); // => 10

// Ejercicio
// desarrollar un página web donde se ponga en práctica lo estudiado en clases
// sea creativo como todo buen desarrollador

// dcervantes@ibec.edu.uy