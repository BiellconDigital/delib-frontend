'use strict';

define(['app'], function (app) {

    var initController = function ($scope, $rootScope, $http, $location) {
        var appTitle = 'Inicio';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
        
        $scope.path = function() {
            return $location.url();
        };
        
        $rootScope.appUrl = "/web/api";
    };

    app.controller('InitController', ['$scope', '$rootScope', '$http', '$location', initController]);
    
});