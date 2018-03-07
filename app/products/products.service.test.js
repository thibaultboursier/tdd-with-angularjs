describe('Service: products', function() {
    var $httpBackend;
    var productsService;

    var list = [{
        id: 1,
        label: 'product 1'
    }, {
        id: 2,
        label: 'product 2'
    }, {
        id: 3,
        label: 'product 3'
    }];

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.module('ngTemplates'));    
    beforeEach(inject(function(_$httpBackend_, _productsService_) {
        $httpBackend = _$httpBackend_;
        productsService = _productsService_;
    }));

    it('should return product list', function() {
        $httpBackend.whenGET('/api/v1/products').respond(list);
        
        productsService.getProducts()
            .then(function(res){
                expect(res.data.length).toBe(list.length)
            });
        
        $httpBackend.flush();
    });

    it('should return specific product', function() {
        $httpBackend.whenGET('/api/v1/products/2').respond(list[1]);

        productsService.getProduct(2)
            .then(function(res) {
                expect(res.data).toEqual(list[1]);
            })
        
        $httpBackend.flush();        
    });
});