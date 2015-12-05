import gulp from 'gulp';
import shell from 'gulp-shell';
import config from './../config';

gulp.task('build:android', ['build:cordova'], shell.task(
  ['./../node_modules/.bin/cordova platform add android',
  './../node_modules/.bin/cordova build android --release',
  'jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore YOU-KEYSTORE-FILE.keystore ./platforms/android/build/outputs/apk/android-release-unsigned.apk',
  'jarsigner -verify ./platforms/android/build/outputs/apk/android-release-unsigned.apk',
  'zipalign -v 4 ./platforms/android/build/outputs/apk/android-release-unsigned.apk ' + config.appName + '.apk'], {
    cwd: './.cordova',
  }));
