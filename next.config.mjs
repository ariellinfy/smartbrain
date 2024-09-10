/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   ppr: "incremental",
  // },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/signin",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
