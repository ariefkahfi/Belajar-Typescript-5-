const path = require('path');

module.exports = {
    entry: './src/hello.ts',
    devtool : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    devServer : {
        open : true,
        contentBase : __dirname
    },
    resolve: {
      extensions: [ ".tsx", ".ts", ".js" ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
};