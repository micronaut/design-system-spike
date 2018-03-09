const path = require('path');

module.exports = {
    assetsDir: path.join(__dirname, '/src/assets/'),
    webpackConfig: {
        module: {
            rules: [
                {
                    test : /\.jsx?/,
                    loader : 'babel-loader',
                    exclude : /node_modules/,
                    query: {
                        presets: ['react', ["env", {
                            "targets": {
                                "browsers": ["last 2 versions"]
                            },
                            useBuiltIns: true
                        }]]
                    }
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },

                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
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
}