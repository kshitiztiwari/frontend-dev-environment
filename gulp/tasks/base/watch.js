'use strict';

module.exports = function(gulp, $, path, config) {

	var changeListener = function(path){
		// console.log( path + ' changed.')
        $.util.log( $.util.colors.yellow( path ) + ' changed.' );
	}

    gulp.task('watch', function() {
        
        var sass = $.watch( path.sass.src, config.watch, function(){
        	gulp.start('sass');
        });

        var template = $.watch( path.template.watch.pages,  config.watch, function(){
        	gulp.start('template');
        });

        var template_template = $.watch( path.template.watch.templates,  config.watch, function(){
            gulp.start('template:template');
        });       

        var js = $.watch( path.js.watch,  config.watch, function(){
        	gulp.start('webpack:js');
        });      
        
        var assets = $.watch( path.assets.watch, config.watch, function() {
            gulp.start( 'assets' );
        } );
    });  
};