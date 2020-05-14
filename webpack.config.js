
var path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
    entry:
    {
        'index': './src/index.ts',
        'utils': './src/index.utils.ts',
    },
    // output: {
    //     path: path.resolve(__dirname, 'build'),
    //     filename: 'index.ts',
    //     libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
    // },
    // output: {
    //     path: path.join(__dirname, "dist"),
    //     filename: "[name].[contenthash:8].ts",
    //     // filename: "[name].bundle.ts",
    //     chunkFilename: "[name].chunk.ts",
    //     libraryTarget: 'commonjs2'
    // },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].ts",
        library: ["drivezy-frontend-business", "[name]"],
        libraryTarget: "umd",
        globalObject: "this",
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|build|dist)/,
                use: {
                    loader: 'babel-loader',

                }
            },
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                use: 'ts-loader',
                exclude: /(node_modules|build|dist)/,
            },
        ]
    },
    externals: {
        'react': 'commonjs react', // this line is just to use the React dependency of our parent-platform-project instead of using our own React.
        '@types/react': 'commonjs @types/react'
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "initial",
    //         minSize: 1000,
    //         maxSize: 100000,
    //         cacheGroups: {
    //             default: false, // disable the built-in groups, default & vendors (vendors is overwritten below)
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: "vendors",
    //                 priority: 10,
    //                 //enforce: true, // create chunk regardless of the size of the chunk
    //                 //maxSize: 10000
    //             }
    //         }
    //     }
    // },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             default: false,
    //             vendor: {
    //                 name: "vendor",
    //                 chunks: 'all',
    //                 // chunks: (chunk) => { return chunk.name === "index" },
    //                 test: /[\\/]node_modules[\\/]/,
    //                 enforce: true
    //             }
    //         }
    //     }
    // }
};

