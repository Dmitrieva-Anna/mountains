const gulp = require('gulp');

// компиляция HTML
module.exports = function html2html(cb) {
    return gulp.src('src/templatesHTML/*.html')
        .pipe(gulp.dest('build'))
};
