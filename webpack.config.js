const buildPath = 'build';
const path = require('path');
// const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const ccp = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');
const CommonsChunkConfig = new ccp({
  name: 'vendor',
  filename: 'js/vendor.bundle.js'
});
// Extracts all imported css from javascript imports into a css file
// for parallel loading of CSS and JS in the browsers
const ExtractTextWebpackPluginConfig = new ExtractTextWebpackPlugin({
  filename: 'binger.css',
  allChunks: true
});
const StyleLoaderConfig = {
  dev: ExtractTextWebpackPlugin.extract({
    fallback: 'style-loader?sourceMap',
    use: [
      'css-loader',
      'sass-loader'
    ]
  })
};
const CopyWebpackPluginConfig = new CopyWebpackPlugin([{
  from: path.resolve(__dirname, 'ui/index.html')
}, {
  from: path.resolve(__dirname, 'ui/images/favicon.ico'),
  to: 'images'
}]);

module.exports = {
  entry: {
    vendor: [
      'react',
      'redux',
      'react-redux'
    ],
    binger: [
      // This is app root, all other JS are imported
      './ui/js/index.tsx'
    ]
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  output: {
    path: path.join(__dirname, buildPath), // needs to be an absolute path
    // publicPath: '../',
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(html)$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
            // removeComments: true,
            // collapseWhitespace: true
          }
        }],
      }, {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['env', 'react']
        }
      }, {
        test: /\.(css|scss)$/,
        use: StyleLoaderConfig.dev
      }, {
        test: /\.(otf|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }, {
        test: /\.(jpg|png|gif|bmp|ico|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    CommonsChunkConfig,
    ExtractTextWebpackPluginConfig,
    CopyWebpackPluginConfig
  ]
};