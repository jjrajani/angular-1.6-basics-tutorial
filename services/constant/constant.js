angular.module('constant', ['constant_service'])
	.config(['messageProvider', 'messageText', function (messageProvider, messageText) {
		messageProvider.setText(messageText);
	}])
	.controller('constant_ctl', ['$scope', 'message',
		function ($scope, message) {
			$scope.message = message.text;
		}
	]);
