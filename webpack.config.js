const path = require('path')
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
  devServer: {
    port: 8081,
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CssMinimizerPlugin(),
    new webpack.DefinePlugin({
      STUDENT: JSON.stringify('Anna Volodkova'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.p?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
        // use: ['raw-loader'], Webpack 4
      },
      {
        test: /\.(png|jpeg|jpg|svg|gif)$/,
        type: 'asset/resource',
        // use: ['file-loader'], Webpack 4
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        // use: ['file-loader'], Webpack 4
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }]
      },
    ]
  }
}
