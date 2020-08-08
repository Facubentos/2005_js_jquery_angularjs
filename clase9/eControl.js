app.controller('eControl', function($scope, $http, $timeout, $interval) {
    $scope.nombre = 'Facundo';
    $scope.apellido = 'Bentos';
    $scope.color = 'tomato';
    $scope.precio = 5;
    $scope.cantidad = 8;
    $scope.cargando = true;

    $scope.persona = { nombre: 'Vilma', apellido: 'Picapiedra' };

    $scope.colores = ['blue', 'green', 'red'];

    $scope.alumnos = [
        { nombre: 'sNombre1', apellido: 'Apellido1' },
        { nombre: 'pNombre2', apellido: 'Apellido2' },
        { nombre: 'rNombre3', apellido: 'Apellido3' },
        { nombre: 'dNombre4', apellido: 'Apellido4' }
    ];

    $scope.correo;
    $scope.onGuardar = function() {
        alert('Hola');
    };

    $scope.getColor = function(pColor) {
        return { color: pColor, opacity: 0.3 };
    };

    $scope.getClass = function() {
        return $scope.cargando ? 'cargando' : 'cargado';
    }

    function suma() {
        alert('Hola 2');
    }

    // Servicios
    //http
    // Hace una petición get a una url y procesa el resultado en la variable response
    // $http.get('index.html').then(function(response) {   
    //     $scope.alumnos = response.data;
    // });

    // timeout
    // cambia el valor de la variable  color a los 2 segundos de cargada la página
    $timeout(function() {
        $scope.color = 'blue';
        $scope.cargando = false;
    }, 2000);

    // interval
    // cambiar el valor de la variable hora cada un segundo
    $scope.hora = new Date().toLocaleTimeString();
    $interval(function() {
        $scope.hora = new Date().toLocaleTimeString();
    }, 1000);

    $scope.url_imagen = 'pack_materiales_reducida.jpg';
    $scope.url_sitio = 'http://www.ibec.edu.uy';
    $scope.selectedColor;

    // Filtros
    /*
    currency => formato de moneda
    date => formatear fechas
    json => formatear a json
    number => para convertir un string en numero   '5' => 5
    uppercase
    lowercase
    */
});