const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './ui/js/views/index.tsx',
    vendors: [
      'react',
      'redux',
      'react-redux'
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        commons: {
          name: "commons",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all"
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  // Enable sourcemaps for debugging webpack's output.
  // devtool: "source-map",
  resolve: {
    // Resolvable extensions
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  output: {
    path: path.join(__dirname, 'dist'), // needs to be an absolute path
    // publicPath: '../',
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      // All '.ts' and '.tsx' files are handled by 'awesome-typescript-loader'
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      // All '.js' and '.jsx' files are handled by 'babel-loader'
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['env', 'react']
        }
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      // All '.html' files are handled by 'html-loader'
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
            // removeComments: true,
            // collapseWhitespace: true
          }
        }],
      },
      // All '.sass', '.scss' and '.css' files are handled here
      {
        test: /\.s?[ac]ss$/,
        use: [
          true ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
          // { loader: "style-loader" },
          // { loader: "css-loader" },
          // { loader: "sass-loader" }
        ],
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(jpg|png|svg|gif|bmp|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'ui/index.html')
    }, {
      from: path.resolve(__dirname, 'ui/images/favicon.ico'),
      to: 'images'
    }]),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      exclude: /(node_modules)/
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: true ? 'styles.bundle.css' : '[name].[hash].css',
      chunkFilename: true ? '[id].css' : '[id].[hash].css'
    })
  ]
};