var VarsApp = {
    baseUrl : '/cart/app',
    autor : "Biellcon Digital"
};

require.config({
    baseUrl: VarsApp.baseUrl,
    urlArgs: 'v=1.0'
});

require(
    [
        'app',
        'js/shoppingCart',
        'js/routingConfig',
        'services/routeResolver',
        'services/authService',
        'services/dataService',
        'services/userService',
        'directives/accessLevel',
        'controllers/InitController'
    ],
    function () {
        angular.bootstrap(document, ['myApp']);
    });