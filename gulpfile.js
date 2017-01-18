'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var headJs = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js'
];

var headAutoCompleteWidgetJs = [
    'bower_components/jquery-ui/**/widgets/autocomplete.js',
    'bower_components/jquery-ui/**/widgets/menu.js',
    'bower_components/jquery-ui/**/widget.js',
    'bower_components/jquery-ui/**/menu.js',
    'bower_components/jquery-ui/**/keycode.js',
    'bower_components/jquery-ui/**/position.js',
    'bower_components/jquery-ui/**/safe-active-element.js',
    'bower_components/jquery-ui/**/version.js',
    'bower_components/jquery-ui/**/unique-id.js'
];

var footerJs = [
    'src/AppBundle/Resources/public/js/*'
];

var css= [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/jquery-ui/themes/base/*',
    'src/AppBundle/Resources/public/css/bootstrap-takeacup-theme.css',
    'src/AppBundle/Resources/public/css/main.css',
    'src/AppBundle/Resources/public/css/auctions.css',
    'src/AppBundle/Resources/public/css/settings.css',
    'src/AppBundle/Resources/public/css/vin.css'
];

var images = [
    'src/AppBundle/Resources/public/images/*'
];

var favicons = [
    'src/AppBundle/Resources/public/favicons/*'
];

var fonts = [
    'bower_components/bootstrap/dist/fonts/*'
];

gulp.task('headJs', function() {
    return gulp.src(headJs)
        .pipe(gulp.dest('web/js'));
});

gulp.task('headAutoCompleteWidgetJs', function() {
    return gulp.src(headAutoCompleteWidgetJs)
        .pipe(uglify())
        .pipe(gulp.dest('web/js' ));
});

gulp.task('footerJs', function() {
    return gulp.src(footerJs)
        .pipe(uglify())
        .pipe(concat('takeacup.min.js'))
        .pipe(gulp.dest('web/js'));
});

gulp.task('css', function() {
    return gulp.src(css)
        .pipe(sourcemaps.init({
            loadMaps: true // for existing maps (e.g. bootstrap)
        }))
        .pipe(cssnano())
        .pipe(concat('takeacup.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('web/css'));
});

gulp.task('images', function() {
    return gulp.src(images)
        .pipe(gulp.dest('web/images'));
});

gulp.task('favicons', function() {
    return gulp.src(favicons)
        .pipe(gulp.dest('web/favicons'));
});

gulp.task('fonts', function() {
    return gulp.src(fonts)
        .pipe(gulp.dest('web/fonts'));
});

gulp.task('default', ['headJs', 'footerJs', 'css', 'images', 'favicons', 'fonts', 'headAutoCompleteWidgetJs'], function() {
});

gulp.task('watch', function() {
    gulp.watch('src/AppBundle/Resources/public/css/*', ['css']);
    gulp.watch('src/AppBundle/Resources/public/js/*', ['headJs', 'footerJs']);
    gulp.watch('src/AppBundle/Resources/public/images/*', ['images', 'favicons']);
});
