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
        // options: {
        //   pretty: true,
        // },

        // test: /\.pug$/,
        // loader: 'pug-loader',
        // options: {
        //   pretty: true,
        // },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   title: 'Hot Module Replacement',
    // }),
    // new HtmlWebpackPlugin({
    //   template: './full.pug',
    // }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: `./src/pug/full.pug`,
      filename: 'index.html',
      inject: true,
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
