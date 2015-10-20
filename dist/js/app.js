(function () {
    'use strict';
    angular.module('remnants', [
        'app.core',
        'app.socket'
    ]);
})();

(function () {
    'use strict';
    angular.module('app.core', []);
})();

(function () {
    'use strict';
    angular.module('app.socket', [
        'btford.socket-io'
    ]);
})();

(function () {
    'use strict';
    angular.module('app.core').controller('CoreController', coreController);
    function coreController() {
        console.log('CoreController Loaded.');
    }
})();

(function () {
    'use strict';
    angular.module('app.core').run(coreRun);
    function coreRun(socket) {
        socket.on('handshake', function (data) {
            console.debug(data);
        });
    }
    coreRun.$inject = ['socket'];
})();

(function () {
    'use strict';
    angular.module('app.socket').factory('socket', socketFactory);
    function socketFactory($rootScope, $timeout, socketFactory) {
        $rootScope.socket = {
            connected: null
        };
        // TODO: Move options to main config location.
        var options = {
            protocol: 'ws',
            address: 'localhost',
            port: 4000
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
    socketFactory.$inject = ['$rootScope', '$timeout', 'socketFactory'];
})();

//# sourceMappingURL=maps/app.js.map
