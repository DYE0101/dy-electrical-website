/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  async redirects() {
    return [
      {
        source: "/services/hot-water",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/property-managers",
        destination: "/real-estate-agents",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
