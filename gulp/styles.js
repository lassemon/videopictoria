var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifycss = require('gulp-csso');

gulp.task('styles', function() {
    return gulp.src('./styles/index.scss')
	.pipe(sass({
		outputStyle: 'nested',
		includePaths: ['.'],
		onError: console.error.bind(console, 'Sass error:')
	}))
	.pipe(autoprefixer('last 2 version', 'safari >= 5', 'ie >= 9', 'chrome >= 36', 'opera >= 12.1', 'ios >= 6', 'android >= 4'))
    .pipe(rename('bundle.css'))
	.pipe(gulp.dest('./.tmp/'))
});


gulp.task('styles-dist', function() {
    return gulp.src('./app/styles/main.scss')
	.pipe(sass({
		outputStyle: 'nested',
		includePaths: ['.'],
		onError: console.error.bind(console, 'Sass error:')
	}))
	.pipe(autoprefixer('last 2 version', 'safari >= 5', 'ie >= 9', 'chrome >= 36', 'opera >= 12.1', 'ios >= 6', 'android >= 4'))
    .pipe(rename('bundle.css'))
    .pipe(minifycss())
	.pipe(gulp.dest('./dist/styles'))
});