const path = require('path');
//Plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
};

const cssLoaders = extra => {
    const loaders = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: isDev,
            reloadAll: true
        }
        }, 'css-loader'
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
};

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env'
        ],
        //plugins: ['@babel/plugin-proposal-class-properties', {'loose': true}]
        plugins: [
            ["@babel/plugin-proposal-class-properties", {
            "loose": true
          }]
          ]
    };
    if (preset){
        opts.presets.push(preset)
    };
    return opts;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: ['@babel/polyfill', './index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    //externals: ['fs'],
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                        collapseWhitespace: isProd
                     }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        port: 4200
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: {
                    loader:'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
        ]
    },
}