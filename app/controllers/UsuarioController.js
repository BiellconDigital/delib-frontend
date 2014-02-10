'use strict';

define(['app'], function (app) {

    var usuarioController = function ($scope, $rootScope, $http, $location) {
        var appTitle = 'Usuario';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
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
                        $(window).height() - $('#header').height() - $('#footer').height() - 88
                    );    
                }
                        $('#navMenuUsuario').height(
                                $(window).height() - $('#header').height() - $('#footer').height() - 200
                        );    
                        $("#contenido").backstretch("./img/registro_fondo.jpg");
                    }).trigger('resize'); //on page load      
        
    };

    app.register.controller('UsuarioController', ['$scope', '$rootScope', '$http', '$location', usuarioController]);
    
});