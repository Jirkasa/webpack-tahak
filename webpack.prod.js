const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const purgecss = require('@fullhuman/postcss-purgecss');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(commonConfig, {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ["postcss-preset-env", {}],
                                    purgecss({
                                        content: ['./**/*.html']
                                    })
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
});