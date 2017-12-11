'use strict';

const bs = require('browser-sync');

module.exports = (gulp, plugins, config) => () => {
  bs.init({ server: config.paths.dist });
  bs.watch(`${config.paths.dist}/**/*.*`).on('change', bs.reload);
};
