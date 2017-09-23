(function(){
  'use strict';

  const gulp = require('gulp'),
        babel = require('gulp-babel'),
        foreach = require('gulp-foreach'),
        clean = require('gulp-clean-dest'),
        wct = require('web-component-tester').test;

  gulp.task('es6to5', () => {
    gulp.src(["Blue-Components/**/**.ts"], {base: '.'})
        .pipe(clean('dist', {extension: '.js'}))
        .pipe(foreach(function(stream, file){
          return stream
                    .pipe(babel({
                      babelrc: false,
                      presets: ['es2015', 'stage-0']
                    }));
        }))
        .pipe(gulp.dest("dist"));
  });

  gulp.task('wct:test', ['es6to5'], () => {
    gulp.src(['dist/**'], wct({
          "plugins": {
            "local": {
              "browsers": ["chrome", "firefox"]
            },
            "sauce": false
          }
        }));
  });
})();
