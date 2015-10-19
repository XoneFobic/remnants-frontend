(function () {
  'use strict';

  var task = {};

  task.css = require('./tasks/css/css.js');

  task.html = {
    index: require('./tasks/html/index.js'),
    files: require('./tasks/html/files.js')
  };

  task.js = {
    app   : require('./tasks/js/app.js'),
    vendor: require('./tasks/js/vendor.js')
  };

  module.exports = task;
})();
