const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
      minChunks: 2,
      name: 'common-chunk',
    },
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  // точки входа
  entry: {
    common: ['./js/CommonCode.js'],
    main: ['@babel/polyfill', './js/main/index.js'],
    thankyou: ['./js/thankyou/index.js'],
    policy: ['./js/policy/index.js'],
    page404: ['./js/page404/index.js'],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name]/index.[contenthash:6].js',

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
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer({})],
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
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer({})],
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.pug$/i,
        use: [
          {
            loader: 'pug-loader',
            options: {
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
      // {
      //   test: /\.html$/,
      //   include: [path.resolve(__dirname, 'source/')],
      //   use: ['html-loader'],
      // },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]/style.[contenthash:6].css',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {from: 'src/google02d0585788951777.html', context: __dirname},
      {from: 'src/.htaccess', context: __dirname},
      {from: 'src/js/order.php', to: 'js/', context: __dirname},
      {from: 'src/js/sendmailsmtpclass.php', to: 'js/', context: __dirname},
      {from: 'src/docs', to: 'docs/', context: __dirname},
      {
        from: 'src/assets/images/default/img__tpl-email-top.jpg',
        to: 'assets/images/default/',
        context: __dirname,
      },
    ]),
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
      chunks: ['page404', 'common', 'common-chunk', 'main'],
      template: './pug/policy/index.pug',
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      chunks: ['page404', 'common', 'common-chunk', 'main'],
      template: './pug/page404/index.pug',
    }),
    new CompressionPlugin(),
  ],
};
