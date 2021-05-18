const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : 'development',
    devtool: 'eval',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname,"..", 'public', "index.html") ,
      })
    ],
  
    entry: { 
      index: path.resolve(__dirname,"components", "App.tsx") 
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist'),
    },
  
    devServer: {
      port: 3000,
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, "../dist"),
      inline: true,
    },
  
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: ['src', 'node_modules'],
    },
  
    module: {
      rules: [
        // .ts(x) files should first pass through the Typescript loader, and then through babel
        { 
          test: /\.tsx?$/, 
          use: [
            { loader: 'ts-loader' },
            { 
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }, 
          ], 
          include: path.resolve('.') 
        },
        { 
          test: /\.(ts|js)x?$/, 
          exclude: /node_modules/,
          use: [
            { 
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
              }
            }, 
          ], 
          include: path.resolve('.') 
        }
      ]
    },
  }