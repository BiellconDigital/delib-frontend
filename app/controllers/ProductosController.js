'use strict';

define(['app'], function (app) {

    var productosController = function ($scope, $rootScope, $routeParams, $filter, $http, $location) {
        var appTitle = 'Productos';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }

        $scope.categoriaSelec = null;
        $scope.cateID;
        
        var load = function() {
            console.log('call load()...');
            $scope.cateID = ($routeParams.cateId) ? parseInt($routeParams.cateId) : null;
            
            $http.get($rootScope.appUrl + '/producto', {params: { operacion : 'lista', idcontcate: $scope.cateID }})
                    .success(function(data, status, headers, config) {
                        $scope.productos = data.data;
                        angular.copy($scope.productos, $scope.copy);
                    });

            $http.get($rootScope.appUrl + '/producto-categoria')
                    .success(function(data, status, headers, config) {
                        $rootScope.categorias_producto = data.data;
                        angular.copy($scope.categorias_producto, $scope.copy);

                        $scope.categoriaSelec = $filter('filter')($rootScope.categorias_producto, {idcontcate: $scope.cateID})[0];
                    });

        }

        load();

        $scope.loadProductos = function(cate) {
            console.log('call loadProductos()...');
            $scope.categoriaSelec = cate;
            
            $http.get($rootScope.appUrl + '/producto', {params: {operacion : 'lista', idcontcate: $scope.categoriaSelec.idcontcate }})
                    .success(function(data, status, headers, config) {
                        $scope.productos = data.data;
                        angular.copy($scope.productos, $scope.copy);
                    });
        }

        $scope.isActiveCate = function (cate) {
            return $scope.categoriaSelec === cate;
        }


        
    };

    app.register.controller('ProductosController', ['$scope', '$rootScope', '$routeParams', '$filter', '$http', '$location', productosController]);
    
});