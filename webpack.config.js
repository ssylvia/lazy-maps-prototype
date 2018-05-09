const ArcGISPlugin = require('@arcgis/webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  entry: {
    index: './src/index.js'
  },
  output: {
    // express is configured to statically serve the assets folder
    path: path.join(__dirname, 'dist/assets'),
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
            cacheDirectory: true
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
    new CleanWebpackPlugin(["dist"]),
    new ArcGISPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    // compress assets so that they can be served as gzip files
    // NOTE: disabling for now b/c we'd need to configure express serve these
    // w/ something like https://www.npmjs.com/package/express-static-gzip
    // new CompressionPlugin(),
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

const serverConfig = {
  entry: {
    index: './src/server.js'
  },
  target: 'node',
  externals: [
    // don't bundle node modules, the server can load them from the file system
    nodeExternals(),
    // don't load/run esri modules on the server
    /^esri/
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      },
      {
        // ignore styles - these are built by the browser config
        test: /\.scss$/, 
        loader: 'ignore-loader'
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '/src'), 'node_modules/'],
    extensions: ['.js', '.scss']
  }
};

module.exports = [browserConfig, serverConfig];
