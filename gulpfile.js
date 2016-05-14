var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('default2', ['lint', 'sassify', 'watch']);
gulp.task('default', ['sassify', 'watch']);

gulp.task('watch', function() {
  gulp.watch('./javascripts/**/*.js', ['lint']);
  gulp.watch('./sass/**/*.scss', ['sassify']);
});


gulp.task('lint', function() {
  return gulp.src(['./javascripts/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sassify', function () {
  return gulp.src(['./sass/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});