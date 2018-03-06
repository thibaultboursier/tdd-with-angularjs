describe('Module: products', function() {
    var $rootScope;
    var $state;

    beforeEach(angular.mock.module('app'))
    beforeEach(angular.mock.module('app.products'))
    beforeEach(angular.mock.module('ui.router'))
 
    beforeEach(inject(function(_$rootScope_, _$state_) {
        $rootScope = _$rootScope_;
        $state = _$state_;
    }));

    describe('products state', function() {
        it('should respond to url', function() {
            expect($state.href('list')).toEqual('#!/products');
        });
    
        it('should activate the state', function() {
            $state.go('list');
            $rootScope.$digest();
            expect($state.current.name).toBe('list');
        });
    });

    describe('detail state', function() {
        it('should respond to url', function() {
            expect($state.href('detail', {id: 3})).toEqual('#!/products/3');
        });

        it('should activate the state', function() {
            $state.go('detail', {id: 3});
            $rootScope.$digest();
            expect($state.current.name).toBe('detail');
        });
    });
});