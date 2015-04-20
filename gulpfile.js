var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    angularTemplates = require('gulp-angular-templates'),
    del = require('del');

gulp.task('sass', function() {
    return sass('static/sass/main.sass', { style: 'expanded' })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('static/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('static/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('bork', function() {
    gulp.src(['static/js/app.js'])
        .pipe(ngAnnotate())
        .pipe(gulp.dest('static/client/js'))
        .pipe(rename({ extname: ".min.js" }))
});

gulp.task('combine', function() { 
    gulp.src(['./static/js/app.js', 'static/js/test.js'])
        .pipe(ngAnnotate())
        .pipe(concat('out'))
        .pipe(uglify())
        .pipe(rename({ extname: ".min.js" }))
        .pipe(gulp.dest('static/js/dist'))
        .pipe(notify('Uglified JavaScript'))
});

gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});

gulp.task('html', function () {
    return gulp.src('static/partials/*.html')
        .pipe(angularTemplates({module: 'Confable'}))
        .pipe(gulp.dest('./build'));
});

gulp.task('default', ['clean'], function() {
    gulp.start('sass', 'combine');
});
