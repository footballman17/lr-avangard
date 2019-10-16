const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

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
    publicPath: './',
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: [path.resolve(__dirname, 'source/')],
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
            options: { sourceMap: true },
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
        test: /\.(png|jpe?g|gif|woff?2|ttf|svg|xml)$/i,
        loader: 'file-loader',
        options: {
          name() {
            return '[path][name].[ext]';
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
