var ExtractTextPlugin = require('extract-text-webpack-plugin')

var outputFile = '{{ name }}'
var globalName = '{{ library }}'

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: outputFile + '.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract('css-loader'),
            {{#if_eq css "less"}}
            less: ExtractTextPlugin.extract('css-loader!less-loader'),
            {{/if_eq}}
            {{#if_eq css "sass"}}
            sass: ExtractTextPlugin.extract('css-loader!sass-loader'),
            scss: ExtractTextPlugin.extract('css-loader!sass-loader'),
            {{/if_eq}}
            {{#if_eq css "stylus"}}
            stylus: ExtractTextPlugin.extract('css-loader!stylus-loader'),
            {{/if_eq}}
          },
        },
      },
    ],
  },
  externals: {
    // Put external libraries like lodash here
  },
  plugins: [
    new ExtractTextPlugin(outputFile + '.css'),
  ],
}
