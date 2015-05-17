var gulp = require('gulp');

var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');

var babel = require('gulp-babel');

var paths = {
  'javascripts': 'assets/javascripts/**/*.es6',
}


gulp.task('default', ['clean']);
gulp.task('build', ['build:javascripts']);

gulp.task('build:javascripts', ['clean:javascripts'], function(){
  return gulp.src(paths.javascripts)
    .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(uglify())
      .pipe(concat('application.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('clean', ['clean:javascripts', 'clean:stylesheets']);

gulp.task('clean:javascripts', function(cb){
  del(['public/javascripts/**/*.js'], cb);
});

gulp.task('clean:stylesheets', function(cb){
  del(['public/stylesheets/**/*.css'], cb);
});
