
'use strict';

define(['app'], function (app) {

    var deliveryController = function ($scope, $location) {
        var appTitle = 'Delivery';
        $scope.appTitle = appTitle;
        $scope.highlight = function (path) {
            return $location.path().substr(0, path.length) == path;
        }
    };

    app.register.controller('DeliveryController', ['$scope', '$location', deliveryController]);
    
});
