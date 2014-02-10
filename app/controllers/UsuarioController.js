'use strict';

define(['app'], function (app) {

    var usuarioController = function ($scope, $rootScope, $http, $location) {
        var appTitle = 'Usuario';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
        
        $scope.path = function() {
            return $location.url();
        };
        
        $scope.isActiveCate = function (opt) {
            return $scope.opt === opt;
        }
    };

    app.register.controller('UsuarioController', ['$scope', '$rootScope', '$http', '$location', usuarioController]);
    
});