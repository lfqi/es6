const PATH = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    devtool : "eval-source-map",
    entry : "./src/js/index.js",
    output : {
        filename : "js/bundle.js",
        path : PATH.resolve(__dirname,"public")
    },
    devServer : {
        contentBase : "./public",
        inline : true,
        port : 8888,
        historyApiFallback : true
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                loader : "babel-loader",
                exclude : /node_modules/
            },
            {
                test : /\.css$/,
                use : [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test : /\.(png|jpeg|jpg|gif|svg)$/,
                use : ["file-loader"]
            },
            {
                test : /\.(eot|svg|ttf|woff|woff2)$/,
                use : [
                    "file-loader",
                    "url-loader"
                ]
            },
            {
                test : /\.html$/,
                use : ["html-withimg-loader"]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : "webpack",
            template : "./src/index.html",
            filename : "a.html",
            minify : {
                removeAttributeQuotes:true,  //移除属性的引号
                removeComments : true, //去除注释、
                removeEmptyAttributes : true, //去除空属性
                collapseWhitespace : true //去除空格
            }
        })
    ]



}