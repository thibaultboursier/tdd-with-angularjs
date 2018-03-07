angular.module('app')
    .controller('AppController', function($state) {
        var vm = this;

        vm.isCurrentState = isCurrentState;
        vm.test = 'pp'
        
        function isCurrentState(state) {
            return $state.current.name === state;
        }
    });