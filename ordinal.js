'use strict';

angular.module('agilogy.ordinal', [])

.filter('ordinal', function() {
	var s = ['è', 'r', 'n', 'r', 't'];
	return function(input) {
		if (isNaN(input) || input === null) return input;

		return input + s[(input > 4) ? 0 : input];
	};
});