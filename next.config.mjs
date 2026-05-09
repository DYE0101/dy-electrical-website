/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
