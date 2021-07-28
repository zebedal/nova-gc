const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; */


module.exports = {
    entry: ['babel-polyfill','./src/js/app.js'],
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
      })
      /* new BundleAnalyzerPlugin(), */
    ],
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
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
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                ["@babel/plugin-proposal-class-properties", { "loose": true }]
              ]
            }
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
    },
    externals: function (context, request, callback) {
      if (/xlsx|canvg|pdfmake|moment/.test(request)) {
        return callback(null, "commonjs " + request);
      }
      callback();
    }
  }

  