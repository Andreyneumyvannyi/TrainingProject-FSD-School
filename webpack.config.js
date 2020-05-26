const path = require('path')

module.exports = {
    entry: {
        uikitCards: './src/pages/uikit/cards/cards.js', 
        colorsTypes: './src/pages/uikit/colors_types/colors_types.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules'
        }]
    },

    devServer: {
        overlay: true,
    },
}