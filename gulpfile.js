/**
 * Created by jk on 2016/8/22 0022.
 */

var paths = {
    scss: './assets/sass/*.scss',
    css: './assets/css/'
};

var gulp = require('gulp')
    compass = require('gulp-compass');

gulp.task('css',function () {
    gulp.src(paths.scss)
        .pipe(compass({
            css: paths.css,
            sass: './assets/sass/'
        }))
        .pipe(gulp.dest(paths.css));
});

gulp.task('watch',function () {
    gulp.watch(paths.scss,['css']);
});


gulp.task('default',['css','watch']);