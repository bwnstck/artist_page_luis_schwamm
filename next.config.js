// next.config.js
const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  // your config for other plugins or the general next.js here...
})

module.exports = {
  pageExtensions: ['tsx'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: 'json',
          use: 'yaml-loader',
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        },
      ]
    )
    return config
  },
}
