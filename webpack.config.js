/* eslint import/no-extraneous-dependencies: off */
const path = require("path");
const webpack = require("webpack");

module.exports = {
  output: {
    path: path.join(__dirname, "docs"),
    filename: "index.js"
  },
  entry: path.join(__dirname, "docs", "app.js"),
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "docs")
  },
  plugins: [
    new webpack.EnvironmentPlugin(["TOKEN"])
  ]
};