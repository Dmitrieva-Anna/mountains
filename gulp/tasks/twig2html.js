const gulp = require('gulp');
const twig = require('gulp-twig');

// компиляция TWIG
module.exports = function twig2html(cb) {
    return gulp.src('src/templatesTWIG/*.twig')
        .pipe(twig({
            data: {
                title: 'Gulp and Twig',
                benefits: [
                    'Fast',
                    'Flexible',
                    'Secure'
                ]
            }
        }))
        .pipe(gulp.dest('build'))
};
