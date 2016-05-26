(function(window, module) {
	'use-strict';

	// load malarkey from our combined js file
	if(module.exports) {
		malarkey = module.exports;
	}

	angular.module('ng-typist', [])
	.directive('typist', function() {
		return {
			restrict: 'E',
			scope: {
				config: '='
			},
			template: '<span ng-attr-id="{{config.id}}"/>',
			controller:['$scope', '$timeout', function($scope, $timeout) {
				$timeout(function() {
					var config = $scope.config;

					var elem = document.querySelector('#' + $scope.config.id);
					var opts = {
						typeSpeed: $scope.config.typeSpeed,
						deleteSpeed: $scope.config.deleteSpeed,
						pauseDelay: $scope.config.pauseDelay,
						loop: $scope.config.loop,
						postfix: $scope.config.postfix
					};

					var act = malarkey(elem, opts);
					$scope.config.words.forEach(function(w) {
						act.type(w).pause().delete();
					});
				});
			}] 
		}
	});

})(window, module);
