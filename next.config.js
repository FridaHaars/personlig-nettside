/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = nextConfig;

// for maintenance mode
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/maintenance',
      },
    ];
  },
}