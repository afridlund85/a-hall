const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')

const common = require('./webpack.common.js')

const productionServer = {
  target: 'web',
  mode: 'production',
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js'
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    })
  ]
}

module.exports = merge(productionServer, common)
