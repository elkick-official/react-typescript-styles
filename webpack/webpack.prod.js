const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'production',
  // devtool: "source-map",
  // performance: {
  //   hints: false,
  //   maxEntrypointSize: 512000,
  //   maxAssetSize: 512000,
  // },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      compress: {
        // remove warnings
        warnings: false,
        // Drop console statements
        drop_console: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_TYPE': JSON.stringify('development'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
