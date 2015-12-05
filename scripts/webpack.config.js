import path from 'path';
import webpack from 'webpack';

export default function webPackConfig(isDevelopment) {
  let entry;
  let jsLoaders;
  let plugins;

  if (isDevelopment) {
    entry = [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.jsx',
    ];
    jsLoaders = ['react-hot', 'babel-loader'];
    plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        __DEV__: true,
      }),
    ];
  } else {
    entry = './src/index.jsx';
    jsLoaders = ['babel-loader'];
    plugins = [
      new webpack.DefinePlugin({
        __DEV__: false,
      }),
    ];
  }

  const config = {
    entry: entry,
    output: {
      path: path.resolve('./www'),
      filename: 'bundle.js',
      publicPath: './',
    },
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    },
    module: {
      preLoaders: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      }],
      loaders: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: jsLoaders,
      }, {
        test: /\.(css|scss$)/,
        loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap'],
      }, {
        test: /\.(png|jpg|woff|woff2|gif|ttf|eot|svg)$/,
        loader: 'url-loader?prefix=./&limit=8192',
        // loader: 'file-loader?name=[path][name].[ext]',
      }],
    },
    plugins: plugins,
  };

  if (isDevelopment) {
    config.debug = true;
    config.devtool = 'eval';
    return config;
  }

  return config;
}
