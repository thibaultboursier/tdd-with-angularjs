
angular.module('app', [
    'ui.router',
    'app.products'
])
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('default', {
            url: '/'
        });
    
        $urlRouterProvider.otherwise('/');
});