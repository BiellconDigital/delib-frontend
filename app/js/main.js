var VarsApp = {
    baseUrl : '/delibouquet/app',
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
        'services/routeResolver',
        'services/dataService',
        'services/userService',
        'controllers/InitController'
    ],
    function () {
        angular.bootstrap(document, ['myApp']);
    });