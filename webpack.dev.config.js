const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  optimization: {
    // noEmitOnErrors: true,
    splitChunks: {
      // из каких файлов выносить общий код
      chunks: 'all',
      minSize: 30,
      // минимальное количество файлов
      // с одинаковым кодом
      minChunks: 2,
      name: 'common',
    },
  },
  watch: true,
  // точки входа
  entry: {
    main: './js/main/index.js',
    thankyou: './js/thankyou/index.js',
    common: './js/common.js',
  },

  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'js/[name]/index.js',
    // интернет-путь
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: [path.resolve(__dirname, 'src/')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer({})],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer({})],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true},
          },
        ],
      },
      {
        test: /\.pug$/i,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|ttf|otf|svg|xml)$/i,
        exclude: /(android-chrome-192x192.png)|(android-chrome-512x512.png)/i,
        loader: 'file-loader',
        options: {
          name() {
            return '[path][name].[contenthash:6].[ext]';
          },
        },
      },
      {
        test: /(android-chrome-192x192.png)|(android-chrome-512x512.png)/i,
        loader: 'file-loader',
        options: {
          name() {
            return '[path][name].[ext]';
          },
        },
      },
      {
        test: /\.json$/,
        loader: 'file-loader',
        type: 'javascript/auto',
        options: {
          name() {
            return '[path][name].[contenthash:6].[ext]';
          },
        },
      },
      {
        test: /\.html$/,
        include: [path.resolve(__dirname, 'src/')],
        use: ['html-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]/style.css',
    }),
    new CleanWebpackPlugin(),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.resolve(__dirname, 'dev/js'),
      prettyPrint: true,
      processOutput(assets) {
        console.log('************************');
        console.log(assets);
        console.log('************************');
        return `window.staticMap = ${JSON.stringify(assets)}`;
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['common', 'main'],
      template: './pug/main/index.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'thankyou.html',
      chunks: ['common', 'thankyou'],
      template: './pug/thankyou/index.pug',
    }),
  ],
};
