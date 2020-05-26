const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },{
                    loader: "sass-loader",
                    options: {sourceMap: true}
                }
            ]
        }]
    },

    devServer: {
        overlay: true,
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename:"[name].css"
        })
    ]
}