/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.dyelectricalservices.com.au",
          },
        ],
        destination: "https://dyelectricalservices.com.au/:path*",
        permanent: true,
      },
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
