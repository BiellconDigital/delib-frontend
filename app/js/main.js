var VarsApp = {
    baseUrl : '/delibouquet/app',
    autor : "Antonio P. Ramos Rafael"
};

require.config({
    baseUrl: VarsApp.baseUrl,
    urlArgs: 'v=1.0'
});

require(
    [
//        'animations/listAnimations',
        'app',
//        'directives/wcUnique',
//        'directives/wcOverlay',
        'services/routeResolver'
//        'services/config',
//        'services/customersBreezeService',
//        'services/customersService',
//        'services/dataService',
//        'services/modalService',
//        'filters/nameCityStateFilter',
//        'filters/nameProductFilter',
//        'controllers/navbarController',
//        'controllers/orders/orderChildController'
    ],
    function () {
        angular.bootstrap(document, ['myApp']);
    });