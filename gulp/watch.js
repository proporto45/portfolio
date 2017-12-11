'use strict';

module.exports = (gulp, plugins, config) => () => {
  gulp.watch(config.paths.sassComp, gulp.series('build-scss'));
  gulp.watch(config.paths.js, gulp.series('build-js'));
  gulp.watch(config.paths.html, gulp.series('copy'));
  gulp.watch(config.paths.images, gulp.series('copy'));
};
