(()=> {
  'use strict';

  angular.module('app.page').controller('PageSlackController', pageSlackController);

  function pageSlackController(socket) {
    var vm = this;

    vm.form = {
      email   : 'testing@testing.com',
      password: 'testing'
    };

    vm.sendInvite = function () {
      socket.emit('slack::invite', vm.form);
    };

  }
})();
