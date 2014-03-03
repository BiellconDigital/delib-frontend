'use strict';

define(['app'], function (app) {

    var productosController = function ($scope, $rootScope, $stateParams, $filter, $http, $location, dataService) {
        var appTitle = 'Productos';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }

        $scope.isNumber = angular.isNumber;
        $scope.categoriaSelec = null;
        $scope.cateID;
        $scope.cart = dataService.cart;
        
        var load = function() {
            console.log('call load()...');
            $scope.cateID = ($stateParams.cateId) ? parseInt($stateParams.cateId) : null;
            
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
            //$("#id_content_view").css("background-color", "gray");

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

        $scope.changePrecio = function(p, precio) {
            p.precio = angular.copy(precio);
        }

        
    };

    app.register.controller('ProductosController', ['$scope', '$rootScope', '$stateParams', '$filter', '$http', '$location', 'dataService', productosController]);
    
});