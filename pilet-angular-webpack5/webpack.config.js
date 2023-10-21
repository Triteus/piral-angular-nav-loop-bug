const extendWebpack = require('piral-ng/extend-webpack');

module.exports = extendWebpack({
  ngOptions: {
    tsconfig: './tsconfig.app.json',
    jitMode: true,
  },
});