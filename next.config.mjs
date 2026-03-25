/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
style-src 'self' 'unsafe-inline' https:;
img-src 'self' data: blob: https:;
font-src 'self' https: data:;
connect-src 'self' http://localhost:5926 https://connect.couponsculture.com https://api.shopsmaart.com https://super.jobkityaari.com https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://www.google.com;
frame-src https://www.google.com https://maps.google.com https://www.google.com/maps https://www.gstatic.com;
frame-ancestors 'self';
object-src 'none';
base-uri 'self';
form-action 'self';
`
.replace(/\n/g, "")
.replace(/\s{2,}/g, " ")
.trim();

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
    value: "SAMEORIGIN",
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
        hostname: "www.google.com",
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

 rewrites() {
  return [
    {
      source: "/api/:path*",
      destination: "https://super.jobkityaari.com/api/:path*",
    },
  ];
}
};

export default nextConfig;