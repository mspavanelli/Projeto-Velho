var gulp = require('gulp')
	,sync = require('browser-sync')
	,sass = require('gulp-sass')
	,less = require('gulp-less')
	,concat = require('gulp-concat')
;

gulp.task('server', function() {
	sync({
		browser: "google chrome",
		logPrefix: 'Gulp',
		server: {
			baseDir: ''
		}
	});

	gulp.watch(['index.html', 'css/*.css']).on('change', sync.reload);
	
	gulp.watch('less/creative.less').on('change', function(event) {
		gulp.src(event.path)
			.pipe(less()).on('error', function(err) {console.log(err)})
			.pipe(concat('creative.css'))
			.pipe(gulp.dest('css/'));
	});

});

gulp.task('default', ['server']);