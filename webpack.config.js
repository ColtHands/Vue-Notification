const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin = require('terser-webpack-plugin')
const argv = require('yargs').argv

const minimize = argv.mode == 'production'
const devMode = argv.mode == 'development'

module.exports = {
    entry: devMode ? ['./src/index.js', './example/index.js'] : './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },
    optimization: {
        minimize,
        minimizer: [new TerserPlugin({
            parallel: false,
            extractComments: false,
            terserOptions: {
                compress: {
                    drop_console: true
                }
            }
        })]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.(j|t)s$/,
                exclude: [/node_modules/, /example/],
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /.vue$/,
                exclude: [/node_modules/],
                loader: 'vue-loader',
                options: {
                    sourceMap: true,
                    esModule: true,
                    hotReload: true
                }
            },
            {
                test: /\.(s(a|c)ss|styl|stylus|css)$/,
                exclude: [/node_modules/],
                use: [
                    { loader: 'style-loader' },
                    { loader: "css-loader", options: { sourceMap: true, url: false } }
                ]
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                loader: 'sass-loader',
                options: { sourceMap: true }
            },
            {
                test: /\.sass$/,
                exclude: [/node_modules/],
                loader: 'sass-loader',
                options: {
                    sassOptions: {
                        indentedSyntax: true
                    },
                    sourceMap: true
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        extensions: [
            '.js',
            '.vue',
            '.css',
            '.sass'
        ],
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },
    devServer: devMode ? {
        static: ['example', 'dist'],
        compress: false,
        port: argv.PORT || 3003,
        hot: true,
        historyApiFallback: {
            index: 'index.html'
        }
    } : {}
}