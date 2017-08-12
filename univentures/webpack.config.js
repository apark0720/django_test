var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,
    entry: ['./frontend/index.js'],

    output: {
        path: path.resolve(__dirname, 'frontend'),
        filename: 'bundle.js',
    },

    plugins: [
        new BundleTracker({ filename: './webpack-stats.json' }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    module: {
        loaders: [
            {
                test: [/\.jsx?$/, /.js?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ]
    },

    devtool: 'source-map',

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['*', '.js', '.jsx']
    }
}