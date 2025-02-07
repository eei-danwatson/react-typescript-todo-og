const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', //Where the application starts
  output: {
    path: path.resolve(__dirname, 'dist'), //Where to put the output bundle
    filename: 'bundle.js', //Name of the output bundle
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, //Look for .ts or .tsx files
        use: 'ts-loader', //Use ts-loader for those files
        exclude: /node_modules/,
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
     }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    port: 8087,
  },
};