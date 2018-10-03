const { ANALYZE } = process.env
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/deals': { page: '/deals' },
      '/cart': { page: '/cart' },
      '/feed': {page:'/feed'},
      '/search': { page: '/search' },
      '/shop': {page:'/shop'},
      '/shop-feed' : {page:'/shop-feed'},
      '/shop-reviews': {page:'/shop-reviews'}, 
      '/shop-about': {page:'/shop-about'}, 
      '/shop-home': {page:'/shop-home'},
      '/product': {page:'/product'},
      '/product-fashion': {page:'/product-fashion'},
      '/checkout': {page:'/checkout'},
      '/processing-result': {page:'/processing-result'},
      '/test': {page:'/test'},
      '/privacy-policy': {page:'/static-page',query:{'slug':'privacy-policy'}},
      '/careers': {page:'/static-page',query:{'slug':'careers'}},
      '/terms-and-conditions': {page:'/static-page',query:{'slug':'terms-and-conditions'}},
      '/reset-password': {page:'/reset-password'},
      '/nearby-stores': {page:'/nearby'},
      '/profile/friends': {page:'/profile/following'},
      '/profile/followers': {page:'/profile/followers'},
      '/profile/following': {page:'/profile/following'},
      '/profile/notifications': {page:'/profile/notifications'},
    };
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]',
          },
        },
        'babel-loader',
        'styled-jsx-css-loader',
      ],
    })

    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    return config
  },
  
}
