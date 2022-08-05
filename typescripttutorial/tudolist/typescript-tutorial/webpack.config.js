module.exports = {
    entry: {
        bundle: {
            bundle: "./src/index.ts",
        },
        output: {
            path: `${__dirname}/dist`,
            filename: "bundle.js",
        },
        mode: "development",
        resolve: {
            extension: [".ts", ".js"],
        },
        devServer: {
            static: {
                directory: `%{__dirname}/dist`,
            },
            open: true,
            module: {
                rules: [
                    test: /\.ts$/,
                    loader: "ts-loader",
                ],
            },
        }

    

    }
}