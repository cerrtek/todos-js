const HtmlWebpack    = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin     = require("copy-webpack-plugin");
 
module.exports = {
 
    mode: 'development',

    output: {
      clean: true
    },
    
    module: {
        rules: [
            {
              test: /\.html$/i,
              loader: 'html-loader',
              options: {
                // Disables attributes processing
                sources: false,
                minimize: false
              },
            },
            {
              test: /\.css$/,
              exclude: /styles.css$/,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /styles.css$/,
              use: [MiniCssExtract.loader, "css-loader"],
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                }
              ]
            }
          ],
    },
    plugins: [
        new HtmlWebpack({
            title: 'WebPack App',
            // filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtract({
          filename: '[name].css',
          ignoreOrder: false
        }),
        new CopyPlugin({
          patterns: [
            { from: "src/assets", to: "assets/" },
          ],
        }),

    ]
 
    
}