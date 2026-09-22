/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; base-uri 'self'; font-src 'self' https: data:; form-action 'self'; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src 'self' 'unsafe-inline' https://analytics-dashboard-wtil.onrender.com; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; connect-src 'self' https://analytics-dashboard-wtil.onrender.com; upgrade-insecure-requests"
          }
        ],
      },
    ];
  }
};

export default nextConfig;
