(function () {
  'use strict';

  var source = {};

  source.css       = {};
  source.css.index = 'source/stylus/style.styl';
  source.css.files = 'source/stylus/**/*.styl';

  source.html       = {};
  source.html.index = 'source/jade/index.jade';
  source.html.files = 'source/jade/views/**/*.jade';

  source.js        = {};
  source.js.app    = [
    'source/typescript/app.ts',
    'source/typescript/**/*.module.ts',
    'source/typescript/**/*.*.ts',
    'tools/typings/**/*.ts'
  ];
  source.js.vendor = [
    'bower_components/angular/angular.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-aria/angular-aria.js',
    'bower_components/angular-material/angular-material.js',
    'bower_components/socket.io-client/socket.io.js',
    'bower_components/angular-socket-io/socket.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js'
  ];

  module.exports = source;
})();
