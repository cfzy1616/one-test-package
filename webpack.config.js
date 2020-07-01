const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const outPath = isProd ? './dist' : '../dist';
const plugins = isProd ? [] : [
  new HtmlWebpackPlugin({
    template: 'public/index.html'
  }),
]

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: isProd ? './src/components/index.js' : './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, outPath),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.cm\.styl$/,
        loader: 'style-loader!css-loader?modules&camelCase&localIdentName=[local]-[hash:base64:5]!stylus-loader'
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  externals: isProd ? [nodeExternals()] : [],
  plugins,
};