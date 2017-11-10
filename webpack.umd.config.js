module.exports = {
  entry: './src/table2excel.js',
  output: {
    filename: './dist/table2excel.min.js',
    library: 'Table2Excel',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};