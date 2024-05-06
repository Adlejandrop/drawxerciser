module.exports = {
    //...
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'] // Fixed the dot before 'ts'
    },
    module: { // 'module' object added to wrap the rules
      rules: [
        {
          test: /\.(png|jpe?g|gif|mp3)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    }
  };
  