function Message(text) {
	this.text = text;
}

angular.module('provider_service', [])
	.provider('message', [function () {
		var text = null;

		this.setText = function (textString) {
			text = textString;
		};

		this.$get = [function () {
			return new Message(text);
		}];
	}]);
