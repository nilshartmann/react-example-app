const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },

  entry: "./src/app.js",
  output: {
    // output path
    path: path.resolve(__dirname, "public/dist"),
    publicPath: "dist/",
    filename: "dist.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
        options: {
          limit: 25000
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "public/fonts/[name].[ext]"
        }
      }
    ]
  },
  devtool: "source-map"
};
