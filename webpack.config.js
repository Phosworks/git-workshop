var path = require("path");

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: path.resolve(__dirname, "build/js"),
        publicPath: "http://localhost:8080/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: require.resolve('jquery'), loader: 'expose?jQuery!expose?$' }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        // hot: true,
        inline: true
    }
};