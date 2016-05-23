import template from './navbar.pug';
import controller from './navbar.controller';
import './navbar.styl';

let navbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'navc'
};

export default navbarComponent;
