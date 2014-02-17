'use strict';

define(['app'], function (app) {

    var carroController = function ($scope, $rootScope, $stateParams, $filter, $http, $location, Auth, userService, dataService) {
        $scope.cart = dataService.cart;
        $scope.cartUser = userService.cartUser;
        $scope.user = Auth.user;
        $scope.disitritos = null;
        $scope.orden = {};
        $scope.razonesCompra = null;
        $scope.orden.costoEnvio = 15.00;
        $scope.orden.subTotal = dataService.cart.getTotalPrice();
        $scope.orden.cuentaBanco = "Cta. cte. No 8472847382478374";
        $scope.horaDespacho = userService.cartUser.listHoraDespacho();
        
        $scope.updateOrden = function() {
            $scope.orden.total = $scope.orden.costoEnvio + $scope.cart.getTotalPrice();
        };
        
        var load = function() {
            $scope.updateOrden();
            $scope.cartUser.listUbigeo(
                function(resp) {
                    $scope.disitritos = resp.data;
                }
             );
            $scope.cartUser.listOrdenTipo(
                function(resp) {
                    $scope.razonesCompra = resp.data;
                }
             );
     
        }
        load();
        
        $scope.procesarCompra = function() {
            $scope.cartUser.procesarCompra($scope.orden, $scope.cart.items,
                function(resp) {
                    $scope.cart.clearItems();
                    $location.path('/arreglos');
                }
             );
        }
        
        
        $('#rootwizardCart').bootstrapWizard({
                'nextSelector': '.button-next', 'previousSelector': '.button-previous',
                onTabShow: function(tab, navigation, index) {
//                        var $total = navigation.find('li').length;
//                        var $current = index+1;
//                        var $percent = ($current/$total) * 100;
//                        $('#rootwizardCart').find('.bar').css({width:$percent+'%'});
//			if(index === 1) {
//				// Make sure we entered the name
//                                if(Auth.user.role.title === "public") {
//                                    $location.path('/login');
//                                    console.log(Auth.user);
//                                    //return false;
//				}
//			}
                }
                ,onTabClick: function(tab, navigation, index) {
                    return false;
                }
                ,onNext: function(tab, navigation, index) {
//			// Set the name for the next tab
//			$('#tab3').html('Hello, ' + $('#name').val());
			
		}
        });
    };
    
    app.register.controller('CarroController', ['$scope', '$rootScope', '$stateParams', '$filter', '$http', '$location', 'Auth', 'userService', 'dataService', carroController]);
    
});