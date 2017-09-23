import webpack from 'webpack';
import path from 'path';
import WebpackBuildNotifierPlugin from 'webpack-build-notifier';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

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


/**
 * css compile
 * @type {{entry, output, module, plugins, postcss}}
 */
const cssConfig = ((env)=>{
  const entry = {
    style: path.join(__dirname, `${PATH.src}/css/style.scss`),
  };
  const output = {
    path: path.join(__dirname, `${PATH.dist}/stylesheets/`),
    filename: '[name].css',
  };

  const module = {
    rules: [{
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader",
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer]
            }
          },
          "sass-loader"
        ]
      })
    }]
  };

  const plugins = [
    new ExtractTextPlugin('[name].css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({ browsers: ['last 2 versions', 'Android >= 4.1'] }),
        ]
      }
    }),
    new WebpackBuildNotifierPlugin()
  ];

  return {entry, output, module, plugins}
})(process.env.NODE_ENV);



module.exports = [jsConfig, cssConfig];

