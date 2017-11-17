const path = require('path');

module.exports = function(env) {
  const config = {
    entry: path.resolve(__dirname, 'src/index.js'),

    externals: {
      // use Ractive from jsdelivr in a script tag
      // you can also include Ractive in your main bundle
      ractive: 'Ractive'
    },

    module: {
      /*
      rules: [
        { test: /(\.ractive\.html|\.js)$/, loader: 'babel-loader' },
        { test: /\.ractive\.html$/, loader: 'ractive-bin-loader' }
      ],
      */
      loaders:[
          {
            test: /(\.ractive\.html|\.js)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['env']
            }
          },
          {
            test: /\.ractive\.html$/,
            loaders: 'ractive-bin-loader'
          }
        ]
    },
    output: {
      path: path.resolve('build'),
      filename: 'bundle.js'
    },

    resolve: {
      extensions: [ '.js', '.json', '.ractive.html' ]
    },

    target: 'web',

    devServer: {
      contentBase: path.resolve('build'),
      compress: true,
      port: 3000,
      disableHostCheck: true, // you may want to remove this and configure hosts if you have a public IP
      host: '0.0.0.0' // listen on all interfaces, not just localhost
    }
  }

  if (env && env.NODE_ENV === 'production') {
    config.plugins = [
      new (require('webpack').optimize.UglifyJsPlugin)()
    ];
  }

  return config;
};
