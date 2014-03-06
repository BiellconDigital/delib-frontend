'use strict';

define(['app'], function (app) {

    var registrarseController = function ($scope, $rootScope, $http, $location, $cookieStore, Auth, userService) {
        var appTitle = 'registrarse';
        $scope.user = {};

        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
        
        $scope.guardarUsuario = function() {
            userService.user.saveUser($scope.user,
                function(resp) {
                    try {
                        alert("Su información se registró correctamente.");
//                        $cookieStore.put('user', Auth.user);
//                        angular.copy($scope.user, Auth.user);
                    } catch (e) {

                    }
                }
             );
        }
        
        
        $scope.path = function() {
            return $location.url();
        };
        
        $scope.isActiveMenu = function (opt) {
            return $scope.menuSelec === opt;
        };
        
        $scope.menuActivo = function (menu) {
            $scope.menuSelec = menu;
        };
        
        


            $('#navMenuregistrarse a').click(function (e) {
              e.preventDefault()
              $(this).tab('show');
            })
            
//            $('#dropdownMenuregistrarse a').click(function (e) {
//              e.preventDefault()
//              $(this).tab('show');
//            })
            
            $("#contenido").backstretch("./img/registro_fondo.jpg");
            var $window = $(window).on('resize', function() {
                //alert($(window).width())
                if ($(window).width() <= 767) {
                    $('#contenido').height(
                        ($(window).height() - $('#header').height() - $('#footer').height() - 20) / 3 - 25
                    );    
                } else {
                    $('#contenido').height(
                        $(window).height() - $('#header').height() - $('#footer').height() - 60
                    );    
                }
                $('#navMenuregistrarse').height(
                        $(window).height() - $('#header').height() - $('#footer').height() - 200
                );    
                $("#contenido").backstretch("./img/registro_fondo.jpg");
            }).trigger('resize'); //on page load      
        
    };

    app.register.controller('RegistrarseController', ['$scope', '$rootScope', '$http', '$location', '$cookieStore', 'Auth', 'userService', registrarseController]);
    
});