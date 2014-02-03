'use strict';

define(['app'], function (app) {

    var politicasController = function ($scope, $location) {
        var appTitle = 'Politicas';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
    };

    app.register.controller('PoliticasController', ['$scope', '$location', politicasController]);
    
});
