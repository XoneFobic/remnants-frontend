(()=> {
  'use strict';

  angular.module('app.page').config(pageRoute);

  function pageRoute($stateProvider) {
    $stateProvider
      .state('app.page', {
        url        : '/page',
        templateUrl: 'views/page/index.html'
      })
      .state('app.page.slack', {
        url         : '/slack',
        templateUrl : 'views/page/slack.html',
        controller  : 'PageSlackController',
        controllerAs: 'page'
      });
  }
})();
