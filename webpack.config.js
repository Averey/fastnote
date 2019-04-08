const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ChromeExtensionReloader  = require('webpack-chrome-extension-reloader');

const resolve = dir => path.join(__dirname, dir);
  
module.exports = {
  context: resolve('src'),
  entry: {
    background: './chrome/background/background',
    content: './chrome/content/content',
    popup: './chrome/popup/popup',
  },
  output: {
    path: resolve('dist'),
    filename: '[name]/[name].js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      src: resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new ChromeExtensionReloader({
      port: 9090,
      reloadPage: true,
      entries: {
        contentScript: 'content',
        background: 'background'
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin([
      { from: 'manifest.json', to: resolve('dist') },
      { from: 'logo.png', to: resolve('dist') },
      { from: 'assets', to: resolve('dist/assets') },
    ])
  ],
}
