const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //Entrada y salida del código
    entry: {
        app: [
            '@babel/polyfill',
            './src/app/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/app.bundle.js'
    },
    devServer: {
        port: 4000 //Cambia el puerto predeterminado(8080) por el puerto 4000
    },
    module: {
        rules: [{
                //Archivos JS
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                //Archivos CSS
                test: /\.css$/,
                use: [ //Valida todas las propiedades de CSS para el archivo de producción pero los guarda en el archivo JS
                    //'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', //Posiciona el HTML en la carpeta 'Build'
            minify: { //Mimificado, reduce el peso del archivo
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/app.bundle.css' //Obtiene los estilos de CSS en una carpeta aparte
        })
    ]
};