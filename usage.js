const util = require('util');

const Nicepack = require('./index');
const { babel, cssModules } = require('./plugins');

// Webpack stub just for demo purposes
const webpack = () => console.log('Pretend this is Webpack');

const log = (...args) => console.log(util.inspect(...args, { depth: null }));

const webpackConfig = new Nicepack()
  .entry('./src/app/index.js')
  .use(babel())
  .use(cssModules())
  .loader(['html', 'xml', 'txt'], 'raw')
  .config;

log(webpackConfig);

webpack(webpackConfig);