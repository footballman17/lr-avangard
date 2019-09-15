const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// development mode - npm run dev
console.log('development mode start');

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
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Hot Module Replacement',
      inject: true,
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
module.exports = (env, options) => conf;

// production mode - npm run build
// console.log('production mode start');

// const conf = {
//   entry: {
//     app: './src/build.js',
//   },

//   devServer: {
//     contentBase: './dist',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.pug$/,
//         loader: 'pug-loader',
//         options: {
//           pretty: true,
//         },
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           MiniCssExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//             options: { sourceMap: true },
//           },
//           {
//             loader: 'sass-loader',
//             options: { sourceMap: true },
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
//     // new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       // title: 'Hot Module Replacement',
//     }),
//     new HtmlWebpackPlugin({
//       template: `./src/pug/full.pug`,
//       filename: 'index.html',
//       inject: true,
//     }),
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: '[name].css',
//       chunkFilename: '[id].css',
//     }),
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(`${__dirname}`, 'dist'),
//   },
// };

// module.exports = (env, options) => conf;
