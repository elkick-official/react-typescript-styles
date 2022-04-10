const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    fallback: {
      fs: false,
      net: false,
      util: false,
      tty: require.resolve('tty-browserify'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  // externals: {
  //   react: 'commonjs react',
  //   'react-dom': 'commonjs react-dom',
  // },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
    // libraryTarget: 'commonjs2',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
    new FaviconsWebpackPlugin({
      logo: './public/logo192.png',
    }),
  ],
}
