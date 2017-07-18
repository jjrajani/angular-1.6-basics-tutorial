angular.module('root', [/* for dependency injection */])
  .controller('index', ['$scope', function($scope) {
    $scope.message = 'Hello World';
  }]);
