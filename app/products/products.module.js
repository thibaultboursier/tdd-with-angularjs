angular.module('app.products', [
    'ui.router'
])
    .config(function($stateProvider) {

        $stateProvider.state('list', {
            url: '/products'
        });

        $stateProvider.state('detail', {
            url: '/products/:id'
        });
    });
