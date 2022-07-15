const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
        }),
        new HTMLWebpackPlugin({ // todo - potom přijdu na lepší způsob jak ty stránky vygenerovat
            template: path.resolve(__dirname, "tutorial", "co-je-to-webpack", "index.html"),
            filename: "tutorial/co-je-to-webpack/index.html",
            inject: true
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "assets/img/*").replace(/\\/g, "/"),
                    to: path.resolve(__dirname, "dist")
                }
            ]
        })
    ]
}