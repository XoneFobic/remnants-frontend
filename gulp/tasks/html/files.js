(function () {
  'use strict';

  var $     = require('gulp-load-plugins')();
  var debug = require('debug')('gulpfile:html:views');
  var gulp  = require('gulp');

  var destination = require('../../destination.js');
  var source      = require('../../source.js');

  module.exports = function () {
    return gulp.src(source.html.files)
      .pipe($.jade()).on('error', handleError)
      .pipe(gulp.dest(destination.html.files));
  };

  // ======================8<-------- cut here ---------------------------- //

  function handleError (error) {
    debug(error.toString());
    this.emit('end');
  }
})();
