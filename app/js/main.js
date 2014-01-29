var VarsApp = {
    baseUrl : '/delibouquet-git/delibouquet/app',
    autor : "Biellcon Digital"
};

require.config({
    baseUrl: VarsApp.baseUrl,
    urlArgs: 'v=1.0'
});

require(
    [
        'app',
        'services/routeResolver',
        'controllers/InitController'
    ],
    function () {
        angular.bootstrap(document, ['myApp']);
    });