import gulp from 'gulp';
import mocha from 'gulp-mocha';

gulp.task('test', ['lint'], () => {
  gulp.src('./src/**/*.test.js')
    .pipe(mocha({
      compilers: 'js:babel/register',
    }));
});
