var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var serve = require('gulp-serve');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var autoReload = require('gulp-auto-reload');

var paths = {
  scripts: ['src/js/**/*.js'],
  images: ['src/img/**/*'],
  html: ['src/**/*.html'],
  css: ['src/**/*.css', 'src/**/*.scss']
};


gulp.task('scripts', function(){
	return gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(concat('bundle.js'))
		.pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
		.pipe(gulp.dest('build/js'));

});

gulp.task('image', function(){
  return gulp.src(paths.images)
    .pipe(gulp.dest('build/img'));
});

gulp.task('html', function(){
	return gulp.src(paths.html)
		.pipe(gulp.dest('build'));
});


gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.css, ['sass']);
  gulp.watch(paths.images, ['image']);
});

gulp.task('serve', serve('build'));

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('sass', function () {
    gulp.src(paths.css)
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/style/'));
});




gulp.task('default', ['scripts', 'image', 'html', 'sass', 'watch', 'serve', 'browser-sync']);