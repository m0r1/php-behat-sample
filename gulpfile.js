var gulp = require('gulp');
var notify = require('gulp-notify');
var watch = require('gulp-watch');
var run = require('gulp-run');
var behat = require('gulp-behat');

var phpFiles = [
    './web/**/*.php',
    './src/**/*.php'
];

gulp.task('behat', function() {
    var options = {
        notify: true,
        configFile: './tests/behat.yml',
        lang: 'ja'
    };
    var errorNotifications = {
        title: "Failed...",
        message: "Error(s) occurred during testing..."
    };
    var successNotifications = {
        title: "Success!!",
        message: "All tests are passed!!"
    };

    gulp.src(phpFiles)
        .pipe(behat('./vendor/bin/behat', options))
        .on('error', notify.onError(errorNotifications))
        .pipe(notify(successNotifications))
    ;
});

gulp.task('watch', function() {
    gulp.src(phpFiles)
        .pipe(watch(phpFiles, function(files, cb) {
            gulp.start('behat', cb);
        }));
});


gulp.task('server', ['watch'], function() {
    run('php -S localhost:9000 -t ./web').exec();
});

gulp.task('default', [
    'server'
]);
