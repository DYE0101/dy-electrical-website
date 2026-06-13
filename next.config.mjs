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
  async headers() {
    // Defensive security headers applied to every route. Safe for a static
    // marketing site: no CSP (would risk GA4/Resend/Next inline scripts) and
    // HSTS is intentionally left to Vercel's default to avoid touching the
    // in-flight .au email-alias / subdomain config.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
