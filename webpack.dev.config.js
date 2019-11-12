const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');
// const AssetsPlugin = require('assets-webpack-plugin');
console.log(__dirname);

module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
      minChunks: 2,
      name: 'common-chunk',
    },
  },
  watch: true,
  // точки входа
  entry: {
    common: ['./js/CommonCode.js'],
    main: ['@babel/polyfill', './js/main/index.js'],
    thankyou: ['./js/thankyou/index.js'],
    policy: ['./js/policy/index.js'],
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
        // include: [path.resolve(__dirname, 'src/')],
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
              self: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|ttf|otf|svg|xml)$/i,
        exclude: /(android-chrome-192x192.png)|(android-chrome-512x512.png)|(img__map-pin.svg)/i,
        loader: 'file-loader',
        options: {
          name() {
            return '[path][name].[contenthash:6].[ext]';
          },
        },
      },
      {
        test: /(android-chrome-192x192.png)|(android-chrome-512x512.png)|(img__map-pin.svg)|(\.(php|html))/i,
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
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]/style.css',
    }),
    new CleanWebpackPlugin({}),
    new CopyPlugin([
      {from: 'src/google02d0585788951777.html', context: __dirname},
      {from: 'src/.htaccess', context: __dirname},
      {from: 'src/js/order.php', to: 'js/', context: __dirname},
      {from: 'src/js/sendmailsmtpclass.php', to: 'js/', context: __dirname},
    ]),
    // new AssetsPlugin({
    //   filename: 'assets.json',
    //   path: path.resolve(__dirname, 'dev/js'),
    //   prettyPrint: true,
    //   processOutput(assets) {
    //     console.log('************************');
    //     console.log(assets);
    //     console.log('************************');
    //     return `window.staticMap = ${JSON.stringify(assets)}`;
    //   },
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['main', 'common', 'common-chunk'],
      template: './pug/main/index.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'thankyou.html',
      chunks: ['thankyou', 'common', 'common-chunk'],
      template: './pug/thankyou/index.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'policy.html',
      chunks: ['policy', 'common', 'common-chunk', 'main'],
      template: './pug/policy/index.pug',
    }),
  ],
};
