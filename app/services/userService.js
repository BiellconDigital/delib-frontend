'use strict';

define(['app'], function (app) {

    var userService = function ($http, $rootScope, $q) {
       //var serviceBase = '/api/dataservice/',
        var userFactory = {};

        userFactory.login = function (usuario, clave) {
//             return $http({
//                url: $rootScope.appUrl + '/login',
//                method: "POST",
//                data: { 'usuario' : usuario, 'clave': clave }
//            })
//            .then(function(data, status, headers, config) {
//                    return {data: data, headers: headers};
//                }, 
//                function(data, status, headers, config) { // optional
//                    alert("error")
//                    return null
//                }
//            );            
            return $http.post($rootScope.appUrl + '/login', { 'usuariox' : usuario, 'clave': clave })
                    .success(function(data, status, headers, config) {
                        //$scope.productos = data.data;
                        //angular.copy($scope.productos, $scope.copy);
                        return {data: data, headers: headers};
                });
        };
        
        return userFactory;

    };

    app.factory('UserService', ['$http', '$rootScope', '$q', userService]);

});