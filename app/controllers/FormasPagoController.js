
'use strict';

define(['app'], function (app) {

    var formasPagoController = function ($scope, $location) {
        var appTitle = 'Formas de Pago';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
    };

    app.register.controller('FormasPagoController', ['$scope', '$location', formasPagoController]);
    
});