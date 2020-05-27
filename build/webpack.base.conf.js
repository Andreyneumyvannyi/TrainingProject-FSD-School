const path = require('path')
const fs = require("fs")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')


const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../public'),
    assets: 'assets/'
}

// Для проекта с использованием html файлов
// const PAGES_DIR = `${PATHS.src}/html`
// const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith(".html"));

const PAGES_DIR = `${PATHS.src}/${PATHS.assets}pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith(".pug"));

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
        rules: [
            
            // **** JS ****
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules'
            }, 
            
            // **** PUG ****
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            }, 
            

            // **** IMG ****
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }, 
            
            // **** FONTS ****
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }, 
            
            // **** SCSS ****
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                
                    {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },
                
                {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: {path: './postcss.config.js'}}
                },
                
                {
                    loader: "sass-loader",
                    options: {sourceMap: true}
                },
            ]
        }]
    },

    resolve:{
        alias: {
            "~": "src"
        }
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[hash].css`
        }),

        new CopyWebpackPlugin({
            patterns: [
                {from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img`},
                {from: `${PATHS.src}/static`, to: ''},
                {from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts`},
            ],
        }),

        ...PAGES.map(
            page =>
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/${page}`,
                filename: `./${page.replace(/\.pug/,'.html')}`
            })
        )

        /*
        Для проекта с использованием html файлов
        ...PAGES.map(
            page =>
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/${page}`,
                filename: `./${page}`
            })
        )*/
    ]
}