angular.module('two_way_bindings', [/* for dependency injection */])
  .controller('two_way_bindings_ctl', ['$scope', function($scope) {
    $scope.favoriteWord;
    $scope.favoriteColor;
    $scope.favoriteShape;
  }]);
