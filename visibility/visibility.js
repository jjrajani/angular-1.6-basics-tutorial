angular.module('visibility', [/* for dependency injection */])
  .controller('visibility_ctl', ['$scope', function($scope) {
    $scope.isFirstElementVisible = true;
		$scope.isSecondElementVisible = true;
  }]);
