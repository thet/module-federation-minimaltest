process.traceDeprecation = true;
const path = require("path");

module.exports = (env, argv) => {
    const config = {
        entry: {
            bundle: path.resolve(__dirname, "src/index.js"),
        },
        output: {
            filename: "[name].js",
            chunkFilename: "chunks/[name].[contenthash].min.js",
            path: path.resolve(__dirname, "dist/"),
            clean: true,
            publicPath: "auto",
        },
        optimization: {},
    };

    if (process.env.NODE_ENV === "development") {
        // Add a dev server.
        config.devServer = {
            static: {
                directory: __dirname,
            },
            port: "3001",
            host: "0.0.0.0",
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        };
        config.optimization.minimize = false;
        config.devtool = false;
        config.watchOptions = {
            ignored: ["node_modules/**", "docs/**"],
        };
    }
    return config;
};
