const path = require('path');

module.exports = {
  extends: path.resolve(__dirname, './webpack.common.js'),
  mode: 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
};
