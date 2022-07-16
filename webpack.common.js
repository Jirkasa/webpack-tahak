const path = require("path");
const fs = require("fs");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { webpack } = require("webpack");

// CREATE PLUGINS FOR TUTORIAL PAGES
const htmlPluginsForTutorialPages = [];
fs.readdirSync("./tutorial").forEach(pageName => {
    htmlPluginsForTutorialPages.push(new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "tutorial", pageName, "index.html"),
        filename: `tutorial/${pageName}/index.html`,
        inject: true
    }));
});

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
        ...htmlPluginsForTutorialPages,
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "assets/img/*").replace(/\\/g, "/"),
                    to: path.resolve(__dirname, "dist")
                },
                {
                    from: path.resolve(__dirname, "assets/js/*").replace(/\\/g, "/"),
                    to: path.resolve(__dirname, "dist")
                }
            ]
        })
    ]
}