import gulp from 'gulp';
import ios from 'gulp-cordova-build-ios';
import config from './../config';

gulp.task('build:ios', ['build:cordova'], () => {
  return gulp.src(config.cordova.dir)
        .pipe(ios(true));
});
