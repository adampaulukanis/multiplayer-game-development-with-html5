var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minify', function (done) {
  gulp.src('app.js')
  .pipe(uglify())
  .pipe(gulp.dest('build'))
  done();
});
