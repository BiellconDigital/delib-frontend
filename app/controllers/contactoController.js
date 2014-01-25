'use strict';

define(['app'], function (app) {

    var contactoController = function ($scope, $location) {
//        var appTitle = 'Customer Management';
//        $scope.appTitle = appTitle;
//        $scope.highlight = function (path) {
//            return $location.path().substr(0, path.length) == path;
//        }
    };

    app.register.controller('ContactoController', ['$scope', '$location', contactoController]);
    
});