describe('Controller: App', function () {
    var $state;
    var controller;

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.module('ngTemplates'));

    beforeEach(inject(function (_$controller_, _$state_) {
        $state = _$state_;
        controller = _$controller_('AppController', {
            $scope: {}
        });
    }));

    it('should predicate if state is current', function () {
        var state = $state.current.name;
        expect(controller.isCurrentState(state)).toBe(true);
    });;
});