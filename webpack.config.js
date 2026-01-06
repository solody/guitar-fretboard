const path = require('path');
const { defineReactCompilerLoaderOption, reactCompilerLoader } = require('react-compiler-webpack');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.[mc]?[jt]sx?$/i,
                exclude: /node_modules/,
                use: [
                    // babel-loader, swc-loader, esbuild-loader, or anything you like to transpile JSX should go here.
                    // If you are using rspack, the rspack's buiilt-in react transformation is sufficient.
                    // { loader: 'swc-loader' },
                    //
                    // Now add reactCompilerLoader
                    {
                        loader: reactCompilerLoader,
                        options: defineReactCompilerLoaderOption({
                            // React Compiler options goes here
                        })
                    },

                    { loader: 'ts-loader' },
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};