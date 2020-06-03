const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;

gulp.task('default', () => {
  return gulp
    .src('dist/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
