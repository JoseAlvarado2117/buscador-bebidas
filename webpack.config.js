const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // instalado via npm
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // instalado via np🇲m

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // AQui se configuran todos los tipos de archivos de la aplicación
  module: {
    rules: [
      // Configuration para archivos de javascript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Configuration para archivos de html
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
      // Configuration para archivos css
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    // Plugin que nos permiten procesar archivos html
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    // Plugin que nos permiten procesar archivos css
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
  // Configuration para el servidor de desarrollo
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
  },
}
