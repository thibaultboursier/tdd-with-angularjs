angular.module('app.products', [
    'ui.router'
])
    .config(function($stateProvider) {

        $stateProvider.state('list', {
            url: '/products',
            component: 'productList'
        });

        $stateProvider.state('detail', {
            url: '/products/:id'
        });
    });
