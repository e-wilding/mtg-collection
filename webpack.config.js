const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
    return {
        mode: 'development',
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].bundle.css',
                chunkFilename: '[id].css'
              }),
            new webpack.HotModuleReplacementPlugin()
        ],
        entry: path.resolve(__dirname, 'client', 'src', 'index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            open: true,
            clientLogLevel: 'silent',
            port: 3000,
            historyApiFallback: true,
            hot: true
        },
        module: {
            rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'client', 'src'),
                exclude: /node_modules/,
                use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                    ['@babel/preset-env', {
                        "targets": "defaults" 
                    }],
                    '@babel/preset-react'
                    ]
                }
                }]
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'client', 'src'),
                exclude: /node_modules/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      //hmr: env.NODE_ENV === 'development',
                      publicPath: '../',
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 0 
                    }
                  },
                  'postcss-loader'
                ]
              }
            ]
        }
    }
}