/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
  style-src 'self' 'unsafe-inline' https:;
  img-src 'self' data: blob: https:;
  font-src 'self' https: data:;
  connect-src 'self'
    https://connect.couponsculture.com
    https://api.shopsmaart.com
    https://super.jobkityaari.com
    https://www.google-analytics.com
    https://region1.google-analytics.com
    https://www.googletagmanager.com;
  frame-ancestors 'none';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
`.replace(/\n/g, "");

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
];

const nextConfig = {
  poweredByHeader: false,

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
        headers: securityHeaders,
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