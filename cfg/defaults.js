/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 29991;

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
    return {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                include: srcPath,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            // {
            //   test: /\.sass/,
            //   loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
            // },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            },
            // {
            //   test: /\.less/,
            //   loader: 'style-loader!css-loader!less-loader'
            // },
            // {
            //   test: /\.styl/,
            //   loader: 'style-loader!css-loader!stylus-loader'
            // },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            // {
            //   test: /\.(mp4|ogg|svg)$/,
            //   loader: 'file-loader'
            // }
        ]
    };
}

module.exports = {
    srcPath: srcPath,
    publicPath: '/assets/',
    // publicPath: 'images/',  //dist输出的时候改为这个
    port: dfltPort,
    getDefaultModules: getDefaultModules
};