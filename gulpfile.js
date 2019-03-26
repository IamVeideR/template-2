'use strict';
 
global.$ = {
    gulp: require('gulp'),
    gp: require ('gulp-load-plugins')(),
    bs: require ('browser-sync').create(),
    path: {
        tasks: require('./template-2/config/tasks.js')
    }
}; 

$.path.tasks.forEach(function (taskPath) {
    require(taskPath) ();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug','sass','scripts:lib','scripts')
    // ,
    // $.gulp.parallel('watch','serve')
)); 
