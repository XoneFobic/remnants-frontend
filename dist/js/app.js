(function () {
    'use strict';
    angular.module('remnants', [
        'app.core',
        'app.socket',
        'app.material',
        'app.page'
    ]);
})();

(function () {
    'use strict';
    angular.module('app.core', [
        'ui.router'
    ]);
})();

(function () {
    'use strict';
    angular.module('app.material', [
        'ngMaterial'
    ]);
})();

(function () {
    'use strict';
    angular.module('app.page', []);
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
    }
})();

(function () {
    'use strict';
    angular.module('app.core').config(coreRoute);
    function coreRoute($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/page/slack');
        $stateProvider
            .state('app', {
            url: '',
            abstract: true,
            templateUrl: 'views/app.html'
        });
    }
    coreRoute.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
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
    angular.module('app.material').config(materialConfig);
    function materialConfig($mdThemingProvider) {
        $mdThemingProvider.definePalette('remnants-light-blue', {
            '50': '#d2e9f7',
            '100': '#92caeb',
            '200': '#63b3e2',
            '300': '#2895d6',
            '400': '#2383bc',
            '500': '#1e71a2',
            '600': '#195f88',
            '700': '#144d6e',
            '800': '#103b55',
            '900': '#0b293b',
            'A100': '#d2e9f7',
            'A200': '#92caeb',
            'A400': '#2383bc',
            'A700': '#144d6e'
        });
        $mdThemingProvider.definePalette('remnants-light-green', {
            '50': '#dafaea',
            '100': '#97f1c3',
            '200': '#65eaa7',
            '300': '#26e282',
            '400': '#1cce73',
            '500': '#18b364',
            '600': '#149855',
            '700': '#117d46',
            '800': '#0d6237',
            '900': '#0a4728',
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
    materialConfig.$inject = ['$mdThemingProvider'];
})();

(function () {
    'use strict';
    angular.module('app.page').config(pageRoute);
    function pageRoute($stateProvider) {
        $stateProvider
            .state('app.page', {
            url: '/page',
            templateUrl: 'views/page/index.html'
        })
            .state('app.page.slack', {
            url: '/slack',
            templateUrl: 'views/page/slack.html',
            controller: 'PageSlackController',
            controllerAs: 'page'
        });
    }
    pageRoute.$inject = ['$stateProvider'];
})();

(function () {
    'use strict';
    angular.module('app.page').controller('PageSlackController', pageSlackController);
    function pageSlackController(socket) {
        var vm = this;
        vm.form = {
            email: 'testing@testing.com',
            password: 'testing'
        };
        vm.sendInvite = function () {
            socket.emit('slack::invite', vm.form);
        };
    }
    pageSlackController.$inject = ['socket'];
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
