const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  //   cache: false
  devServer: {
    port: 1999,
    hot: true,
    historyApiFallback: true,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      // "Cache-Control": "no-store",
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_TYPE': JSON.stringify('development'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
