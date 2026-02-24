/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5926",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "connect.couponsculture.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "super.jobkityaari.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.shopsmaart.com",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Cross-Origin-Resource-Policy", value: "same-site" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://connect.couponsculture.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
