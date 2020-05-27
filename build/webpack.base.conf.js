const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')


const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../public'),
    assets: 'static/'
}

module.exports = {

    externals:{
        paths: PATHS
    },

    entry: {
        app: PATHS.src, 
    },

    output: {
        filename: `${PATHS.assets}js/[name].[hash].js`,
        path: PATHS.dist,
        publicPath: '/'
    },

    optimization:{
        splitChunks:{
            cacheGroups:{
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },{
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: {path: './postcss.config.js'}}
                },{
                    loader: "sass-loader",
                    options: {sourceMap: true}
                }
            ]
        }]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[hash].css`
        }),

        new HtmlWebpackPlugin({
            template: `${PATHS.src}/index.html`,
            filename:'./index.html',
        }),

        new CopyWebpackPlugin({
            patterns: [
                {from: `${PATHS.src}/img`, to: `${PATHS.assets}img`},
                {from: `${PATHS.src}/static`, to: ''},
            ],
        }),
    ],
}