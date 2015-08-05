var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', ['styles', 'browserify-watch'], function () {
  browserSync({
    notify: false,
    port: 8080,
    server: {
      baseDir: ['./.tmp', './app']
    }
    
  });

  gulp.watch([
    './.tmp/**/*'
  ]).on('change', reload);

  gulp.watch('./app/styles/**/*.scss', ['styles']);
  gulp.watch('./app/**/*.js', ['lint-client']);
  gulp.watch('./test/**/*.js', ['lint-test']);
});