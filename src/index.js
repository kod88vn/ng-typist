import angular from 'angular';
import styles  from 'index.css';
import config  from 'index.json';
import malarkey from 'malarkey';

class AppController {
  constructor() {
  	this.version = config.version;
    this.typistConfig = {
      words: ['Hello, typist at work and...', 'Have a nice day!'],
      id: 'malarkey',
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 500,
      loop: true,
      postfix: ''
    };
  }
}

class TypistController {
	constructor() {
    let elem = document.querySelector('#' + this.config.id);
    let opts = {
      typeSpeed: this.config.typeSpeed,
      deleteSpeed: this.config.deleteSpeed,
      pauseDelay: this.config.pauseDelay,
      loop: this.config.loop,
      postfix: this.config.postfix
    };

    let act = malarkey(elem, opts);
    this.config.words.forEach(w => {
    	act.type(w).pause().delete();
    });
  }
}

angular.module('typist', [])
  .controller('AppController', AppController)
  .controller('TypistController', TypistController)
  .component('typist', {
		restrict: 'E',
	  bindings: {
	  	config: '='
	  },
	  template: '<div ng-attr-id="{{config.id}}"></div>',
	  controller : 'TypistController',
	  controllerAs: 'tc'
  });

angular.bootstrap(document, ['typist']);
