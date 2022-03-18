const gulp = require('gulp');

// список зависимостей и сторонних библиотек, которые надо перенести при сборке
const dependenciesPathsJS = [
    'src/lib/js/**/*.js'
];

//проброс JS библиотек
module.exports = function dependenciesJS() {
    return gulp.src(dependenciesPathsJS)
        .pipe(gulp.dest('build/dependencies/js'))
}
