/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["connect.couponsculture.com" , "api.shopsmaart.com"],
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


// remove this code for security

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // output: "export",
//      images: {
//     domains: ['connect.couponsculture.com'], // ✅ whitelist external domain
//   },
// };

// export default nextConfig;
 