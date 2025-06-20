const path = require("path");
const HtmlWebPack = require("html-webpack-plugin");


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
            filename: "index.html",
        }),
        
        new HtmlWebPack({
            template: "./src/menu.html",
            filename: "menu.html",
        }),

        new HtmlWebPack({
            template: "./src/contact_us.html",
            filename: "contact_us.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};