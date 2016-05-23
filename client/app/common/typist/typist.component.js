import template from './typist.html';
import controller from './typist.controller';
import './typist.styl';

let typistComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default typistComponent;
