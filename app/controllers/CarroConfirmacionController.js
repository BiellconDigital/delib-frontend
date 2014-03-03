'use strict';

define(['app'], function (app) {

    var carroConfirmacionController = function ($scope, $rootScope, $stateParams, $filter, $http, $location, Auth, userService, dataService) {
        $scope.pedido = {};
        
        var load = function() {
            
//                userService.cartUser.getPedido(7,
//                    function(resp) {
//                        $scope.pedido = resp.data;
//                    }
//                 );
            
            if ($rootScope.tipoPago === 1) {//deposito
                userService.cartUser.getPedido($rootScope.idUltimaOrden,
                    function(resp) {
                        $scope.pedido = resp.data;
                    }
                 );
                $rootScope.tipoPago = 0;
            } else if ($rootScope.tipoPago === 2) {//paypal
                
                var codigoTransaccion =  $location.search()['tx'],
                    estadoTransaccion =  $location.search()['st'],
                    montoTransaccion =  $location.search()['amt'];
            
                userService.cartUser.confirmarPagoPayPal($rootScope.idUltimaOrden, codigoTransaccion, 
                    function(resp) {
                        userService.cartUser.getPedido($rootScope.idUltimaOrden,
                            function(resp) {
                                $scope.pedido = resp.data;
                                $rootScope.tipoPago = 0;
                            }
                         );
                    }
                 );
                
            } else {
                return;
            }
            
        }
        
        load();
        
        
    };
    
    app.register.controller('CarroConfirmacionController', ['$scope', '$rootScope', '$stateParams', '$filter', '$http', '$location', 'Auth', 'userService', 'dataService', carroConfirmacionController]);
    
});