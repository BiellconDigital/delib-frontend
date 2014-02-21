'use strict';

define(['app'], function (app) {

    var usuarioController = function ($scope, $rootScope, $http, $location, $cookieStore, Auth, userService) {
        var appTitle = 'Usuario';
        $scope.user = Auth.user;
        try {
            $scope.user = angular.copy(Auth.user);
//            angular.copy(Auth.user, $scope.user);
        
        } catch (e) {
            
        }
//        $scope.user = $scope.copy;
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
        
        $scope.guardarUsuario = function() {
            userService.user.saveUser($scope.user,
                function(resp) {
                    try {
                        alert("Su información se registró correctamente.");
                        $cookieStore.put('user', Auth.user);
                        angular.copy($scope.user, Auth.user);
                    } catch (e) {

                    }
                }
             );
        }
        
        
        $scope.path = function() {
            return $location.url();
        };
        
        $scope.isActiveCate = function (opt) {
            return $scope.opt === opt;
        };


            $('#navMenuUsuario a').click(function (e) {
              e.preventDefault()
              $(this).tab('show');
            })
            
                    $("#contenido").backstretch("./img/registro_fondo.jpg");
            var $window = $(window).on('resize', function() {
                //alert($(window).width())
                if ($(window).width() <= 767) {
                    $('#contenido').height(
                        ($(window).height() - $('#header').height() - $('#footer').height() - 20) / 2
                    );    
                } else {
                    $('#contenido').height(
                        $(window).height() - $('#header').height() - $('#footer').height() - 60
                    );    
                }
                        $('#navMenuUsuario').height(
                                $(window).height() - $('#header').height() - $('#footer').height() - 200
                        );    
                        $("#contenido").backstretch("./img/registro_fondo.jpg");
                    }).trigger('resize'); //on page load      
        
    };

    app.register.controller('UsuarioController', ['$scope', '$rootScope', '$http', '$location', '$cookieStore', 'Auth', 'userService', usuarioController]);
    
});