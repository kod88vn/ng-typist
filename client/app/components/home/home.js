import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import typistModule from '../../common/typist/typist';

let homeModule = angular.module('home', [
  uiRouter,
  typistModule.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    });
})

.component('home', homeComponent);

export default homeModule;
