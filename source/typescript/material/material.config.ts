(()=> {
  'use strict';

  angular.module('app.material').config(materialConfig);

  function materialConfig($mdThemingProvider) {

    $mdThemingProvider.definePalette('remnants-light-blue', {
      '50'  : '#d2e9f7',
      '100' : '#92caeb',
      '200' : '#63b3e2',
      '300' : '#2895d6',
      '400' : '#2383bc',
      '500' : '#1e71a2',
      '600' : '#195f88',
      '700' : '#144d6e',
      '800' : '#103b55',
      '900' : '#0b293b',
      'A100': '#d2e9f7',
      'A200': '#92caeb',
      'A400': '#2383bc',
      'A700': '#144d6e'
    });

    $mdThemingProvider.definePalette('remnants-light-green', {
      '50'  : '#dafaea',
      '100' : '#97f1c3',
      '200' : '#65eaa7',
      '300' : '#26e282',
      '400' : '#1cce73',
      '500' : '#18b364',
      '600' : '#149855',
      '700' : '#117d46',
      '800' : '#0d6237',
      '900' : '#0a4728',
      'A100': '#dafaea',
      'A200': '#97f1c3',
      'A400': '#1cce73',
      'A700': '#117d46'
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('remnants-light-blue')
      .accentPalette('remnants-light-green', {
        'default': '400'
      });

    $mdThemingProvider.theme('top-header')
      .primaryPalette('deep-orange')
      .accentPalette('orange', {
        'default': '400'
      });
  }
})();
