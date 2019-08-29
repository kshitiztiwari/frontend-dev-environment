// ./gulp/tasks/css,js
'use strict';

// Tasks
// 'gulp dist:css' : main css task
// 
//  Plugins: 
// gulp-cssnano: 	$.cssnano
// gulp-strip-css-comments : $.stripCssComments
// gulp-css-beautify: $.cssBeautify
// gulp-rename: $.rename
// 

var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');

module.exports = function(gulp, $, path, config) {
	gulp.task( 'dist:css', function(){
		var plugins = [
			autoprefixer(),
			cssnano()
		];

		return gulp.src(path.sass.build.dev + '/*.css')

			.pipe($.plumber({
				errorHandler : config.error
			}))
			
			.pipe($.sass(
				config.sass.options
			))

			// .pipe( $.autoprefixer( config.autoprefixer ))

            // Minify CSS
			.pipe($.postcss(plugins))

			.pipe(gulp.dest(path.sass.build.dist))
	})
}