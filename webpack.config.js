const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './main.js',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
        ],
    },
    resolveLoader: {
        modules: [path.join(__dirname, 'node_modules')],
    },
    resolve: {
        modules: [path.join(__dirname, 'node_modules')],
        extensions: ['.js', '.jsx', '.css', '.scss'],
    },
};
