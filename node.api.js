const Dotenv = require('dotenv-webpack');

module.exports = function(config) {
  return Object.assign(config, {
    webpack: function(webpackConfig) {
      return Object.assign(webpackConfig, {
        plugins: webpackConfig.plugins.concat(['dotenv-webpack']),
      });
    }
  });
};
