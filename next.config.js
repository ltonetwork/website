const path = require("path");

module.exports = {
  async redirects() {
    return [
      {
        source: '/partners-clients',
        destination: '/partnerships',
        permanent: true,
      },
      {
        source: '/use-cases',
        destination: '/partnerships',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};
