const path = require('path')

module.exports = {
    entry: './client/index.js',
    output: {
        path: `${__dirname}/build`,
        filename: 'bundle.js',
    },
    mode: 'production',
    module: {
        rules: [
            {   
                exclude: /node_modules/,
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                },
            }
        ]
    },
}