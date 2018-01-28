const ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = {
    entry: {
        bundle: [
            path.resolve(__dirname, 'js/app.js'),
            path.resolve(__dirname, 'css/style.scss'),
            path.resolve(__dirname, 'default/config.json')
        ]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            VueMaterial: 'vue-material/dist/vue-material.js',
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: require.resolve('babel-preset-env')
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" //S creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        //new UglifyJsPlugin(),
        new LiveReloadPlugin()
    ]
};


// module.exports = {
//     entry: {
//         bundle: [path.resolve(__dirname, 'js/script.js'), path.resolve(__dirname, 'css/style.scss')]
//     },
//     output: {
//         path: path.join(__dirname, "dist"),
//         filename: "[name].js"
//     },
//     resolve: {
//         alias: {
//             vue: 'vue/dist/vue.js',
//             VueMaterial: 'vue-material/dist/vue-material.js',
//         }
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: require.resolve('babel-preset-env')
//                     }
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: ExtractTextPlugin.extract({
//                     use: "css-loader"
//                 })
//             },
//             {
//                 test: /\.scss$/,
//                 use: [{
//                     loader: "style-loader" //S creates style nodes from JS strings
//                 }, {
//                     loader: "css-loader" // translates CSS into CommonJS
//                 }, {
//                     loader: "sass-loader" // compiles Sass to CSS
//                 }]
//             }
//         ]
//     },
//     plugins: [
//         new ExtractTextPlugin("[name].css"),
//         new UglifyJsPlugin(),
//         new LiveReloadPlugin()
//     ]
// };