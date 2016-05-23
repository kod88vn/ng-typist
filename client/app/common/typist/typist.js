import angular from 'angular';
import uiRouter from 'angular-ui-router';
import typistComponent from './typist.component';

let typistModule = angular.module('typist', [
  uiRouter
])

.component('typist', typistComponent);

export default typistModule;
