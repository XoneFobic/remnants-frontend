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
    'source/coffee/app.coffee'
  ];
  source.js.vendor = [
    'bower_components/angular/angular.js'
  ];

  module.exports = source;
})();
