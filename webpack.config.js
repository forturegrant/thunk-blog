const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const WebpackDevServer = require("webpack-dev-server");

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        "webpack-dev-server/client?http://0.0.0.0:3000",
        "webpack/hot/only-dev-server",
        // 这里是你的入口文件
        './app/index.js'
    ],
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'app.js',
        path: path.resolve(__dirname, '/static'),
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.tpl.html',
            inject: 'body',
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            }
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "file-loader"
            }
        }, {
            test: /\.(woff|woff2)$/,
            use: {
                loader: "url-loader?prefix=font/&limit=5000"
            }
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            }
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.json', '.sass', '.scss', '.less', 'jsx']
    }
};