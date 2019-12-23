const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

function scss() {
    return src('./src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./'))
        .pipe(dest('./dist/css'));
}

function html() {
    return src('./src/pug/index.pug')
        .pipe(pug())
        .pipe(dest('./dist'));
}

watch(['./src/**/*.scss', './src/pug/*.pug'], function () {
    scss();
    pug();
});

exports.scss = scss;
exports.html = html;
exports.default = parallel(scss, html);
exports.watch = watch;