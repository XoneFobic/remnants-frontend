(() => {
  'use strict';

  angular.module('app.core').controller('CoreController', coreController);

  function coreController () {
    console.log('CoreController Loaded.');
  }
})();
