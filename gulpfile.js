var gulp = require('gulp');

var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');

var babel = require('gulp-babel');
var sass = require('gulp-sass');

var paths = {
  'javascripts': 'assets/javascripts/**/*.es6',
  'stylesheets': 'assets/stylesheets/**/*.scss',
}

gulp.task('default', ['build', 'watch']);
gulp.task('clean', ['clean:javascripts', 'clean:stylesheets']);
gulp.task('build', ['build:javascripts', 'build:stylesheets']);
gulp.task('watch', ['watch:javascripts', 'watch:stylesheets']);

gulp.task('build:javascripts', ['clean:javascripts'], function(){
  return gulp.src(paths.javascripts)
    .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(uglify())
      .pipe(concat('application.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('build:stylesheets', ['clean:stylesheets'], function () {
  return gulp.src(paths.stylesheets)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('application.css'))
  .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('clean:javascripts', function(cb){
  del(['public/javascripts/**/*.js'], cb);
});

gulp.task('clean:stylesheets', function(cb){
  del(['public/stylesheets/**/*.css'], cb);
});

gulp.task('watch:javascripts', function(){
  gulp.watch(paths.javascripts, ['build:javascripts']);
});

gulp.task('watch:stylesheets', function() {
  gulp.watch(paths.stylesheets, ['build:stylesheets']);
});
