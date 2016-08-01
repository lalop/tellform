'use strict';

angular.module('forms').directive('onEnterKey', ['$rootScope', function($rootScope){
	return {
		restrict: 'A',
		link: function($scope, $element, $attrs) {
			var pressed = {};
			$element.bind('keydown keypress', function(event) {
				var keyCode = event.which || event.keyCode;
				if(keyCode === 13 && !pressed[16]) {
					$rootScope.$apply(function() {
						$rootScope.$eval($attrs.onEnterKey);
					});

					event.preventDefault();
				}
				pressed[keyCode] = true;
			}).bind('keyup', function(event) {
				var keyCode = event.which || event.keyCode;
				delete pressed[keyCode];
			});
		}
	};
}]);
