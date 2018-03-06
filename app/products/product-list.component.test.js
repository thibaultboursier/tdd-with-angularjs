describe('Component: productList', function() {
    var scope;
    var element;

    beforeEach(angular.mock.module('app'))
    beforeEach(angular.mock.module('app.products'))
 
    beforeEach(inject(function(_$rootScope_, _$compile_) {
        scope = _$rootScope_.$new();
        element = angular.element('<product-list>');
        element = _$compile_(element)(scope);
        scope.$apply();
    }));

    it('should render the title', function() {
        var title = element[0].querySelector('.title');
        expect(title.innerText).toBe('List');
    });
});