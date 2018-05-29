const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const common = require('./webpack.common.js')

const productionClient = {
  target: 'web',
  mode: 'production',
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, '../dist/public'),
    filename: 'bundle.js',
    publicPath: '/dist/public'
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    })
  ]
}

module.exports = merge(productionClient, common)
