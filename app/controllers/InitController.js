'use strict';

define(['app'], function (app) {

    var initController = function ($scope, $rootScope, $http, $location, dataService) {
        var appTitle = 'Inicio';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
        $scope.cart = dataService.cart;
        
        $scope.path = function() {
            return $location.url();
        };
        
        $scope.showCart = function() {
            $location.path( "/carro-de-compra");
        }
        
        $rootScope.appUrl = "/delibouquet-git/delibouquet-backend/web/api";
    };

    app.controller('InitController', ['$scope', '$rootScope', '$http', '$location', 'dataService', initController]);
    
});