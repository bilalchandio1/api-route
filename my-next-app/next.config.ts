// next.config.ts
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'], // Add this domain to the list of allowed domains
  },
}

export default nextConfig
