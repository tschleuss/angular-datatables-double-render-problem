var gulp = require('gulp');
var expressServer = require('./server.js');

gulp.task('server', function() {
    expressServer.start();
});
