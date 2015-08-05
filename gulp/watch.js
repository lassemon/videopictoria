var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('watch', ['build'], function () {

	gulp.watch([
    './.tmp/**/*'
  ]).on('change', reload);

  gulp.watch('./styles/*.scss', ['styles']);
  gulp.watch('./js/*.js', ['lint', 'js']);

});