var moduleName = 'typist';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('clean', function (cb) {
  del([
      'dist'
  ], cb);
});

gulp.task('bower', function() {

  var install = require('gulp-install');

  return gulp.src(['./bower.json'])
        .pipe(install());
});

gulp.task('build-template-cache', ['clean'], function() {
  var ngHtml2Js = require('gulp-ng-html2js');
  
  return gulp.src('./partials/*.html')
    .pipe(ngHtml2Js({
        moduleName: 'todoPartials',
        prefix: '/partials/'
    }))
    .pipe(concat('templateCachePartials.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('jshint', function() {
  gulp.src('/src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('concat', function() {
  return gulp.src([
  		'node_modules/malarkey/dist/malarkey.js',
	  	'src/*.js'
  	])
  	.pipe(concat('app.js'))
  	.pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));	
});
 
gulp.task('compress', ['concat'], function() {
  return gulp.src('dist/app.js')
    .pipe(uglify({
    	mangle: false
    }))
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('dist'));	
});

gulp.task('build', [ 'clean', 
	// 'bower',
	// 'build-template-cache',
	'jshint', 
	'concat',
	'compress'
	], 
	function() {
	  return gulp.src('index.html')
	    .pipe(cachebust.references())
	    .pipe(gulp.dest('dist'));
});

// gulp.task('watch', function() {
//   return gulp.watch(['./index.html','./partials/*.html', './styles/*.*css', './js/**/*.js'], ['build']);
// });	

// gulp.task('webserver', ['watch','build'], function() {
//   gulp.src('.')
//     .pipe(webserver({
//       livereload: false,
//       directoryListing: true,
//       open: 'http://localhost:8000/dist/index.html'
//     }));
// });

// gulp.task('dev', ['watch', 'webserver']);
