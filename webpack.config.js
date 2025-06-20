const path = require("path");
const HtmlWebPack = require("html-webpack-plugin");
const { type } = require("os");


module.exports = {
    mode: "development",
    entry: "./src/js/home.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebPack({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.html$/i,
                use: "html-loader",
            },

            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/index.html"],
    },
};