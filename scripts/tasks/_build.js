import gulp from 'gulp';
import gutil from 'gulp-util';
import create from 'gulp-cordova-create';
import config from './../config';
import webpack from 'webpack';
import webpackConfig from './../webpack.config.js';
import runSequence from 'run-sequence';

gulp.task('build', ['clean'], (callback) => {
  const webpackProdConfig = webpackConfig(false);

  webpack(webpackProdConfig).run((err, stats) => {
    if (err) throw new gutil.PluginError('webpack:build', err);
    gutil.log('[webpack:build]', stats.toString({
      colors: true,
    }));
    callback();
  });
});

gulp.task('build:cordova:replaceConfigFile', () => {
  return gulp.src(config.cordova.configFile).pipe(gulp.dest(config.cordova.dir));
});

gulp.task('build:cordova:createProject', () => {
  return gulp.src('./www')
        .pipe(create());
});

gulp.task('build:cordova', (done) => {
  runSequence('build', 'clean:cordova', 'build:cordova:createProject', 'build:cordova:replaceConfigFile', () => {
    done();
  });
});
