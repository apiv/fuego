import webpack from 'webpack'
import path from 'path'

const entryPoint = path.resolve(__dirname, 'docs/app/index.js')

const webpackConfig = {
  entry: {
    'fuego': entryPoint,
    'fuego.min': entryPoint
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'docs/build'),
    filename: '[name].js',
    library: ['Fuego']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.md/, exclude: /node_modules/, loader: 'raw-loader' },
    ]
  },
  plugins: [
    // Only minifiy files already marked for it
    new webpack.optimize.UglifyJsPlugin({ include: /\.min\.js$/, compress: true, comments: false })
  ]
}

export default webpackConfig
