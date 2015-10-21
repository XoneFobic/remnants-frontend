(function () {
  'use strict';

  var $     = require('gulp-load-plugins')();
  var debug = require('debug')('gulpfile:css');
  var gulp  = require('gulp');
  var sync  = require('browser-sync');

  var destination = require('../../destination.js');
  var options     = require('../../options.js');
  var source      = require('../../source.js');

  module.exports = function () {
    return gulp.src(source.css.index)
      .pipe($.sourcemaps.init())
      .pipe($.stylus({'include css': true})).on('error', handleError)
      .pipe($.sourcemaps.write('./maps'))
      .pipe(gulp.dest(destination.css))
      .pipe(sync.stream());
  };

  // ======================8<-------- cut here ---------------------------- //

  function handleError (error) {
    debug(error.toString());
    this.emit('end');
  }
})();
