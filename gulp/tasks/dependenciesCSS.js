const gulp = require('gulp');

// список зависимостей и сторонних библиотек, которые надо перенести при сборке
const dependenciesPathsCss = [
    'src/lib/css/**/*.css',
];

//проброс CSS библиотек
module.exports = function dependenciesCss() {
    return gulp.src(dependenciesPathsCss)
        .pipe(gulp.dest('build/dependencies/css'))
}
