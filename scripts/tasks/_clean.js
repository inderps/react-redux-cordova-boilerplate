import gulp from 'gulp';
import del from 'del';

gulp.task('clean', () => {
  del.sync(['./www/**', '!./www', '!./www/index.html']);
});

gulp.task('clean:cordova', () => {
  del.sync(['./.cordova']);
});
