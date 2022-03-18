const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');

// компиляция PUG
module.exports = function pug2html(cb) {
    return gulp.src('src/templates/*.pug')
        .pipe(plumber())
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('build'))
};
