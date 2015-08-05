var gulp = require('gulp');


var jsPaths = [
'./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
'./js/*.js'
];

gulp.task('js', function(){
	return gulp.src(jsPaths)
  	.pipe(gulp.dest('./.tmp/js'))
});
