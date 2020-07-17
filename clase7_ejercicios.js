/*
1. Dado el HTML:
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejeercicios Selectores</title>
</head>
<body>
    <div id="vacations-wrapper">
        <h1>Vacation Packages</h1>
        <ul id="vacations">
            <li class="vacation america">
                <h2>San Francisco, California</h2>
                <span class="details">$700</span>
            </li>

            <li class="vacation america">
                <h2>Washington DC, District of Columbia</h2>
                <span class="details">$400</span>
            </li>

            <li class="vacation europe">
                <h2>London, England</h2>
                <span class="details">$1,100</span>
            </li>

            <li class="vacation asia">
                <h2>Shanghai, China</h2>
                <span class="details">$1,200</span>
            </li>
        </ul>

        <ul class="sorting">
            <li><a href="#">America</a></li>
            <li><a href="#">Europe</a></li>
            <li><a href="#">Asia</a></li>
        </ul>
    </div>
</body>
</html>
    A) Selecciona todos los elementos de tipo h2.
    B) Modifica el precio del vuelo para que ahora sea $199.99
    C) Asegúrate que este código se ejecuta una vez que el documento está listo.
    D) Modifica todos los títulos de las vacaciones (h2), su nuevo valor será "Sanlúcar de Barrameda".
    E) Selecciona la lista de vacaciones cuyo id es #vacations.
    F) Selecciona aquellos ítems que tenga la clase .america

2. Dado el HTML:
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Selectores Dificultad Baja</title>    
</head>

<body>
    <p>Primero</p>
    <ul>
        <li><a href="#">Programación</a></li>
        <li><a href="modBD.html">Base de Datos</a></li>
        <li><a href="SImod.html">Sistemas Informáticos</a></li>
        <li><a href="mod-LM.html">Lenguajes de Marcas</a></li>
        <li><a>Formación y Orientación Laboral</a></li>
        <li></li>
    </ul>

    <p>Segundo</p>
    <ul>
        <li>DWESE
            <ul>
                <li>Desarrollo Web en Entorno Servidor</li>
                <li>10 horas</li>
            </ul>
        </li>
        <li>DWECL
            <ul>
                <li>Desarrollo Web en Entorno Cliente</li>
                <li>7 horas</li>
            </ul>
        </li>
        <li>DAW
            <ul>
                <li>Despliegue de Aplicaciones Web</li>
                <li>3 horas</li>
            </ul>
        </li>
        <li>DIWEB
            <ul>
                <li>Diseño de Interfaces Web</li>
                <li>6 horas</li>
            </ul>
        </li>
        <li>EIE
            <ul>
                <li>Entorno e Iniciativa Empresarial</li>
                <li>4 horas</li>
            </ul>
        </li>
    </ul>
</body>
</html>
    A) Selecciona todos los módulos de primero
    B) Selecciona el módulo Sistemas Informáticos
    C) Selecciona el módulo que va detrás de Sistemas Informáticos
    D) Selecciona los módulos que van detrás de Sistemas Informáticos
    E) Selecciona los módulos que tengan el atributo href
    f) Selecciona los módulos que no tengan el atributo href
    G) Selecciona aquellos módulos que contengan la cadena 'mod'
    H) Selecciona aquellos módulos que empiecen por la cadena 'mod'
    I) Selecciona aquellos módulos que terminen con la cadena '.html'
    J) Selecciona todas las horas de los módulos de segundo
    K) Selecciona los ítems vacíos y añade el contenido 'Nodo vacío'
    H) Selecciona los módulos DWESE, DAW y EIE

3. Dado el HTML:
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <title>Selectores Dificultad Media</title>
    <style type="text/css">
        .verde {color:green;}
        .azul {color:blue;}
        .borde {border:2px solid;}
    </style>
</head>
<body>
    <p>Primero</p>
    <ul>
        <li>Base de Datos</li>
        <li>Lenguajes de Marcas</li>
        <li></li>
    </ul>

    <p>Segundo</p>
    <ul>
        <li>DWESE
            <ul data-hours="10">
                <li class="azul" >Desarrollo Web en Entorno Servidor</li>
            </ul>
        </li>
        <li>DWECL
            <ul data-hours="7">
                <li class="azul">Desarrollo Web en Entorno Cliente</li>
            </ul>
        </li>
        <li>DAW
            <ul data-hours="3">
                <li class="azul">Despliegue de Aplicaciones Web</li>
            </ul>
        </li>
        <li>DIWEB
            <ul data-hours="6">
                <li class="azul">Diseño de Interfaces Web</li>
            </ul>
        </li>
        <li>EIE
            <ul data-hours="4">
                <li class="azul">Entorno e Iniciativa Empresarial</li>
            </ul>
        </li>
    </ul>
</body>
</html>
    A) Asigna la clase borde a Primero y Segundo.
    B) Asigna la clase verde a las abreviaturas de cada módulo de segundo.
    C) Borra la clase borde.
    D) La clase borde se debe asignar o quitar según hagamos click sobre primero o segundo.
    E) Modifica ‘Primero’ por ‘Módulos de primero’.
    F) Modifica ‘Segundo’ por ‘Módulos de segundo’.
    G) Elimina los elementos de la las listas que estén vacíos.
    H) Añade el módulo de fol al final de la lista de primero. Realizar en ambos sentidos.
    I) Añade el módulo de programación al principio de la lista de primero. Realizar en ambos sentidos.
    J) Añade el módulo de sistemas informáticos detrás de base de datos.
    K) En la lista de los módulos de segundo, añade al final de cada uno de ellos la cantidad de horas
    semanales que tienen cuando se haga click sobre ellos. Parte del nombre de cada módulo y añade
    la información desde ul.
    L) Vacía la lista que contiene los módulos de segundo.
    M) Elimina la lista que contiene los módulos de primero.

4. Crea un div de 800x70 píxeles.
    Al hacer doble clic redimensionarlo a 250x250 píxeles y si se hace doble clic nuevamente retornar al tamaño 800x70.

5. Crea un script que añada debajo del div un botón que al pulsar en él, mueva el div 100px a la izquierda y lo haga más pequeño 150 px.
    El div estará inicialmente ubicado en las coordenadas(0,100).

6. Realiza un script que oculte y muestre un div de forma rápida (fast).

7. Implementa una página que contenga una lista con cuatro ítems.
    Realiza los siguientes casos:
        A) Eliminar la lista completa.
        B) Restaurar lista.
        C) Añadir un elemento al final de la lista.
        D) Añadir un elemento al principio de la lista.
        E) Eliminar el último elemento.
        F) Eliminar el primer elemento.
        G) Eliminar el primero y segundo elemento.
        H) Eliminar los dos últimos.

8. Busca información en la API de jQuery sobre el método prop.
    A) ¿Qué diferencia existe con attr?
    B) ¿Cuándo se usa?

9. Realiza un Listado de FAQs con las siguientes condiciones:
    A) Los enlaces a las FAQs deben aparecer de color azul.
    B) Cuando pulse en una pregunta, debe cerrar la anterior (si es que la había) y mostrar la respuesta (añadiéndole una R al principio)
    C) Los enlaces ya visitados se pondrán de color rojo.

10. Realice una galería fotográfica.
Al seleccionar una de las imágenes, el resto deben pasar a tener una opacidad de 0.4 y la seleccionada tendrá un especial énfasis con el efecto que prefieras.

11. Desarrolla un juego de memoria. 
Para ello deberá de tener una serie de imágenes que se darán la vuelta de 2 en 2. 
Si la imagen es igual, se mantendrán visibles.
El juego acabará cuando todas las imágenes estén descubiertas.
Añada la funcionalidad que estime oportuna.
*/