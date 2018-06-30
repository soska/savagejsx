const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  webpack: config => {
    config.node = {
      fs: 'empty',
    };

    return config;
  },
});
