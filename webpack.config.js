var path = require('path');
var webpack = require('webpack');
var argv = require('yargs').argv;
const makeDist = argv.dist;
const mainJs = path.resolve(__dirname, 'src/app.js');
const babelLoaders = makeDist ? ['babel?stage=0'] : ['react-hot', 'babel?stage=0'];
const entries = makeDist ? mainJs : ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server', mainJs];
const plugins = makeDist ? null : [
  // Enable Hot Module Replacement
  new webpack.HotModuleReplacementPlugin(),

// Avoid publishing files when compilation failed
  new webpack.NoErrorsPlugin()
];

module.exports = {
  resolve: {
    // Make sure, Webpack finds import'ed and require'd files specified without extension
    // so 'import Bla from './Bla' makes webpack to look for files 'Bla', 'Bla.js' and 'Bla.jsx'
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
      // JSX/ES6 handling with babel
      // * babel-loader: uses Babel to transform your JSX/ES6 JavaScript to ECMAScript 5
      // * react-hot: Reloads your React Component on code changes without loosing the application state
      {test: /\.js$/, exclude: /node_modules/, loaders: babelLoaders},

      {test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'},
      // CSS handling
      // * style-loader: Embeds referenced CSS code using a <style>-element in your index.html file
      // * css-loader: Parses the actual CSS files referenced from your code. Modifies url()-statements in your
      //   CSS files to match images handled by url loader (see below)
      {test: /\.css$/, loader: 'style!css'},

      // Image Handling
      // * url-loader: Returns all referenced png/jpg files up to the specified limit as inline Data Url
      //   or - if above that limit - copies the file to your output directory and returns the url to that copied file
      //   Both values can be used for example for the 'src' attribute on an <img> element
      {test: /\.(png|jpg)$/, loader: 'url?limit=25000'}
    ]
  },
  plugins: plugins,
  stats:   {
    // Nice colored output
    colors: true
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};
