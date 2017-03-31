const path = require('path')

module.exports = {
  // context: __dirname + "/app",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        // "test" is commonly used to match the file extension
        test: /\.js$/,

        // "include" is commonly used to match the directories
        include: [
          path.resolve(__dirname, "src")
        ],

        // the "loader"
        loader: "babel-loader" // or "babel" because webpack adds the '-loader' automatically
      }
    ]
  },
}
