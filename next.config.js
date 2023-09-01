const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.budzoracing.com',
          port: '',
          pathname: '/**',
        }
      ]
    }
  }
  
  module.exports = nextConfig