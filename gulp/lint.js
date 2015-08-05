var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint-client', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});