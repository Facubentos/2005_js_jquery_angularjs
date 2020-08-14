var app = angular.module('agendaApp', []);
app.controller("agendaCtrl", function($scope) {
    $scope.tramites = ['Trámite 1', 'Trámite 2', 'Trámite 3', 'Trámite 4'];
    $scope.tramite;
    $scope.nombreCompleto;
    $scope.edad;
    $scope.fecha;
    $scope.menorEdad = false;
});