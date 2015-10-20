(()=> {
  'use strict';

  angular.module('app.socket').factory('socket', socketFactory);

  function socketFactory($rootScope, $timeout, socketFactory) {
    $rootScope.socket = {
      connected: null
    };

    // TODO: Move options to main config location.
    var options = {
      protocol: 'ws',
      address : 'localhost',
      port    : 4000
    };

    var connection = socketFactory({
      ioSocket: io.connect(options.protocol + '://' + options.address + ':' + options.port)
    });

    connection.on('connect', function () {
      $timeout(function () {
        $rootScope.socket.connected = true;
        console.log('Connection Established.');
      });
    });

    return connection;
  }
})();
