const { join } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const {HotModuleReplacementPlugin} = require('webpack')

module.exports = {
  mode: "development",
  entry: [join(__dirname, "./../src/js/main.js")],
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    compress: true,
    contentBase: join(__dirname, './../public/')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
          test: /\.css$/,
          use: [
              "vue-style-loader",
              "css-loader"
          ]
      }
    ]
  },
  plugins: [
      new HotModuleReplacementPlugin(),
      new VueLoaderPlugin()
    ]
};
