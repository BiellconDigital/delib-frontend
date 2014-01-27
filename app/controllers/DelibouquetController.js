'use strict';

define(['app'], function (app) {

    var delibouquetController = function ($scope, $location) {
        var appTitle = 'Delibouquet';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
    };

    app.register.controller('DelibouquetController', ['$scope', '$location', delibouquetController]);
    
});