module.exports = {
    entry: './name-manager.jsx',
    output: {
        filename: './site/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,         
                exclude: /node_modules/, 
                loader: "babel-loader", 
                options:
		{
                   presets: ['es2015', 'react']
                }
                
            }
        ]
    },
    devtool: 'source-map'
}
