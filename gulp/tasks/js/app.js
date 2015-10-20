(function () {
  'use strict';

  var $     = require('gulp-load-plugins')();
  var debug = require('debug')('gulpfile:js:app');
  var gulp  = require('gulp');
  var sync  = require('browser-sync');

  var tscProject = $.typescript.createProject('tsconfig.json');

  var destination = require('../../destination.js');
  var options     = require('../../options.js');
  var source      = require('../../source.js');

  module.exports = function () {
    return gulp.src(source.js.app)
      .pipe($.sourcemaps.init())
      .pipe($.typescript(tscProject)).on('error', handleError)
      .pipe($.ngAnnotate(options.js.annotate)).on('error', handleError)
      .pipe($.concat(options.js.concat.app))
      //.pipe($.uglify({mangle: false})).on('error', handleError)
      .pipe($.sourcemaps.write('./maps')).on('error', handleError)
      .pipe(gulp.dest(destination.js))
      .pipe(sync.stream());
  };

  // ======================8<-------- cut here ---------------------------- //

  function handleError (error) {
    console.error(error.toString());
    this.emit('end');
  }
})();
