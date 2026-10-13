
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
     // Transpile packages that might use modern syntax or have issues
    transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', 'maath']
};

export default nextConfig;
