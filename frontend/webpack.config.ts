import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";

module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: "ts-loader",
                exclude: path.join(__dirname, "node_modules"),
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html",
            inject: "body",
        }),
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 9000,
        open: true,
    },
};
