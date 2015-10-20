(function () {
  'use strict';

  var $     = require('gulp-load-plugins')();
  var debug = require('debug')('gulpfile:js:vendor');
  var gulp  = require('gulp');
  var sync  = require('browser-sync');

  var destination = require('../../destination.js');
  var options     = require('../../options.js');
  var source      = require('../../source.js');

  module.exports = function () {
    return gulp.src(source.js.vendor)
      .pipe($.sourcemaps.init())
      //.pipe($.ngAnnotate(options.js.annotate)).on('error', handleError)
      .pipe($.concat(options.js.concat.vendor))
      .pipe($.uglify(options.js.uglify)).on('error', handleError)
      .pipe($.sourcemaps.write('./maps')).on('error', handleError)
      .pipe(gulp.dest(destination.js))
      .pipe(sync.stream());
  };

  // ======================8<-------- cut here ---------------------------- //

  function handleError (error) {
    debug(error.toString());
    this.emit('end');
  }
})();
