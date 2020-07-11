// // Sintaxis básica
// // $ => para definir que se esta accediendo a la liberría de JQuery
// // selector  => seleccionar un elemento del HTML
// // action  => indica que se debe hacer con el elemento seleccionado
// // $select().action();

// // selector de etiquetas HTML
// $("p").hide(); // ocultar todos los párrafos de la página web
// $("div").hide();

// // selector de clases
// $(".producto").hide();  // ocultar todos elementos html que tengan la clase producto

// // selector por id
// $("#producto").hide();  // ocultar el elemento html que tengan el id producto

// // evento de documento listo para trabajar
// $(document).ready(function() {
//     // codigo de jquery
// });

// // forma abreviada para el evento ready
// $(function() {
//     // codigo de jquery
// });

// $(function() {
//     $("button").click(function() {
//         // $("p").hide();
//         // $("#primero").hide();
//         $(".segundo").hide();
//     });
// });

// otras formas de usar selectores
// $("*") => selecciona todos los elementos
// $(this) => seleccione el elemento actual
// $("p.segundo") => selecciona los elementos p que tengan declarada la clase segundo
// $("p:first") => selecciona el primer elemento p
// $("ul li:first")  => // seleccionar el primer elemento dentro de una lista no ordenada
// $("[href]") => selecciona todos los elementos con atributo href
// $("tr:even") => selecciona todas las filas pares de una tabla
// $("tr:odd") => selecciona todas las filas impares de una tabla

// eventos
// click
// dblclick => doble click
// mouseenter => se posiciona el mouse sobre el elemento
// mouseleave => se retira el mouse del elemento
// keypress => el usuario mantiene presionada la tecla
// keydown => el usuario comienza a presionar la tecla
// keyup => el usuario libera la tecla
// submit => se envian los datos de un formulario
// change => el usuario modifica los datos en un elemento
// focus => el usuario se posiciona en un  elemento del formulario
// blur => el usuario abandona un elemento del formulario

$(function() {
    // $("button").dblclick(function() {
    //     // $("p").hide();
    //     $("#primero").hide();
    //     $(".segundo").hide(3000);
    // });
    // $("#primero").mouseenter(function() {
    //     alert("esá entrando al primer párrafo");
    // });
    // $(".segundo").mouseleave(function() {
    //     alert("por favor no se vaya");
    // });
    // $("#primero").hover(function() {
    //     alert("esá entrando al segundo párrafo");
    // }, function() {
    //     alert("por favor no se vaya");
    // });
    // $("input").focus(function() {
    //     $(this).css("background-color", "tomato");
    // });
    // $("input").blur(function() {
    //     $(this).css("background-color", "white");
    // });
    // $("input").on({
    //     focus: (function() {
    //         $(this).css("background-color", "tomato");
    //     }),
    //     blur: (function() {
    //         $(this).css("background-color", "white");
    //     })
    // });

    // $("span").click(function() {
    //     $("p").show(2000);
    // });

    // $("#toggle").click(function() {
    //     $("#primero").toggle(2000);
    // });

    $("#fadein").click(function() {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });

    $("#fadeout").click(function() {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });

    $("#fadetoggle").click(function() {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });

    $("#slide").click(function() {
        $("#texto").slideDown("slow");
    });
    $("#up").click(function() {
        $("#texto").slideUp("slow");
    });
    $("#slidetoggle").click(function() {
        $("#texto").slideToggle("slow");
    });
});

/* Ejercicios
 1. Disponer de dos párrafos. Capturar el evento click solo del primero utilizando la librería jQuery.

 2. Agregar una tabla con dos filas. Cambiar el color de uan fila fondo cuando sea presionada con el mouse.

 3. Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona. 
 Para ocultar un elemento jQuery tiene un método llamado hide().

 4. En la tabla cambiar el color del interior de la casilla cuando ingresamos con el mouse
 y regresarla al original cuando salimos.

*/