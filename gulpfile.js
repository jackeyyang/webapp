/**
 * Created by jk on 2016/8/22 0022.
 */

var gulp = require('gulp')
    compass = require('gulp-compass');

gulp.task('css',function () {
    gulp.src('./assets/sass/*.scss')
        .pipe(compass({
            css: './assets/css/',
            sass: './assets/sass/'
        }))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('default',['css']);