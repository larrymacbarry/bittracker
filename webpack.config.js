var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

module.exports = {
    entry: {
        main: [path.resolve(__dirname, 'js/script.js'), path.resolve(__dirname, 'css/style.scss')]
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
        new ExtractTextPlugin("[name].css")
    ]
};
