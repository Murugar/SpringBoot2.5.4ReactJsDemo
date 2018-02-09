module.exports = {
    entry: './name-manager.jsx',
    output: {
        filename: './site/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,         
                exclude: /node_modules/, 
                loader: "babel-loader", 
                query:
                {
                   presets: ['es2015', 'react']
                }
                
            }
        ]
    },
    devtool: 'source-map'
}
