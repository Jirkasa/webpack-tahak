const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(commonConfig, {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
});