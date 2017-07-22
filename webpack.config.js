module.exports = {
    entry: './src/app.jsx',
    output: { path: __dirname, filename: 'build/bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    devServer: {
        contentBase: "./",
    }
};