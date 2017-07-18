angular.module('service', ['service_service'])
    .controller('service_ctl', ['$scope', 'multiplier',
        function($scope, multiplier){
            $scope.product = multiplier.multiply(2);
        }]);
