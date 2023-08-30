/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  head: {
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '63x64',
        href: '/titleIcon.png' 
      }
    ]
  }
}

module.exports = nextConfig
