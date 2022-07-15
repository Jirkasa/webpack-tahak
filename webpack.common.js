const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            inject: true
        })
    ]
}