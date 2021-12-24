const path = require('path')

module.exports = {
  entry: path.join(__dirname, '../src/index'),
  output: {
    path: path.join('/Users/fanmingfei/WeChatProjects/minigame-1/js/libs'),
    filename: 'weapp-adapter.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel',
          'eslint-loader'
        ]
      }
    ]
  }
}
