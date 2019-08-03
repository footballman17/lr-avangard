const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const conf = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loaders: ['html-loader', 'pug-html-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          // process.env.NODE_ENV !== 'production'
          //   ? 'style-loader'
          // : MiniCssExtractPlugin.loader,
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Hot Module Replacement',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = (env, options) => {
  const production = options.mode === 'production';
  conf.devtool = production
    ? 'source-map' // карта, вынесенная в отдельный файл
    : 'eval-sourcemap'; // карта встроенная в основной файл
  return conf;
};
