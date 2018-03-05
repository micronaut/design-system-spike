const path = require('path');

module.exports = {
    externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true,
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },

                    {
                        loader: 'css-loader',
                        options: {
                            minimize : true,
                            modules: true,
                            url: false,
                            localIdentName: '[name]__[local]'
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    }
}