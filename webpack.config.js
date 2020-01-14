module.exports = {
    entry: './src/app/index.js',
    output: {
      path: __dirname + '/src/views/js',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    }
  };