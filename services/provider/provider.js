angular.module('provider', ['provider_service'])
	.config(['messageProvider', function (messageProvider) {
		messageProvider.setText('Hello world!');
	}])
	.controller('provider_ctl', ['$scope', 'message',
		function ($scope, message) {
			$scope.message = message.text;
		}
	]);
