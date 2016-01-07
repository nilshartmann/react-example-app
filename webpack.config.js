var path = require('path');
var webpack = require('webpack');
var argv = require('yargs').argv;
const makeDist = argv.dist;
const mainJs = path.resolve(__dirname, 'src/app.js');
const entries = makeDist ? mainJs : ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server', mainJs];
const plugins = makeDist ? null : [
  // Enable Hot Module Replacement
  new webpack.HotModuleReplacementPlugin(),

// Avoid publishing files when compilation failed
  new webpack.NoErrorsPlugin()
];

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry:   entries,
  output:  {
    // output path
    path:       path.resolve(__dirname, 'public/dist'),
    publicPath: 'dist/',
    filename:   'dist.js'
  },
  module:  {
    loaders: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        loader:  ['babel'],
        query:   {
          presets: ['es2015', 'stage-0', 'react']
        }
      },

      {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.(png|jpg)$/, loader: 'url?limit=25000'}
    ]
  },
  plugins: plugins,
  stats:   {
    colors: true
  },
  devtool: 'source-map'
};
