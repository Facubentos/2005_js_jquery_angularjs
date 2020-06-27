// Manejo de errores
// try => permitir probar que un bloque de código se ejecuta sin errores
// catch => permite capturar los errores que se encuentren
// throw => permite crear errores
// finally => ejecuta un codigo al final de todo

try {
    poner_alert("mensaje");
} catch (err) {
    document.getElementById("demo").innerHTML = err.message;
}

function validar() {
    var mensaje, x;
    mensaje = document.getElementById("texto");
    mensaje.innerHTML = "";
    x = document.getElementById("numero").value;

    try {
        if (x === "") throw "está vacío";
        if (isNaN(x)) throw "no es un número";
        x = Number(x);
        if (x < 20) throw "está por debajo de lo establecido";
        if (x > 60) throw "está por encima de lo establecido";
    } catch (error) {
        mensaje.innerHTML = "El campo " + error;
    } finally {
        document.getElementById("numero").value = "";
    }
}

// Math => permite realizar tareas matemáticas
document.write("<br>");
document.write(Math.PI);
Math.round(4.7); // => 5
Math.round(4.4); // => 4
Math.pow(8, 2); // => 64
Math.sqrt(64); // => 8
Math.abs(-64); // => 64
Math.ceil(4.4); // => 5
Math.floor(4.7); // => 4
Math.sin(90 * Math.PI / 180); // => 1
Math.cos(0 * Math.PI / 180); // => 0
Math.min(1, 2, 3, 4, 5); // => 1
Math.max(1, 2, 3, 4, 5); // => 5
Math.random(); // => retornar un número aleatorio