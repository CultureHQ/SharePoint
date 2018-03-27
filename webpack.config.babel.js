module.exports = {
  resolve: {
    extensions: [".js", ".css"]
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: "babel-loader",
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader", options: { modules: true } }
      ]
    }]
  }
};
