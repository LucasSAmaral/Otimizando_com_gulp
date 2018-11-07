var gulp = require('gulp');
var customizeBootstrap = require('gulp-customize-bootstrap');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('default',['compileBootstrap','lib']);

gulp.task('compileBootstrap', function() {
    return gulp.src('./node_modules/bootstrap/less/bootstrap.less')
      .pipe(customizeBootstrap('./dev/styles/less/*.less'))
      .pipe(less())
      .pipe(gulp.dest('./dist/css/'));
});

gulp.task('lib', function(){
    return gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('./dist/js/'));
});