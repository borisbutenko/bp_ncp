var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    pug   = require('gulp-pug'),
    changed = require('gulp-changed'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-clean-css'),
    ignore = require('gulp-ignore'),
    debug = require('gulp-debug');

function printError(error) {
    console.log(error.toString());
}

gulp.task('mainCss', function () {
    return gulp.src(['src/assets/css/main.scss'])
        .pipe(sass({outputStyle: 'expanded', indentWidth: 4}))
        .on('error', printError)
        // .pipe(ignore.exclude('mixins.css'))
        // .pipe(ignore.exclude('main.css'))
        // .pipe(minifyCss())
        // .pipe(concat('main.css'))
        .pipe(rename({ egulpxtname: '.min.css' }))
        .pipe(gulp.dest('build/assets/css'));
});

gulp.task('mainJs', function(){
    return gulp.src(['src/assets/js/**/*.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'));
});

gulp.task('mainHtml', function() {
    return gulp.src('src/assets/pug/*[^_].pug')

    .pipe(rename({ egulpxtname: '.html' }))

    //process jade templates
    .pipe(pug())

    //save all the files
    .pipe(gulp.dest('build/assets/templates/'));
});

gulp.task('fonts', function(){
    gulp.src('src/assets/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
});

gulp.task('img', function() {
    gulp.src('src/assets/img/**/*.*')
        .pipe(debug())
        .pipe(gulp.dest('build/assets/img'))
});

gulp.task('watch', function() {
    gulp.watch('src/assets/css/**/*.scss', function(event) {
        gulp.run('mainCss');
    });

    gulp.watch('src/assets/js/**/*.js', function(event) {
        gulp.run('mainJs');
    });

    gulp.watch('src/assets/pug/**/*.pug', function(event) {
        gulp.run('mainHtml');
    });

    gulp.watch('src/assets/fonts/**/*.*', function(event) {
        gulp.run('fonts');
    });

    gulp.watch('src/assets/img/**/*.*', function(event) {
        gulp.run('img');
    });
});

gulp.task('default', function() {
    gulp.run('watch');
});