const { join } = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: [join(__dirname, "./../src/js/main.js")],
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
  plugins: [new VueLoaderPlugin()]
};
