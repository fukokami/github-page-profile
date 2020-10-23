'use strict';

const CopyPlugin = require('copy-webpack-plugin')
    , MiniCssExtractPlugin = require('mini-css-extract-plugin')
    , FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
    , { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {

    return {
        mode: 'development',
        entry: {
            'index': './src/js/index.js',
            'main.css': './src/scss/main.scss',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    ['@babel/preset-env', {
                                        targets: {
                                            chrome: 75,
                                        }
                                    }],
                                    '@babel/react',
                                ],
                            },
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader?url=false',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.ya?ml$/,
                    use: 'js-yaml-loader',
                }
            ],
        },
        devtool: 'source-map',
        output: {
            path: `${__dirname}/dist`,
            filename: 'js/[name].js',
            sourceMapFilename: 'map/[name].js.map',
        },
        plugins: [
            new CopyPlugin([
                { from: './src/assets', to: '.' },
            ]),
            new FixStyleOnlyEntriesPlugin({
                extensions: ['scss', 'css']
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name]',
            }),
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: false,
            }),
        ],
    };
};