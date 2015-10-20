(() => {
  'use strict';

  angular.module('app.core').run(coreRun);

  function coreRun(socket) {
    socket.on('handshake', function (data) {
      console.debug(data);
    });
  }
})();
