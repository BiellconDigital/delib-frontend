'use strict';

/*
// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
  //,'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
        
    $routeProvider.when('/proyectos', 
        {templateUrl: 'partials/proyectos.html', controller: 'proyectosController',resolve: resolveController('/app/controllers/proyectosController.js')}
    );
    $routeProvider.when('/proyecto/:id', 
        {templateUrl: 'partials/proyecto.html', controller: 'proyectoController',resolve: resolveController('/app/controllers/proyectoController.js')}
    );
  
//    $routeProvider.when('/productos', 
//        {templateUrl: 'partials/productos.html', controller: 'productosController',resolve: resolveController('/app/controllers/customersController.js')}
//    );
//    $routeProvider.when('/producto/:id', 
//        {templateUrl: 'partials/producto.html', controller: 'productoController',resolve: resolveController('/app/controllers/customersController.js')}
//    );
  
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

*/

define(['services/routeResolver'], function () {

    var app = angular.module('myApp', ['ngRoute', 'routeResolverServices']);// 'ngAnimate',  , 'wc.Directives', 'wc.Animations', 'ui.bootstrap'

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
        function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {

            //Change default views and controllers directory using the following:
            //routeResolverProvider.routeConfig.setBaseDirectories('/app/views', '/app/controllers');

            app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            //Define routes - controllers will be loaded dynamically
            var route = routeResolverProvider.route;

            $routeProvider
                .when('/main', route.resolve('Main'))
                .when('/contacto', route.resolve('Contacto'))
                .when('/delibouquet', route.resolve('Delibouquet'))
                .otherwise({redirectTo : '/main'});
                
//                {templateUrl: 'partials/proyectos.html', controller: 'proyectosController',resolve: resolveController('/app/controllers/proyectosController.js')}
//                )
//                .when('/proyecto/:id', 
//                {templateUrl: 'partials/proyecto.html', controller: 'proyectoController',resolve: resolveController('/app/controllers/proyectoController.js')}
//                );

//            $routeProvider
                //route.resolve() now accepts the convention to use (name of controller & view) as well as the 
                //path where the controller or view lives in the controllers or views folder if it's in a sub folder. 
                //For example, the controllers for customers live in controllers/customers and the views are in views/customers.
                //The controllers for orders live in controllers/orders and the views are in views/orders
                //The second parameter allows for putting related controllers/views into subfolders to better organize large projects
                //Thanks to Ton Yeung for the idea and contribution
//                .when('/customers', route.resolve('Customers', 'customers/'))
//                .when('/customerorders/:customerID', route.resolve('CustomerOrders', 'customers/'))
//                .when('/customeredit/:customerID', route.resolve('CustomerEdit', 'customers/'))
//                .when('/orders', route.resolve('Orders', 'orders/'))
//                .when('/about', route.resolve('About'))
//                .otherwise({ redirectTo: '/customers' });

    }]);

    //Only needed for Breeze. Maps Q (used by default in Breeze) to Angular's $q to avoid having to call scope.$apply() 
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {
            $rootScope.$apply();
            //breeze.core.extendQ($rootScope, $q);
    }]);

    return app;

});




