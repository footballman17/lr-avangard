const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const conf = {
  // точка входа
  entry: './src/index.js',
  // итоговое название файла
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  // показываем ошибку на экране
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          // process.env.NODE_ENV !== 'production'
          //   ? 'style-loader'
          // : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

module.exports = (env, options) => {
  const production = options.mode === 'production';
  conf.devtool = production
    ? 'source-map' // карта, вынесенная в отдельный файл
    : 'eval-sourcemap'; // карта встроенная в основной файл
  return conf;
};
