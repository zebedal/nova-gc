const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/js/app.js',
    output: {
      path: path.resolve(__dirname + '/dist'),
      filename: 'js/bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname + '/src/index.html'),
        inject: 'head'
      }),

    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }, 
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ]
    }
  }