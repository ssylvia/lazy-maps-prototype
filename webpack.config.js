const ArcGISPlugin = require('@arcgis/webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: ['syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new ArcGISPlugin(),
    new HtmlWebPackPlugin({
      title: 'My ArcGIS Webpack App',
      chunksSortMode: 'none',
      meta: {
        viewport:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    // compress assets so that they can be served as gzip files
    new CompressionPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'public/**/*',
        to: './',
        context: './src'
      }
    ])
  ],

  resolve: {
    modules: [path.resolve(__dirname, '/src'), 'node_modules/'],
    extensions: ['.js', '.scss']
  },

  externals: [
    (context, request, callback) => {
      if (/pe-wasm$/.test(request)) {
        return callback(null, 'amd ' + request);
      }
      callback();
    }
  ],

  node: {
    process: false,
    global: false
  }
};
