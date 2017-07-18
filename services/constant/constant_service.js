function Message(text) {
	this.text = text;
}

angular.module('constant_service', [])
	.constant('messageText', 'Hello Constant')
	.provider('message', [function () {
		var text = null;

		this.setText = function (textString) {
			text = textString;
		};

		this.$get = [function () {
			return new Message(text);
		}];
	}]);
