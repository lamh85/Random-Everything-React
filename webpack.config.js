var webpack = require('webpack');

module.exports = {
  entry: "./javascript/index.js",
  output: {
    path: __dirname,
    filename: "./javascript/bundle.js",
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}