angular.module('watch', [/* for dependency injection */])
  .controller('watch_ctl', ['$scope', function($scope) {
    $scope.$watch('factor', function(newValue) {
      $scope.product = newValue * 2;
    });

    $scope.factor = 6;
  }]);
