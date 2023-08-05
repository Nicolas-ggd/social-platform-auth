/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: { domains: ["https://lh3.googleusercontent.com"] },

}

module.exports = nextConfig
