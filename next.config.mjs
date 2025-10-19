/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "drive.google.com",
            },
        ],
    },

    experimental: {
        serverActions: {
            bodySizeLimit: "5mb",
        },
    },

};

export default nextConfig;

