/** @type {import('next').NextConfig} */
const config = {
  trailingSlash: true,
  generateEtags: false,
  experimental: {
    serverActions: true,
    optimisticClientCache: false,
    optimizeServerReact: true,
    serverMinification: true
  },
  env: {
    NEXT_PUBLIC_HOST:
      process.env.NEXT_PUBLIC_VERCEL_URL ?
        `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` :
        'http://localhost:3000'
  }
};

module.exports = config;
