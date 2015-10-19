/**
 * To run the debug on Windows, first run the command `set DEBUG=gulpfile:*,-not_this`
 * After that, start the gulpfile as normal.
 * ===================================================================================
 * On *Nix run as `DEBUG='gulpfile:*' gulp serve`
 */

(function () {
  'use strict';

  var debug = require('debug')('gulpfile:main');
  var gulp  = require('gulp');
  var run   = require('run-sequence');
  var sync  = require('browser-sync');

  // ======================8<-------- cut here ---------------------------- //

  var source      = require('./gulp/source.js');
  var destination = require('./gulp/destination.js');
  var options     = require('./gulp/options.js');
  var task        = require('./gulp/task.js');

  // ======================8<-------- cut here ---------------------------- //

  gulp.task('html', ['html:index', 'html:files']);
  gulp.task('html:index', task.html.index);
  gulp.task('html:files', task.html.files);

  // ======================8<-------- cut here ---------------------------- //

  gulp.task('js', ['js:vendor', 'js:app']);
  gulp.task('js:app', task.js.app);
  gulp.task('js:vendor', task.js.vendor);

  // ======================8<-------- cut here ---------------------------- //

  gulp.task('style', task.css);

  // ======================8<-------- cut here ---------------------------- //

  gulp.task('default', run('html', [
    'js',
    'style'
  ]));

  // ======================8<-------- cut here ---------------------------- //

  gulp.task('serve', ['default'], function () {
    sync.init(null, {
      server: {
        baseDir: './dist',
        index  : 'index.html'
      }
    });

    gulp.watch(source.html.index, ['html:index', sync.reload]);
    gulp.watch(source.html.files, ['html:files', sync.reload]);

    gulp.watch(source.js.app, ['js:app']);
    gulp.watch(source.js.vendor, ['js:vendor']);

    gulp.watch(source.css.files, ['style']);
  });

  // ======================8<-------- cut here ---------------------------- //

  function handleError (error) {
    debug(error.toString());
    this.emit('end');
  }
})();
