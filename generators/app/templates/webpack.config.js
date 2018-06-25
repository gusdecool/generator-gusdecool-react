require('webpack');

const path = require('path');
const SOURCE_DIR = path.resolve(__dirname, 'src/');

module.exports = {
    watch: process.env.NODE_ENV === 'development',
    cache: true,
    context: SOURCE_DIR,
    entry: [SOURCE_DIR + '/entry.jsx'],
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        modules: ['node_modules']
    },
    module : {
        rules : [
            {test : /\.(jsx|js)?/, exclude: /node_modules/, use: 'babel-loader'},
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{loader: 'file-loader'}]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: 'widget.js',
        library: '<%= appName %>',
        libraryTarget: 'umd'
    }
};
