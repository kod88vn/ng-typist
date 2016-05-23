import template from './typist.pug';
import controller from './typist.controller';
import './typist.styl';

let typistComponent = {
  restrict: 'E',
  bindings: {
  	config: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default typistComponent;
