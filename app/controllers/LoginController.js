'use strict';

define(['app'], function (app) {

    var loginController = function ($scope, $location, UserService) {
        var appTitle = 'Login';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        };
        
        var resp = null;
        
        $scope.login = function() {
            resp = UserService.login($scope.username, $scope.password);
            if (resp.data.success === 1 ) {
                console.log(resp.data.api_key)
                console.log(resp.data.api_code)
                $location.path('/usuario');
            } else {
                alert("usuario no valido");
            }
        }
        
        
        $("#contenido").backstretch("./img/registro_fondo.jpg");
        var $window = $(window).on('resize', function() {
                    //alert($(window).width())
            if ($(window).width() <= 767) {
                            $('#contenido').height(
                                    ($(window).height() - $('#header').height() - $('#footer').height() - 20) / 2
                            );    
            } else {
                            $('#contenido').height(
                                    $(window).height() - $('#header').height() - $('#footer').height() - 72
                            );    
            }
            $("#contenido").backstretch("./img/registro_fondo.jpg");
        }).trigger('resize'); //on page load      
    };

    app.register.controller('LoginController', ['$scope', '$location', 'UserService', loginController]);
    
});
