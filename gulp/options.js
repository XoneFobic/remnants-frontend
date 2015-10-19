(function () {
  'use strict';

  var options = {};

  options.js          = {};
  options.js.annotate = {
    remove       : true,
    add          : true,
    single_quotes: true
  };
  options.js.concat   = {
    app   : 'app.js',
    vendor: 'vendor.js'
  };
  options.js.uglify   = {
    mangle: false
  };

  module.exports = options;
})();
