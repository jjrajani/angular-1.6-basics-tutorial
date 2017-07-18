angular.module('factory', ['factory_service'])
    .controller('factory_ctl', ['$scope', 'square',
        function($scope, square) {
            $scope.product = square;
        }])
