angular.module('value', ['value_service'])
	.controller('value_ctl', ['$scope', 'message', function($scope, message) {
		$scope.message = message;
	}]);
