var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('compile', function () {
    gulp.src('./normalize.styl')
        .pipe(stylus({}))
        .on('error', function(err){ console.log(err.message); })
        .pipe(gulp.dest('./'));
});