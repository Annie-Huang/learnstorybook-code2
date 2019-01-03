const path = require("path");

// Just load less-loader, don't need to load style-loader or css-loader
// loaders: ["style-loader", "css-loader", "less-loader"],
module.exports = {
  module: {
    rules: [{
      test: /\.less$/,
      loaders: ["less-loader"],
      include: path.resolve(__dirname, "../")
    }]
  }
};
