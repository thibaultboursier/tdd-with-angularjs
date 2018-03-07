describe('Module: App', function() {
    var $rootScope;
    var $state;
    var $location;

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.module('ngTemplates'));

    beforeEach(inject(function(_$rootScope_, _$state_, _$location_) {
        $rootScope = _$rootScope_;
        $state = _$state_;
        $location = _$location_;
    }));

    describe('default state', function() {
        it('should respond to url', function() {
            expect($state.href('default')).toEqual('#!/');
        });

        it('should activate the state', function() {
            $state.go('default');
            $rootScope.$digest();
            expect($state.current.name).toBe('default');
        });

        it('should activate the state when route is not found', function() {
            $location.path('random-path');
            $rootScope.$digest();
            expect($state.current.name).toBe('default');
        });
    });
});