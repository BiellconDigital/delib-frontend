'use strict';

define(['app'], function (app) {

    var mainController = function ($scope, $location) {
        var appTitle = 'Home';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
    	console.log('main controlador');

    }

    app.register.controller('MainController', ['$scope', '$location', mainController]);
    
});