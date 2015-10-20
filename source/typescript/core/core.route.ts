(()=> {
  'use strict';

  angular.module('app.core').config(coreRoute);

  function coreRoute($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/page/slack');

    $stateProvider
      .state('app', {
        url        : '',
        abstract   : true,
        templateUrl: 'views/app.html'
      });
  }
})();
