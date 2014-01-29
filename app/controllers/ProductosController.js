'use strict';

define(['app'], function (app) {

    var productosController = function ($scope, $rootScope, $http, $location) {
        var appTitle = 'Productos';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
        
        var load = function() {
            console.log('call load()...');
            $http.get($rootScope.appUrl + '/productos')
                    .success(function(data, status, headers, config) {
                        $scope.productos = data;
                        angular.copy($scope.productos, $scope.copy);
                    });
        }

        load();
        
    };

    app.register.controller('ProductosController', ['$scope', '$rootScope', '$http', '$location', productosController]);
    
});