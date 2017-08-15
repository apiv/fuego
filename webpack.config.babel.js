import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const entryPoint = path.resolve(__dirname, 'docs/app/index.js')

const webpackConfig = {
  entry: {
    'fuego.min': entryPoint
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'build/[name].[hash].js',
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
    new webpack.optimize.UglifyJsPlugin({ include: /\.min\.js$/, compress: true, comments: false }),
    new HtmlWebpackPlugin({
      chunks: ['fuego.min'],
      template: 'docs/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    })
  ]
}

export default webpackConfig
