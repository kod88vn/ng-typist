(function() {
	'use-strict';

	angular.module('ng-typist')
	.controller('mainController', function() {
		var vm = this;

		vm.name = 'Typing: something else';
		vm.typistConfig = {
      words: ['Thanks for using ng-typist...', 'Have a nice day!'], 
      id: 'typist',
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 500,
      loop: true,
      postfix: ''
    };
	});

})();
