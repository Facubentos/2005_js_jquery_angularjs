app.controller('eControl', function($scope) {
    $scope.nombre = '';
    $scope.apellido = '';
    $scope.color = 'tomato';
    $scope.precio = 5;
    $scope.cantidad = 8;

    $scope.persona = { nombre: 'Vilma', apellido: 'Picapiedra' };

    $scope.colores = ['azul', 'verde', 'rojo'];

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

    function suma() {
        alert('Hola 2');
    }
});