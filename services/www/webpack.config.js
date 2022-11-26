const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    devServer: {
        port: 9000,
        //static: './dist',
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            projectReferences: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.module\.(scss|css)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /(?<!\.module)\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                        },
                    },
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].[chunkhash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin()],
    optimization: {
        // Only include one copy of the runtime as it's own file.
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
                        )[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace("@", "")}`;
                    },
                },
            },
        },
    },
};
