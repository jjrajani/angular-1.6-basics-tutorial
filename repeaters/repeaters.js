angular.module('repeaters', [/* for dependency injection */])
  .controller('repeaters_ctl', ['$scope', function($scope) {
    $scope.products = [
			{id: 1, name: "Hockey puck"},
			{id: 2, name: "Golf club"},
			{id: 3, name: "Baseball bat"},
			{id: 4, name: "Lacrosse stick"}
		];
  }]);
