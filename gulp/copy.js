'use strict';

module.exports = (gulp, plugins, config) => () => {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.output.images));
  gulp.src(config.paths.fonts)
    .pipe(gulp.dest(config.output.fonts));
  gulp.src(config.paths.json)
    .pipe(gulp.dest(config.output.dist));
  return gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist));
};
