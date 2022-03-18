const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

// работа со скриптами
module.exports = function script() {
    return gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build/js'))
};
