'use strict';

module.exports = (gulp, plugins, config) => () => {
  return gulp.src(config.paths.sass)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sassGlob())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({ browsers: ['> 5%'], cascade: false }))
		.pipe(plugins.minifyCss())
    .pipe(plugins.sourcemaps.write())
		.pipe(plugins.rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.output.css));
};
