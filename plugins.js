// Example of how to create a 'Nicepack' plugin

const babel = (config) => () => {
  return {
    loader: {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }
  }
}

const cssModules = (config) => () => {
  return {
    loader: {
      test: /\.css$/,
      loaders: ['css-loader'],
    }
  }
}

module.exports = {
  babel,
  cssModules,
}