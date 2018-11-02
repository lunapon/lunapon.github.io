var gulp = require('gulp');
var replace = require('gulp-replace');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass(
      {
        outputStyle: 'compressed'
      })
    .on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: true,
        remove:true
    }))
    .pipe(replace(/}/g, '}\n'))
    .pipe(replace(/\);@/g, ');\n@'))
    .pipe(replace(/\);#/g, ');\n#'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});