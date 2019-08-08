const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
  ],
  devServer: {
    contentBase: './'
  }
};