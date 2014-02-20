'use strict';

define(['app'], function (app) {

    var productoDetalleController = function ($scope, $rootScope, $sce, $stateParams, $filter, $http, $location, dataService) {
        var appTitle = 'Detalle Producto';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }

        $scope.categoriaSelec = null;
        $scope.cateID;
        $scope.cart = dataService.cart;
        
        var load = function() {
            console.log('call load()...');
            $http.get($rootScope.appUrl + '/producto', {params: { operacion : 'getById', idprod: $stateParams.prodId }})
                    .success(function(data, status, headers, config) {
                        $scope.producto = data.data;
                        angular.copy($scope.producto, $scope.copy);
                        
                        if (!$rootScope.categorias_producto) {
                            $http.get($rootScope.appUrl + '/producto-categoria')
                                    .success(function(data, status, headers, config) {
                                        $rootScope.categorias_producto = data.data;
                                        angular.copy($rootScope.categorias_producto, $scope.copy);

                                        $scope.categoriaSelec = $filter('filter')($rootScope.categorias_producto, {idcontcate: $scope.producto.idcontcate})[0];
                                    });
                        } else {
                            $scope.categoriaSelec = $filter('filter')($rootScope.categorias_producto, {idcontcate: $scope.producto.idcontcate})[0];                
                        };
                        
                    });

        }

        load();

        $scope.loadCategoria = function(cateID) {
            $location.path( "/productos/:" + cateID );
        }

        $scope.showCart = function() {
            $location.path( "/carro-de-compra");
        }
        
        $scope.isActiveCate = function (cate) {
            return $scope.categoriaSelec === cate;
        }

        $scope.deliberatelyTrustDangerousSnippet = function(html) {
            return $sce.trustAsHtml(html);
        };        
        
            $('#navProducto a').click(function (e) {
              e.preventDefault()
              $(this).tab('show');
            })
    };

    app.register.controller('ProductoDetalleController', ['$scope', '$rootScope', '$sce', '$stateParams', '$filter', '$http', '$location', 'dataService', productoDetalleController]);
    
});