const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: ['@babel/polyfill', '../hot/main/index.js'],
    thankyou: ['@babel/polyfill', '../hot/thankyou/index.js'],
    policy: ['@babel/polyfill', '../hot/policy/index.js'],
    page404: ['@babel/polyfill', '../hot/page404/index.js'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
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
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/i,
        use: [
          {
            loader: 'pug-loader',
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
        exclude: /(template.html)/,
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
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    hot: true,
  },

  plugins: [
    new CopyPlugin([
      {from: 'src/google02d0585788951777.html', context: __dirname},
      {from: 'src/.htaccess', context: __dirname},
      {from: 'src/js/order.php', to: 'js/', context: __dirname},
      {from: 'src/js/sendmailsmtpclass.php', to: 'js/', context: __dirname},
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['main'],
      template: '../hot/template.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'thankyou.html',
      chunks: ['thankyou'],
      template: '../hot/template.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'policy.html',
      chunks: ['policy'],
      template: '../hot/template.html',
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      chunks: ['page404'],
      template: '../hot/template.html',
    }),
  ],
};
