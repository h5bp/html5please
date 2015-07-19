'use strict';

var fs = require('fs');

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

$.del = require('del');
$.open = require('open');
$.execSync = require('sync-exec');

gulp.task('build', ['render', 'styles'], function() {
  $.del.sync('build');

  var assets = $.useref.assets();
  gulp.src('src/index.html')
    .pipe(assets)
    .pipe($.if('*.css', $.minifyCss()))
    .pipe($.if('*.js', $.uglify()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(gulp.dest('build/'))
    .on('end', function() {
      // inline all the styles
      var file = fs.readFileSync('build/index.html').toString();
      file = file.replace(/<link.+href="(.+\.css)">/gm, function(m, file) {
        return '<style>' + fs.readFileSync('build/' + file) + '/*# sourceMappingURL=style.css.map */</style>';
      });
      fs.writeFileSync('build/index.html', file, 'utf8');
    });

  // copy all the necessary files
  gulp.src([
    'src/404.html',
    'src/favicon.ico',
    'src/apple-touch-icon.png',
    'src/CNAME'
  ], { dot:true }).pipe(gulp.dest('build/'));

  gulp.src('src/css/style.css.map').pipe(gulp.dest('build/css'));
  gulp.src('src/img/*').pipe(gulp.dest('build/img'));
});

gulp.task('watch', function() {
  gulp.watch(['src/js/*.js', 'gulpfile.js', './lib/*.js', 'new_feature.js'], ['reload:js', 'lint:js']);
  gulp.watch(['src/template.html', 'posts/*.md'], ['render']);
  gulp.watch('src/sass/*', ['styles']);
});

gulp.task('styles', function() {
  $.execSync('compass compile .');
});

gulp.task('serve', ['render', 'styles'], function() {
  $.connect.server({ root: 'src', livereload: true });
  $.open('http://localhost:8080');
});

gulp.task('new', function() {
  require('./new_feature');

  if ($.connect.reload) {
    gulp.src('src/index.html')
      .pipe($.connect.reload());
  }
});

gulp.task('render', function() {
  require('./lib')('render');

  if ($.connect.reload) {
    gulp.src('src/index.html')
      .pipe($.connect.reload());
  }
});

gulp.task('checkurls', function() {
  require('./lib')('checkurls');
});

gulp.task('lint:js', function() {
  return gulp.src(['src/js/*.js', 'gulpfile.js', './lib/*.js', 'new_feature.js'])
    .pipe($.jscs('./.jscsrc'))
    .pipe($.jshint('./.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('reload:js', function() {
  if ($.connect.reload) {
    gulp.src('src/js/*.js')
      .pipe($.connect.reload());
  }
});

gulp.task('dev', [
  'styles',
  'render',
  'watch',
  'serve'
]);

gulp.task('default', ['dev']);
