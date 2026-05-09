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
    ];
  },
};

export default nextConfig;
