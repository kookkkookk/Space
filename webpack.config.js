const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: 'index',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: process.env.NODE_ENV === "development" ? "js/[name].js?[hash:8]" : "js/[name].js",
        publicPath: process.env.NODE_ENV === "development" ? "/" : "./"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    },
    devServer: {
        compress: true,
        port: 3000,
        stats: {
            assets: true,
            cached: false,
            chunkModules: false,
            chunkOrigins: false,
            chunks: false,
            colors: true,
            hash: false,
            modules: false,
            reasons: false,
            source: false,
            version: false,
            warnings: false
        },
        proxy: {
            // '/api/*': {
            //     target: 'https://xxx.xxx.com/',
            //     changeOrigin: true,
            // },
        },
    },  
    resolve: {
        alias: {
            vue: process.env.NODE_ENV === "development" ? 'vue/dist/vue.js' : 'vue/dist/vue.min.js'
        },
        modules: [
            path.resolve('src'),
            path.resolve('src/images'),
            path.resolve('src/components'),
            path.resolve('src/assets'),
            path.resolve('node_modules')
        ],
        extensions: ['.js', '.vue']
    },
    module:{
        rules:[
            {
                test: /\.(sass|scss)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]?[hash:8]'
                }
            },
            {
                test: /\.(vue)$/,
                use: 'vue-loader',
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader',
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/,
                include: path.resolve('src/images'),
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 3000,
                            name:'[path][name].[ext]?[hash:8]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'YUN DESIGN STUDIO',
            description: 'YUN design 空間層次的美，生活尺度的善意。Life starts with good - 昀和室內裝修',
            keywords: 'yun design, yun design studio, 昀和, 昀和室內裝修',
            filename: 'index.html',
            template: 'template/template.html',
            googleVerification: 'hH0bpRbrrTfUl1npUUnckCbf0mVk-Gm_QOV2iYF5qyE'
        }),
        new CopyWebpackPlugin([
            { from: 'assets', to: 'assets' },
        ]),
        new webpack.LoaderOptionsPlugin({
            vue: {
                postcss: [require('autoprefixer')(
                    {
                        browsers: ['> 1%', 'last 5 versions', 'Firefox >= 45', 'iOS >=8', 'Safari >=8','ie >= 10']
                    }
                )]
            }
        })
    ]
};

module.exports = config;
