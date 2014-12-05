var gulp = require('gulp');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');

gulp.task('watch', ['build'], function(callback) {
    gulp.watch('./client/stylus/*.styl', ['stylus']);

    gutil.log('Watching completed!');
    callback();
});
