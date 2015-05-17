var gulp = require('gulp');

var del = require('del');


gulp.task('default', ['clean']);

gulp.task('clean', ['clean:javascripts', 'clean:stylesheets']);

gulp.task('clean:javascripts', function(cb){
  del(['public/javascripts/**/*.js'], cb);
});

gulp.task('clean:stylesheets', function(cb){
  del(['public/stylesheets/**/*.css'], cb);
});
