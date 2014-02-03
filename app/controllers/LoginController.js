'use strict';

define(['app'], function (app) {

    var loginController = function ($scope, $location) {
        var appTitle = 'Login';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
    };

    app.register.controller('LoginController', ['$scope', '$location', loginController]);
    
});
