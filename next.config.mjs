/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["connect.couponsculture.com"], // ✅ your existing config
  },

  async headers() {
    return [
      {
        source: "/(.*)", // ✅ apply to all routes
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
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
 