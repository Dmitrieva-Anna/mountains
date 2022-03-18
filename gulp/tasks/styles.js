const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// копиляция Sass
module.exports = function styles() {
    return gulp.src('src/styles/*.sass')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build/css'))
};
