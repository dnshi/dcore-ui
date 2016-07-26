const path = require('path')
const chalk = require('chalk')
const eslintFormatter = require('eslint-friendly-formatter')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const precess = require('precss')
const cssnext = require('postcss-cssnext')
const contentPath = path.resolve('./www')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      './site/app.js',
    ],
  },
  output: {
    path: contentPath,
    publicPath: 'http://localhost:3000/',
    filename: './static/[name].bundle.js',
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015-webpack', 'react', 'stage-0'],
          plugins: ['react-hot-loader/babel', 'transform-runtime'],
          cacheDirectory: true,
        },
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName='
              // + 'dcore-[local]__[hash:base64:5]&sourceMap!postcss-loader',
              + '[local]&sourceMap!postcss-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss() {
    return [precess, cssnext]
  },
  eslint: {
    formatter: eslintFormatter,
  },
  devServer: {
    contentBase: contentPath,
    proxy: {
      '/api': {
        target: 'http://localhost:4000/',
      },
    },
  },
  plugins: [
    new ProgressBarPlugin({
      format: `${chalk.blue.bold('Building client bundle')}` +
              ` [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      renderThrottle: 100,
      summary: false,
      customSummary: t => console.log(chalk.blue.bold(`Built client in ${t}.`)),
    }),

    new HtmlWebpackPlugin({
      template: 'site/index.html',
    }),
  ],
}
