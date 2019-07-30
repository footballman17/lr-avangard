const path = require('path');

const conf = {
  // точка входа
  entry: './src/index.js',
  // итоговое название файла
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/',
  },
};

module.exports = conf;
