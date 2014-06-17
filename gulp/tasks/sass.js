var gulp = require('gulp');
var sass = require('gulp-sass')

gulp.task('sass', function () {
    gulp.src('./client/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./client/public/css'));
});