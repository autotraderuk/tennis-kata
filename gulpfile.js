var gulp = require('gulp'),
    Server = require('karma').Server,
    less = require('gulp-less'),
    path = require('path'),
    inject = require('gulp-inject'),
    injectString = require('gulp-inject-string'),
    del = require('del'),
    runSequence = require('run-sequence'),
    concat = require('gulp-concat'),
    html2js = require("gulp-ng-html2js"),
    livereload = require('gulp-livereload');

var versionNumber = 'v1.0',
    profile = 'build';

gulp.task('default', ['watch']);

gulp.task('build', function(callback) {
    runSequence('clean', 'copy-files', 'less', 'index','test', callback);
});

gulp.task('clean', function() {
    return del([profile]);
});

/*--- js ----*/

var vendorFiles = [
  'vendor/**/angular.js',
  'vendor/**/ui-bootstrap-tpls.min.js',
  'vendor/**/angular-placeholders-0.0.1-SNAPSHOT.min.js',
  'vendor/**/release/angular-ui-router.js',
  'vendor/**/angular-mocks.js'
];

gulp.task('test', function (done) {

    var testFiles = vendorFiles.concat([
        'build/templates-app.js',
        'build/app/**/*.js',
        'src/**/*.spec.js'
    ]);

    new Server({
        configFile: __dirname + '/karma.conf.js',
        files:testFiles,
        singleRun: true
    }, done).start();
});

gulp.task('watch', ['build'], function(callback) {
    livereload.listen();
    gulp.watch('src/**/*.js', function(){
        runSequence('copy-js-files', 'test');
    });
    gulp.watch('src/**/*.less', ['less']);
    gulp.watch('src/index.html', function(){
        runSequence('copy-index', 'index');
    });
    gulp.watch('src/**/*.tpl.html', ['html2js']);
});

gulp.task('copy-js-files', function(){
    return gulp.src(['src/**/*.js', '!src/**/*.spec.js']).pipe(gulp.dest(profile+'/'));
});

/*-- html --*/

gulp.task('less', function () {
    return gulp.src('src/less/main.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest(profile+'/assets'))
        .pipe(livereload());
});

gulp.task('copy-files', ['copy-index', 'copy-js-files', 'copy-vendor-files', 'html2js']);

gulp.task('copy-index', function(){
    return gulp.src(['src/index.html']).pipe(gulp.dest(profile+'/'));
});

gulp.task('copy-vendor-files', function(){
    return gulp.src(vendorFiles).pipe(gulp.dest(profile+'/vendor'));
});

gulp.task('html2js', function(){
    gulp.src("src/app/**/*.tpl.html")
        .pipe(html2js({
            moduleName: "templates-app",
            prefix: ""
        }))
        .pipe(concat("templates-app.js"))
        .pipe(gulp.dest("./"+profile))
        .pipe(livereload());
});

gulp.task('index', function () {

    var vendorScriptPaths = [];
    for (var i = 0; i < vendorFiles.length; i++) {
        vendorScriptPaths.push(profile+'/'+vendorFiles[i]);
    }

    var scriptPaths = vendorScriptPaths.concat([
        profile+'/app/**/*.js',
        './'+profile+'/assets/main.css'
    ]);

    var sources = gulp.src(scriptPaths, {read: false});

    return gulp.src(profile+'/index.html')
        .pipe(inject(sources, {relative: true}))
        .pipe(injectString.replace('%%VERSION_NUMBER%%', versionNumber))
        .pipe(gulp.dest(profile))
        .pipe(livereload());
});