const path = require('path')
const webpack = require('webpack')

const common = {
  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  }
}

module.exports = common
