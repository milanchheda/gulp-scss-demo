var gulp = require('gulp'); // Gulp is always required
var watch = require('gulp-watch');
var scss = require('gulp-sass'); // Requires the gulp-sass plugin

gulp.task('default', function() {
    console.log("Yay! it's working.");
});

//Manual task to convert SCSS files to CSS files
gulp.task('scss', function() {
    gulp.src('scss/style.scss') // Gets the style.scss file
        .pipe(scss()) // Passes it through a gulp-sass task
        .pipe(gulp.dest('css')) // Outputs it in the css folder
});

gulp.task('watch', ['scss'], function() {
    gulp.watch('scss/style.scss', ['scss']);
    // ... Other watchers
});
