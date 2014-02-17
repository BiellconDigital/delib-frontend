'use strict';

define(['app'], function (app) {

    var pedidosController = function ($scope, $rootScope, $stateParams, $filter, $http, $location, userService) {
        var appTitle = 'pedidos';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
        $scope.pedidos

        var load = function() {
            userService.user.listaPedidos(
                function(resp) {
                    $scope.pedidos = resp.data;
                }
             );

        }

        load();

        
    };

    app.register.controller('pedidosController', ['$scope', '$rootScope', '$stateParams', '$filter', '$http', '$location', 'userService', pedidosController]);
    
});