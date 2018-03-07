angular.module('app')
    .factory('productsService', function($http) {

        function getProduct(productId) {
            return $http.get('/api/v1/products/' + productId);
        }

        function getProducts() {
            return $http.get('/api/v1/products');
        }
        
        return {
            getProduct: getProduct,
            getProducts: getProducts
        }
    });