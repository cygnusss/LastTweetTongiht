const path = require("path");
const DIST = path.join(__dirname, "client/dist");
const SRC = path.join(__dirname, "client/src");

module.exports = {
  entry: `${SRC}/index.js`,
  output: {
    path: DIST,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: [/\.js$/, /\.jsx$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-1'],
        },
      }, 
      {
        test: /\.css$/,
        loader: 'style-loader',
      }, 
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      }
    ],
  },
}
