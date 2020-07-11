$(function() {
    // Animaciones
    // animate()
    $("#animar").click(function() {
        $("#objeto").animate({
            left: '250px',
            opacity: '0.5',
            width: '75px',
            height: '75px'
        });
    });

    // Manipulación del DOM
    // text()    html()  val()
    // $("#btntexto").click(function() {
    //     $("#texto").text("Ha hecho clic en el boton Texto");
    // });

    // $("#btnhtml").click(function() {
    //     $("#texto").html("<span>Ha hecho clic en el boton Html</span>");
    // });

    // acceder a valores de atributos
    // attr()
    $("#btntexto").click(function() {
        // $(this).addClass("color");
        // $(this).removeClass("color");
        $(this).toggleClass("color");
        $(this).css({ "background-color": "black", "padding": "5px" });
        // $("#texto").attr({ "style": "color: blue" });
        // $("#texto").append(" :) ");
        // $("#texto").prepend(" :) ");
        // $("#btnhtml").remove();
        // $("#div1").empty();
        // $("#texto").addClass("color_fondo");

    });




});