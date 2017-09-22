import webpack from 'webpack';
import path from 'path';
import WebpackBuildNotifierPlugin from 'webpack-build-notifier';

const PATH = {
  src: './src',
  dist: '../app/assets'
};

/**
 *
 * @type {{entry, output, module, eslint, plugins, resolve}}
 */
const jsConfig = ((env)=> {
  const entry = {
    'app': [
      path.join(__dirname, `${PATH.src}/js/app.jsx`)
    ]
  };

  const output = {
    path: path.join(__dirname, `${PATH.dist}/javascripts/`),
    filename: "[name].js"
  };

  const module = {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)|(\.DS_Store$)/,
        use: [
          { loader: 'babel-loader' }
          // { loader: 'eslint-loader' }
        ]
      }
    ]
  };

  const plugins = [];
  if(env === 'prod'){
    plugins.unshift(
      new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"production"' } }),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    );
  } else {
    plugins.unshift(
      new WebpackBuildNotifierPlugin()
    );
  }

  const resolve = {
    extensions: ['.js', '.jsx']
  };

  // return {entry, output, module, plugins, resolve, devtool: 'inline-source-map'}
  return {entry, output, module, plugins, resolve}
})(process.env.NODE_ENV);


module.exports = [jsConfig];
