'use strict';

define(['app'], function (app) {

    var loginController = function ($scope, $location) {
        var appTitle = 'Login';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        };
            $("#contenido").backstretch("./img/registro_fondo.jpg");
            var $window = $(window).on('resize', function() {
                        //alert($(window).width())
                if ($(window).width() <= 767) {
                                $('#contenido').height(
                                        ($(window).height() - $('#header').height() - $('#footer').height() - 20) / 2
                                );    
                } else {
                                $('#contenido').height(
                                        $(window).height() - $('#header').height() - $('#footer').height() - 87
                                );    
                }
                $("#contenido").backstretch("./img/registro_fondo.jpg");
            }).trigger('resize'); //on page load      
    };

    app.register.controller('LoginController', ['$scope', '$location', loginController]);
    
});
