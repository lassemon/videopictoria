var gulp = require('gulp');

var jsPaths = [
	'./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
	'./node_modules/modernizr-prebuilt/dist/modernizr-build.min.js',
	'./node_modules/waypoints/lib/jquery.waypoints.min.js',
	'./js/**/*.js'
];

gulp.task('js', function(){
	return gulp.src(jsPaths)
  	.pipe(gulp.dest('./.tmp/js'))
});
